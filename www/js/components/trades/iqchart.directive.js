/**
 * @name IQChart
 * @author Morteza Tavanarad
 * @contributors []
 * @since 11/07/2015
 * @copyright Binary Ltd
 */

angular
	.module('binary')
	.directive('iqChart', [
		'websocketService', 'chartService', 'marketService',
		function (websocketService, chartService, marketService) {
			return {
				restrict: 'E',
				templateUrl: 'templates/components/trades/iq-chart.template.html',
				link: function (scope, element) {
                    
                    var iqchart = null;

					var sendRequestForTicksHistory = function sendRequestForTicksHistory() {
						var symbol = scope.$parent.proposalToSend.symbol;
						websocketService.sendRequestFor.forgetTicks();
						websocketService.sendRequestFor.ticksHistory({
							"ticks_history": symbol,
							"end": "latest",
							"count": chartService.getCapacity(),
							"subscribe": 1
						});
					};

                    var init = function(){
                        iqchart = new STXChart(
                            {
                                container: $$$("#tradeContractChart"),
                                layout: {
                                    chartType: 'mountain',
                                    crosshair: true,
                                    interval: 'tick'
                                },
                                streamParameters:{"maxWait":2000},
                            }
                        );
                        iqchart.chart.endHour=23;  
                        iqchart.chart.beginHour=0;	 
                        iqchart.chart.endMinute=59;
                        iqchart.chart.beginMinute=0;
                        iqchart.chart.xAxis.timeUnit = STX.MILISECOND;

                        sendRequestForTicksHistory();
                    };

                    var convertToOHLC = function(history){
                        var times = history.times;
                        var prices = history.prices;

                        var compare = function compare(a, b) {
                            var timea = parseInt(a.time),
                                timeb = parseInt(b.time);
                            if (timea < timeb) {
                                return -1;
                            } else if (timea > timeb) {
                                return 1;
                            } else {
                                return 0;
                            }
                        };
                        var historyArray = [];
                        times.forEach(function (time, index) {
                                historyArray.push({
                                    DT: time * 1000,
                                    Close: parseFloat(prices[index])
                                });
                        });
                        times.sort(compare);

                        return historyArray
                    };

                    scope.$on('history', function(e, message){
                        if(message.history){
                            var data = convertToOHLC(message.history);
                            var name = scope.$parent.proposalToSend.symbol;
                            iqchart.newChart(name, data);
                        }
                    });

                    scope.$on('tick', function(e, message){
                        if(message.tick){
                            var tick  = message.tick;
                            iqchart.streamTrade({last:parseFloat(tick.quote), volume:0}, new Date(tick.epoch * 1000));
                        }

                    });

                    scope.$on('connection:ready', function(e){
                        init();
                    });

                    init();
                    
                }
            }
        }
    ]);

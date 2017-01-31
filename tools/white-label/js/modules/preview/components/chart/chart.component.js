/**
 * @name chart module
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/27/2017
 * @copyright Binary Ltd
 */

(function(){
  'use stict';

  angular
    .module('preview.components')
    .component('bgChart', {
      templateUrl: 'js/modules/preview/components/chart/chart.template.html',
      controller: ChartController
    });

  ChartController.$inject = [];

  function ChartController(){
    var ctrl = this;

    var dataset = [{
      data: [
        {
          "x": "3:45:18",
          "y": "978.0530"
        },
        {
          "x": "3:45:20",
          "y": "977.7500"
        },
        {
          "x": "3:45:22",
          "y": "978.1686"
        },
        {
          "x": "3:45:24",
          "y": "978.1711"
        },
        {
          "x": "3:45:26",
          "y": "978.3780"
        },
        {
          "x": "3:45:28",
          "y": "977.7883"
        },
        {
          "x": "3:45:30",
          "y": "977.8754"
        },
        {
          "x": "3:45:32",
          "y": "978.2094"
        },
        {
          "x": "3:45:34",
          "y": "978.1083"
        },
        {
          "x": "3:45:36",
          "y": "977.8664"
        },
        {
          "x": "3:45:38",
          "y": "978.1485"
        },
        {
          "x": "3:45:40",
          "y": "978.3497"
        },
        {
          "x": "3:45:42",
          "y": "978.4259"
        },
        {
          "x": "3:45:44",
          "y": "978.4359"
        },
        {
          "x": "3:45:46",
          "y": "978.2844"
        }
      ]
    }];

    dataset = {"labels":["3:45:18","3:45:20","3:45:22","3:45:24","3:45:26","3:45:28","3:45:30","3:45:32","3:45:34","3:45:36","3:45:38","3:45:40","3:45:42","3:45:44","3:45:46"],"datasets":[{"strokeColor":"#7cb5ec","pointColor":"#7cb5ec","pointStrokeColor":"#7cb5ec","data":["978.0530","977.7500","978.1686","978.1711","978.3780","977.7883","977.8754","978.2094","978.1083","977.8664","978.485","978..","978.4359","978.2844"]}],"epochLabels":[1485488718,1485488720,1485488722,1485488724,1485488726,1485488728,1485488730,1485488732,1485488734,1485488736,1485488738,1485488740,1485488742,1485488744,1485488746]};

    var option = {"animation":false,"bezierCurve":false,"datasetFill":false,"showTooltips":false,"keepAspectRatio":false,"scaleShowLabels":false,"pointDotRadius":3,"datasetStrokeWidth":2,"gridLines":[]};

    var ctx = document.getElementById('tradeChart');

    var chartGlobals = {
      chartData: dataset,
      chartOptions: option
    };

    var getDotColor = function getDotColor(value, index) {
      var color;
      color = '#7cb5ec';
      return color;
    };

    Chart.CustomScale = Chart.Scale.extend({
      initialize: function () {
        var longestText = function (ctx, font, arrayOfStrings) {
          ctx.font = font;
          var longest = 0;
          Chart.helpers.each(arrayOfStrings, function (string) {
            var textWidth = ctx.measureText(string)
              .width;
            longest = (textWidth > longest) ? textWidth : longest;
          });
          return longest;
        };

        this.calculateXLabelRotation = function () {

          this.ctx.font = this.font;

          var lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1])
            .width;


          this.xScalePaddingRight = lastWidth / 2 + 3;

          this.xLabelRotation = 0;
          if (this.display) {
            var originalLabelWidth = longestText(this.ctx, this.font, this.xLabels);
            this.xLabelWidth = originalLabelWidth;
          } else {
            this.xLabelWidth = 0;
            this.xScalePaddingRight = this.padding;
          }
          this.xScalePaddingLeft = 0;
        };
        Chart.Scale.prototype.initialize.apply(this, arguments);
      },
      draw: function () {
        var helpers = Chart.helpers;
        var each = helpers.each;
        var aliasPixel = helpers.aliasPixel;
        var ctx = this.ctx,
        yLabelGap = (this.endPoint - this.startPoint) / this.steps,
        xStart = Math.round(this.xScalePaddingLeft);
        if (this.display) {
          ctx.fillStyle = this.textColor;
          ctx.font = this.font;
          each(this.yLabels, function (labelString, index) {
            var yLabelCenter = this.endPoint - (yLabelGap * index),
            linePositionY = Math.round(yLabelCenter);

            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            if (this.showLabels) {
              ctx.fillText(labelString, xStart - 10, yLabelCenter);
            }
            ctx.beginPath();
            if (index > 0) {
              ctx.lineWidth = this.gridLineWidth;
              ctx.strokeStyle = this.gridLineColor;
            } else {
              ctx.lineWidth = this.lineWidth;
              ctx.strokeStyle = this.lineColor;
            }

            linePositionY += helpers.aliasPixel(ctx.lineWidth);

            ctx.moveTo(xStart, linePositionY);
            ctx.lineTo(this.width, linePositionY);
            ctx.stroke();
            ctx.closePath();

            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.lineColor;
            ctx.beginPath();
            ctx.moveTo(xStart - 5, linePositionY);
            ctx.lineTo(xStart, linePositionY);
            ctx.stroke();
            ctx.closePath();

          }, this);

          each(this.xLabels, function (label, index) {
            var filtered = false;
            if (typeof this.labelsFilter === "function" && this.labelsFilter(index)) {
              filtered = true;
            }
            var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
            linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth);


            ctx.beginPath();

            if (index > 0) {
              ctx.lineWidth = this.gridLineWidth;
              ctx.strokeStyle = this.gridLineColor;
            } else {
              ctx.lineWidth = this.lineWidth;
              ctx.strokeStyle = this.lineColor;
            }
            ctx.moveTo(linePos, this.endPoint);
            ctx.lineTo(linePos, this.startPoint - 12);
            ctx.stroke();
            ctx.closePath();


            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.lineColor;


            ctx.beginPath();
            ctx.moveTo(linePos, this.endPoint);
            if (filtered) {
              ctx.lineTo(linePos, this.endPoint);
            } else {
              ctx.lineTo(linePos, this.endPoint + 5);
            }
            ctx.stroke();
            ctx.closePath();

            ctx.save();
            ctx.translate(xPos, this.endPoint + 8);

            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            if (!filtered) {
              ctx.fillText(label, 0, 0);
            }
            ctx.restore();

          }, this);

        }
      }
    });

    Chart.types.Line.extend({
      name: "LineChartSpots",
      initialize: function (data) {
        this.options.labelsFilter = data.labelsFilter || null;
        Chart.types.Line.prototype.initialize.apply(this, arguments);
      },
      draw: function () {
        var dataset = this.datasets[0];
        var thisChart = this;

        dataset.points.forEach(function (point, index) {
          point.fillColor = getDotColor(chartGlobals.chartData.epochLabels[index], index);
        });

        Chart.types.Line.prototype.draw.apply(this, arguments);
        dataset.points.forEach(function (point, index) {
        });


      },
      buildScale: function (labels) {
        var helpers = Chart.helpers;
        var self = this;

        var dataTotal = function () {
          var values = [];
          self.eachPoints(function (point) {
            values.push(point.value);
          });

          return values;
        };
        var scaleOptions = {
          templateString: this.options.scaleLabel,
          height: this.chart.height,
          width: this.chart.width,
          ctx: this.chart.ctx,
          textColor: this.options.scaleFontColor,
          fontSize: this.options.scaleFontSize,
          labelsFilter: this.options.labelsFilter,
          fontStyle: this.options.scaleFontStyle,
          fontFamily: this.options.scaleFontFamily,
          valuesCount: labels.length,
          beginAtZero: this.options.scaleBeginAtZero,
          integersOnly: this.options.scaleIntegersOnly,
          calculateYRange: function (currentHeight) {
            var updatedRanges = helpers.calculateScaleRange(
                dataTotal(),
                currentHeight,
                this.fontSize,
                this.beginAtZero,
                this.integersOnly);
            helpers.extend(this, updatedRanges);
          },
          xLabels: labels,
          font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
          lineWidth: this.options.scaleLineWidth,
          lineColor: this.options.scaleLineColor,
          gridLineWidth: (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
          gridLineColor: (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
          padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
          showLabels: this.options.scaleShowLabels,
          display: this.options.showScale
        };

        if (this.options.scaleOverride) {
          helpers.extend(scaleOptions, {
            calculateYRange: helpers.noop,
            steps: this.options.scaleSteps,
            stepValue: this.options.scaleStepWidth,
            min: this.options.scaleStartValue,
            max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
          });
        }

        this.scale = new Chart.CustomScale(scaleOptions);
      }
    });
    /*
    ctx = ctx.getContext('2d');

    var chart = new Chart(ctx);
    chart.LineChartSpots(dataset, option);
    */
  }
})();

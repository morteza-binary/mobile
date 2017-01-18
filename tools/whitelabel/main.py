import os

import htmlPy
from PySide import QtGui, QtWebKit

from utils import Utils

path = os.path.dirname(os.path.abspath(__file__))

app = htmlPy.AppGUI(u'Binary.com TickTrade Whitelabel')
app.maximized = True
app.template_path = os.path.join(path, 'templates/')
app.static_path = os.path.join(path, 'statics/')
app.window.setWindowIcon(QtGui.QIcon(path + '/statics/img/icon.png'))
app.template = ('index.html', {})

QtWebKit.QWebSettings.globalSettings().setAttribute(QtWebKit.QWebSettings.DeveloperExtrasEnabled, True)

from backend import Backend
app.bind(Backend(app))


if __name__ == "__main__":
  app.start()
  QtGui.QWidget.setVisible()

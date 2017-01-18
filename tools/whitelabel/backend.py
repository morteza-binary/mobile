import htmlPy


class Backend(htmlPy.Object):

  def __init__(self, app):
    super(Backend, self).__init__()
    self.app = app

  @htmlPy.Slot()
  def changeView(self):
    self.app.template = ('settings.html', {})

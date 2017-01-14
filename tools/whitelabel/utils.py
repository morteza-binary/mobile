class Utils:

  def readFile(self, fileAddress):
    content = None
    with open(fileAddress) as f:
      content = f.read()
    return content

  def writeFile(self, fileAddress, content):
    with open(fileAddress, 'w') as f:
      f.write(content)
      f.close()

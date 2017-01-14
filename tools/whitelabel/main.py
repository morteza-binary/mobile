import os

from utils import Utils

path = os.path.dirname(os.path.abspath(__file__)) #os.getcwdu()


if __name__ == "__main__":
  print Utils().readFile(os.path.join(path, '../../www/js/configs/app.config.js'))


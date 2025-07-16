class Laptop:
    def __init__(self, name):
        self.name = name
    def getPrice(self):
        return 20000
    
class Asus(Laptop):
    def __init__(self):
        pass
    def getPrice(self):
        return 30000

vivobook = Asus()

print(vivobook.getPrice())
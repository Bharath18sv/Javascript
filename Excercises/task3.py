from datetime import date

def calculate_age(birth_date):
    today = date.today()
    return today.year - birth_date.year - (
        (today.month, today.day) < (birth_date.month, birth_date.day)
    )

def format_greeting(persons):
    greetings = []
    for person in persons:
        name = person['name']
        birth_date = person['birth_date']
        age = calculate_age(birth_date)
        greetings.append(f"Hello, my name is {name} and I am {age} years old")
    return greetings

persons = [
    {"name": "Joe","birth_date": date(1992, 7, 1)},
    {"name": "Bob","birth_date": date(1982, 1, 10)},
    {"name": "Erika","birth_date": date(1996, 7, 14)},
    {"name": "Dylan","birth_date": date(2007, 7, 14)},
    {"name": "Steve","birth_date": date(2011, 7, 14)},
]

greetings = format_greeting(persons)
for g in greetings:
    print(g)
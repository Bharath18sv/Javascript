def delete_person(delPerson):
    persons.remove(delPerson)
    return persons

persons = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak']
print(delete_person('michelle'))



    
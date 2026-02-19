class ADRRoutine:
    def __init__(self):
        self.stack = []

    def push(self, exercise):
        self.stack.append(exercise)
        print(f"Ejercicio '{exercise}' añadido a la rutina")

    def pop(self):
        if len(self.stack) > 0:
            removed = self.stack.pop()
            print(f"Ejercicio '{removed}' eliminado de la rutina")
        else:
            print("Sin ejercicios para eliminar")

    def show_stack(self):
        if len(self.stack) > 0:
            print("Tu rutina actual:")
            for i in range(len(self.stack) - 1, -1, -1):
                print("-", self.stack[i])
        else:
            print("La rutina está vacía")


# Simulation
routine = ADRRoutine()

routine.push("bench press")
routine.push("squats")
routine.push("deadlift")

routine.show_stack()

routine.pop()
routine.show_stack()








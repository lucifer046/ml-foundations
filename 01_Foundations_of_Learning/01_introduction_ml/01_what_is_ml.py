# Introduction to ML: The Concept of Learning from Data

# Imagine we have some data about how long it takes to bake a cake 
# based on the temperature of the oven.

# Traditional Programming: WE define the rule
def traditional_bake_time(temp):
    # We decided the rule is: time = 1000 / temp
    return 1000 / temp

# Machine Learning: The computer FINDS the rule from examples
# Data: (Temperature, Actual Time Taken)
cake_data = [
    (180, 5.5),
    (200, 5.0),
    (220, 4.5),
    (240, 4.2)
]

def learn_baking_rule(data):
    print("Learning patterns from data...")
    # A very simple 'learner' that finds the average ratio
    ratios = [time * temp for temp, time in data]
    learned_constant = sum(ratios) / len(ratios)
    
    print(f"Learned Rule: Time = {learned_constant:.1f} / Temperature")
    return lambda temp: learned_constant / temp

# Let's see the ML model in action
ml_model = learn_baking_rule(cake_data)

new_temp = 210
print(f"\nPredicting for {new_temp} degrees:")
print(f"Traditional Rule says: {traditional_bake_time(new_temp):.2f} mins")
print(f"Machine Learning Model says: {ml_model(new_temp):.2f} mins")

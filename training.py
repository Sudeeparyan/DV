import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression, Lasso, Ridge, LogisticRegression
from sklearn.svm import SVR
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import PolynomialFeatures
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import pickle
import json


print('hello')

def compare_ml_algorithms():
    data = pd.read_csv('training_csv\\e1data.csv')

    # Extract input features (X) and target variable (Y)
    X = data[data.columns[:-1]]  # Update with your column names
    Y = data[data.columns[-1]]  # Update with your column name

    # Split the data into training and testing sets
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

    # Create a linear regression model
    linear_model = LinearRegression()
    linear_model.fit(X_train, Y_train)
    
    linear_y_pred = linear_model.predict(X_test)
    linear_r2 = r2_score(Y_test, linear_y_pred)

    # Create a polynomial regression model
    polynomial_features = PolynomialFeatures(degree=2)
    X_train_poly = polynomial_features.fit_transform(X_train)
    X_test_poly = polynomial_features.transform(X_test)
    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, Y_train)
    
    poly_y_pred = poly_model.predict(X_test_poly)
    poly_r2 = r2_score(Y_test, poly_y_pred)
    
    # Create a Lasso regression model
    lasso_model = Lasso()
    lasso_model.fit(X_train, Y_train)
    
    lasso_y_pred = lasso_model.predict(X_test)
    lasso_r2 = r2_score(Y_test, lasso_y_pred) 
    
    # Create a Ridge regression model
    ridge_model = Ridge()
    ridge_model.fit(X_train, Y_train)
        
    ridge_y_pred = ridge_model.predict(X_test)
    ridge_r2 = r2_score(Y_test, ridge_y_pred)

    # Determine the model with the best accuracy
    best_model = max([("Linear Regression", linear_r2,linear_model),
                            ("Polynomial Regression", poly_r2,poly_model),
                            ("Lasso Regression", lasso_r2,lasso_model),
                            ("Ridge Regression", ridge_r2,ridge_model)],
                     key=lambda x: x[1])

    print("Results:")
    for model, accuracy,model_data in [("Linear Regression", linear_r2,lasso_y_pred),
                            ("Polynomial Regression", poly_r2,poly_y_pred),
                            ("Lasso Regression", lasso_r2,lasso_y_pred),
                            ("Ridge Regression", ridge_r2,ridge_y_pred)]:
        print(f"{model}: R-squared = {accuracy:.4f}")

    print(f"\nThe model with the best accuracy is {best_model[0]} with R-squared = {best_model[1]:.4f}")

    # Save the best model
    with open('best_model.pkl', 'wb') as file:
        pickle.dump(best_model[2], file)
    
    # Organize data into a JSON-friendly format
    data = best_model[2]
    return data,X_test,Y_test
    
compare_ml_algorithms()

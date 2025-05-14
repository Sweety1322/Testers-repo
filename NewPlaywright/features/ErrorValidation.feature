Feature: Ecommerce Validation
@Validation
@foo

Scenario Outline: Placing the order

Given a login to Ecommerce2 application with "<email>" and "<password>"
Then Verify Error message is displayed

Examples:
    | email              | password     | 
    | anshika@gmail.com  | Iamking@000  | 
    | hello@123          | Sweety@123   |

Feature: Ecommerce Validation
@Regression

  Scenario: Placing the order
    Given a login to Ecommerce application with "gsweety665@gmail.com" and "Chandan@123"
    When Add "ADIDAS ORIGINAL" to cart.
    Then Verify "ADIDAS ORIGINAL" is displayed in the cart.
    When Enter the valid detail " India" and place the order.
    Then Verify order is present in the orderhistory page.




@Validation
Scenario Outline: Placing the order

Given a login to Ecommerce2 application with "<email>" and "<password>"
Then Verify Error message is displayed

Examples:
    | email              | password     | 
    | anshika@gmail.com  | Iamking@000  | 
    | hello@123          | Sweety@123   |
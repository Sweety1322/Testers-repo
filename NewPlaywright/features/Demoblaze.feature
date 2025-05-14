Feature: Demoblaze purchase

   Scenario: Placing the order
    Given a login to the site with "mom2" and "sassy"
    When search for the product "MacBook air" 
    Then add to cart.
    Then item added to cart  place the order 
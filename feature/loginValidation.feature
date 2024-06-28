Feature: Launch app and validate user credential

  Scenario Outline: Standard user login
    Given Standard Login - lanuch app
    When Standard Login - click on profile tab
    When Standard Login - click on sign in
    When Standard Login - click on sign in email
    When Standard Login - Enter username
    When Standard Login - Enter password
    When Standard Login - Clik on the login button
    Then Standard Login - verify dashboard display
    
  Scenario Outline: No Password user login
    Given No Password Login - lanuch app
    When No Password Login - click on profile tab
    When No Password Login - click on sign in
    When No Password Login - click on sign in email
    When No Password Login - Enter username
    When No Password Login - Enter no password
    When No Password Login - Clik on the login button
    Then No Password Login - verify password required validation

  Scenario Outline: No user details login
    Given No User Login - lanuch app
    When No User Login - click on profile tab
    When No User Login - click on sign in
    When No User Login - click on sign in email
    When No User Login - Enter no username
    When No User Login - Enter no password
    When No User Login - Clik on the login button
    Then No User Login - verify username required validation

  Scenario Outline: Invalid - No match user login
    Given No match Login - lanuch app
    When No match Login - click on profile tab
    When No match Login - click on sign in
    When No match Login - click on sign in email
    When No match Login - Enter invalid username
    When No match Login - Enter invalid password.
    When No match Login - Clik on the login button
    When No match Login - validate invalid email
    Then No match Login - validate invalid password    

var Firebase = require('firebase');

var ref = new Firebase('http://one-hour-test.firebaseio.com');

/**
 * New User
 **/
var newUserForm = $("#newUserForm");

newUserForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var email = document.getElementById("newUserEmail").value;
  var password = document.getElementById("newUserPassword").value;
  createNewUser(email, password);
})

function createNewUser(email, password) {
  ref.createUser({
    email: email,
    password: password
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    }
    else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
}

/**
 * Auth User
 */
var authUserForm = $('#authUserForm');
 
authUserForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var email = document.getElementById('authUseremail').value;
  var password = document.getElementById('authUserpassword').value;
  authenticate(email, password);
})

function authenticate(email, password) {
  ref.authWithPassword({
    "email": email,
    "password": password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    }
    else {
      console.log("Authenticated successfully with payload:", authData);
      //app(authData);
    }
  });
}

/**
 * Add Data
 */
var addDataForm = $('#addDataForm');
 
addDataForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var add = document.getElementById('addData').value;
  addData(add);
})

function addData(data) {
  ref.push({
    "data": data
  }, function(error, authData) {
    if (error) {
      console.log("Add data failed!", error);
    }
    else {
      console.log("Add data succeeded!", authData);
    }
  });
}

/**
 * Utils/Helpers
 */
function $(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
}

function $$(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelectorAll(selector);
  // Note: the returned object is a NodeList.
  // If you'd like to convert it to a Array for convenience, use this instead:
  // return Array.prototype.slice.call(el.querySelectorAll(selector));
}
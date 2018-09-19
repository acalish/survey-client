'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// function to sign up
const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.signUpSuccess)
    // .catch(ui.signUpFail)
}

// function to sign in
const signIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.signInSuccess)
    // .catch(ui.signInFail)
}

// function to log out
const signOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.signOutSuccess)
    // .catch(ui.signOutFail)
}

// function to change password
// NOT YET WORKING, MUST ADD CHANGE PASSWORD MODAL
const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.changePasswordSuccess)
    // .catch(ui.changePasswordFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('#sign-out').on('submit', signOut)
  $('#change-password').on('submit', changePassword)
}

module.exports = {
  addHandlers
}
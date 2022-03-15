const BOOTSTRAP = "Bootstrap"
const TAILWIND = "Tailwind CSS"
const BULMA = "Bulma"
const NONE = "None"

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "bootstrap",
    "bulma",
    "tailwind",
    "frameworks",
    "submit",
    "saving",
  ]
  static values = {
    chosenTheme: String,
  }
  connect() {
    if (this.hasChosenThemeValue) {
      let value = this.chosenThemeValue

      switch (value) {
        case "bootstrap":
          this.frameworksTarget.classList.remove("hidden")
          if (this.hasBootstrapTarget) {
            this.bootstrapTarget.classList.remove("hidden")
          }
          break
        case "tailwind":
          this.frameworksTarget.classList.remove("hidden")
          if (this.hasTailwindTarget) {
            this.tailwindTarget.classList.remove("hidden")
          }
          break
        case "bulma":
          this.frameworksTarget.classList.remove("hidden")
          if (this.hasBulmaTarget) {
            this.bulmaTarget.classList.remove("hidden")
          }
          break
        default:
          this._toggleAllThemes()
      }
    }
    this.submitTarget.removeAttribute("disabled")
  }

  saveChanges(event) {
    event.preventDefault()
    // Show loading state
    this.savingTarget.classList.remove("hidden")
    // Disable button
    this.submitTarget.setAttribute("disabled", true)
    // Continue submission
    this.element.submit()

    // let urlParams = new URLSearchParams(window.location.search)
    // let reload = urlParams.get("reload")
    // if (reload) {
    //   setTimeout(function () {
    //     window.location.href = "/railsui"
    //   }, 4000)
    // }
  }

  toggleTheme(event) {
    switch (event.target.value) {
      case "bootstrap":
        this._toggleAllThemes()
        this.frameworksTarget.classList.remove("hidden")
        this.bootstrapTarget.classList.remove("hidden")
        break
      case "tailwind":
        this._toggleAllThemes()
        this.frameworksTarget.classList.remove("hidden")
        this.tailwindTarget.classList.remove("hidden")
        break
      case "bulma":
        this._toggleAllThemes()
        this.frameworksTarget.classList.remove("hidden")
        this.bulmaTarget.classList.remove("hidden")
        break
      default:
        this._toggleAllThemes()
    }
  }

  _toggleAllThemes() {
    let all = [
      this.bootstrapTarget,
      this.bulmaTarget,
      this.tailwindTarget,
      this.frameworksTarget,
    ]
    all.forEach((t) => t.classList.add("hidden"))
  }
}
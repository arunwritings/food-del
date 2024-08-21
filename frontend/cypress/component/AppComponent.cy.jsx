import React from 'react'
import AppDownload from '../../src/components/appDownload/AppDownload'
import { assets } from '../../src/assets/assets'

describe('<AppDownload />', () => {
  beforeEach(() => {
    cy.mount(<AppDownload />)
  })

  it('renders the component with text', () => {
    cy.get('.app-download').should('exist')
    cy.get('.app-download p').should('contain.text', 'For Better Experience Download')
    cy.get('.app-download p').should('contain.text', 'Thindipotha App')
  })

  it('renders the play store and app store images', () => {
    cy.get('.app-download-platforms img')
      .should('have.length', 2)
      .then(($imgs) => {
        expect($imgs[0]).to.have.attr('src', assets.play_store)
        expect($imgs[1]).to.have.attr('src', assets.app_store)
      })
  })

  it('renders the images with alt text as empty', () => {
    cy.get('.app-download-platforms img').each(($img) => {
      expect($img).to.have.attr('alt', '')
    })
  })
})
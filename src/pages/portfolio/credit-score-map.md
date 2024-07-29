---
layout: '../../layouts/PortfolioLayout.astro'
title: 'Credit Score Map'
headerImage: '/img/portfolio/credit-score-mockup.jpg'
link: 'https://www.experian.co.uk/consumer/credit-score-map-uk/'
linkText: 'Take a look'
key: 'credit-score-map'
---

An interactive credit score map of the UK built with Vue.js and Google Maps.

The main challenges of this piece were that as I was working with such a large and wide-reaching company, the modern look and feel of the piece had to work on older browsers including IE11. It also needed to have great accessibility and work seamlessly on desktop and mobile with the surrounding page content.

I managed to find topology of the United Kingdom broken down by county, and then through an algorithmic approach at run time, marry this up to the data provided for each county that included an overall credit score as well as scores broken down by age groups.

This would then allow the user to filter through counties by age group as well as an overall score encompassing all age groups.

![Credit Score Map Mobile Mockup](/img/portfolio/credit-score-map-mobile.jpg)

In order for this to work on older browsers, I had to research alternatives to how I would normally animate interactive elements, namely the credit score slider itself.

Some of the funner parts of this project were adding interactive capabilities to the topology geometry that then would interact with the Vue.js app itself. I wanted to make it as interactive as possible, I feel I reached a good balance with this.

The piece was a great success and we saw a noticable rise in traffic to the client's site upon releasing it as a marketed campaign.

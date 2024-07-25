---
layout: '../../layouts/PortfolioLayout.astro'
title: 'Digital Agency Website'
headerImage: '/img/portfolio/digital-agency-header.jpg'
link: 'https://helpmechoose.ai/'
linkText: 'Check it out'
---

This software as a service tool was made for use on ecommerce websites where users were routinely faced with daunting screens of masses of products with little differentiation, or in places where it was hard for the customer themselves to know which product would be a good fit for them.

The aim of the tool was to have the user answer a few questions, and then generate their best possible matches that are in stock and ready to ship, along with some great personalisation to really seal the deal. By reducing a customer's choice from 100s of products to just a few options, this greatly increased the likelihood of a customer actually buying something, and something that actually suits their needs.

When I joined HelpMeChoose.ai a couple of years ago, a few of the core members had just left. I was then given the challenge to rewrite the entire platform keeping a few major things in mind.

Firstly, one of the main challenges the team were facing was that only developers could edit question flows and create recommendation outlines and strategies. This needed to change so that the customer service team could handle a much higher rate of inbound users of the tool.

Secondly, the software needed to be able to take in a product feed of any structure, normalise it and be able to apply weighting calculations and generate personalisation for it to be usable across any platform.

Lastly, the platform needed to be able to be integrated with any website, including SPAs or traditional web servers.

In order to achieve this, I build a custom internal dashboard tool that gave the customer service team direct access to create question flows that included conditional questions and answers, as well as the ability to create weightings and strategies in order to show sensible or requested products by the client.

This then extended to allow for the internal team to be able to add where they'd like to deploy the tool, as well controlling how every aspect of the tool looked on a particular client's site so it would blend in seamlessly with their existing branding.

I rewrote the entire weighting engine in order to work with all of the new structures I had put in place, and to simplify things as much as possible for extending to new systems. Which is exactly what happened a year or so later.

After the main internal app was battle tested, we decided to move on to creating a Shopify App to target that market, so that customers could get the same experience as our team in creating customer journeys, all from within their own Shopify store. I oversaw the architecture and engineering for this.

As time passed, I added more and more features such as creating personalisation for each customer when they receive a recommendation using OpenAI, as well as various client specific integrations and in-depth analytics.

---
title: Projects - Anthony Fu
display: Projects
aside: false
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
plum: true
projects:
  Windows:
    - name: "Spinel"
      link: "https://spinel.ovh/"
      desc: "All your software, without any installer."
  DataScience:
    - name: "Tweet Scraping"
      link: ""
      desc: "Sentimental Analysis of 50,000 tweets on Netflix. Pandas, SNScrape, seaborn and Chart.js"
    - name: "Kaggle Competition"
      link: "https://www.kaggle.com/competitions/machine-learning-s7-iueyuytghjgj"
      desc: "Kaggle contest on Diabetes Dataset. Using Random Rorest Classification, Logistic Regression and Naïve Bayes"
  4eSport Ecosystem:
    - name: "4eSport.fr"
      link: "https://4esport.fr/"
      desc: "The website of the association. Made with Vue.js and Tailwind"
    - name: "LoL4Pros"
      link: "https://lolpros.4esport.fr/"
      desc: "LoL4Pros is a copied version of LoLPros for League of Legends players of 4eSport"
    - name: "4eS New Tab"
      link: ""
      desc: "A Chrome extension to have a new aesthetic tab"
    - name: "LXP Api"
      link: ""
      desc: "4eSport API for our members. Django, Pandas, and Google Sheets"
  Game:
    - name: "NotEnoughCards"
      link: "https://nec.4esport.fr/"
      desc: "NEC is a collectible card game based on 4eSport. Made with Vue.js, Tailwind, MongoDB, Node.js and Express. 130 unique players in less than a week"
    - name: "Amidala"
      link: ""
      desc: "Amidala is a Discord bot specially designed for NEC."
---

# Projects

_List of projects that I am proud of_ {.text-white/60 .text-normal .m-0}

<script setup>
import Test from '../../components/Test.vue'
</script>

<Test :projects="$frontmatter.projects"/>

<style>
    :root{
        --vp-c-indigo: white;
        --vp-c-text-light-2:white;    }
    h1{
        font-weight: 900 !important;
        font-size: 35px !important;
    }
    body,footer,header,.VPNavScreen{
        background-color: #121212 !important;
    }
    .VPMenu{
        background-color: #1a1a1a !important;
    }
    .VPNavScreenMenu{
        display: flex;
        justify-content:center;
    }
    .message, .copyright{
        color:  #8c8c8c !important;
        font-size: 13px !important;
    }
    .vp-doc p{
      margin:0 !important;
    }
@media (max-width: 600px) {
    .main{
        padding: 0 0 0 0 !important;
    }
    h1{
        font-size: 30px !important;
    }
}
</style>

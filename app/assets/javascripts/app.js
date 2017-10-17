document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hi you",
      reviews: [
                {
                  text: "I don't want to sound enamored, but I think Vue.Js is pretty cool.",
                  rating: "5",
                  reviewer: "Joe"
                },
                
                {
                  text: "Vue.js can kick react's butt",
                  rating: "4",
                  reviewer: "Raymond"
                },
                
                {
                  text: "Vue.js, eh. it's ok.",
                  rating: "3",
                  reviewer: "Yoyo" 
                }
                 ],

      newReviewText: "",
      newReviewRating: "",
      newReviewReviewer: ""

    },
    mounted: function() {

    },
    methods: {
      addReview: function() {
        if  (this.newReview) {
        this.reviews.push(this.newReview);
        this.newReview = "";         
        }
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1;
      }
    },
    computed: {

    }
  });
});
var CSRF_TOKEN = Cookies.get('csrftoken');
var eml = document.getElementById('email').innerHTML;
var quiz = {
  questions: [
  {
    index : 0,
    text: "¿Te interesa manejar base de datos en una empresa?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 1,
    text: "¿Te interesa dirigir grupos en una organización o empresa?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 2,
    text: "¿Te interesa realizar experimentos en un laboratorio?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 3,
    text: "¿Te interesa dar mantenimiento, reparar o diseñar equipos electronicos?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 4,
    text: "¿Te interesa operar sistemas computacionales?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 5,
    text:
    "¿Te interesa controlar los archivos y registros de una empresa?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 6,
    text: "¿Te interesa ser el responsable de un proyecto de negocios?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 7,
    text: "¿Te interesa organizar festivales artísticos o eventos culturales?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },


  {
    index : 8,
    text:
    "¿Te interesa supervisor el control de la cadena de suministros?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},


  {
    index : 9,
    text: "¿Te interesa optimizar procesos e implementar soluciones en aplicaciones de software?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  delimiters: ['[[', ']]'],
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    SendData : function(){

      let data = JSON.stringify({
        email: eml,
        r1: this.userResponses[0],
        r2: this.userResponses[1],
        r3: this.userResponses[2],
        r4: this.userResponses[3],
        r5: this.userResponses[4],
        r6: this.userResponses[5],
        r7: this.userResponses[6],
        r8: this.userResponses[7],
        r9: this.userResponses[8],
        r10: this.userResponses[9]
      });

      axios
        .post('http://127.0.0.1:8000/api/v1.0/quiz/', data, 
          {headers:{
            "X-CSRFToken": CSRF_TOKEN, 
            "Content-Type" : "application/json"}})
        .catch(err =>{
          console.log(err);
        });  
        window.location.href = '/quiz/dashboard/';
    },

    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });

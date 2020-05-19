var CSRF_TOKEN = Cookies.get('csrftoken');
var eml = document.getElementById('email').innerHTML;
var quiz = {
  questions: [
  {
    //Ingenieria en datos
    index : 0,
    text: "¿Te interesa manejar base de datos en una empresa?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },

  {
    index : 1,
    text: "¿Te interesa operar sistemas computacionales?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },

  {
    index : 2,
    text: "¿Te interesa optimizar procesos e implementar soluciones en aplicaciones de software?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 3,
    text: "¿Te interesa el desarrollo de aplicaciones web?",
    responses: [
    { text: "No me interesa"},
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    index: 4,
    text: "Te interesan las TIC? (Tecnologías de Información y Comunicación)",
    responses: [
    { text: "No me interesa"},
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    //Ingenieria en logistica
    index : 5,
    text: "¿Te interesa supervisor el control de la cadena de suministros?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 6,
    text: "¿Te interesa usar softwares de dirección y almacén?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 7,
    text: "¿Te interesa la elaboración de cadenas de distribución?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},
      
  {
    index : 8,
    text: "¿Te interesa manejar herramientas y maquinaria?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    index: 9,
    text: "¿Te interesa desarrollar e implementar estrategias logísticas?",
    responses: [
    { text: "No me interesa"},
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    //Ingenieria ambiental
    index : 10,
    text: "¿Te interesa realizar experimentos en un laboratorio?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},
  {
    index : 11,
    text: "¿Te interesa la quimica y biologia?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 12,
    text: "¿Te interesa la energía renovable?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 13,
    text: "¿Te interesan las leyes ambientales?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 14,
    text: "¿Te interesa realizar planes de manejo de residuos sólidos, energía y agua?",
    responses: [
    { text: "No me interesa"},
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    //Ingenieria industrial
    index : 15,
    text: "¿Te interesa dar mantenimiento, reparar o diseñar equipos electronicos?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho" }]},

  {
    index : 16,
    text: "¿Te interesa trabajar en equipo y lo administrativo?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 17,
    text: "¿Te interesa la automatización/robótica para un proceso productivo?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 18,
    text: "¿Te interesan las máquinas y herramientas para transformar materiales en algo usable?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 19,
    text: "¿Te interesa diseñar y operar programas de operaciones y transporte?",
    responses: [
    { text: "No me interesa"},
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    //Licenciatura en turismo
    index : 20,
    text: "¿Te interesa organizar festivales artísticos o eventos culturales?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho" }]},

  {
    index : 21,
    text: "¿Te interesa aprender nuevos idiomas?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 22,
    text: "¿Te interesa viajar por trabajo?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 23,
    text: "¿Te interesa conocer la historia de los lugares que visitas?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 24,
    text: "¿Te interesa emprender proyectos relacionados al turismo?",
    responses: [
    { text: "No me interesa"},
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho"}]},

  {
    //Negocios internacionales
    index : 25,
    text: "¿Te interesa dirigir grupos en una organización o empresa?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa"},
    { text: "Me interesa mucho" }]},
  
  {
    index : 26,
    text: "¿Te interesan los temas de importación y exportación en empresas?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },

  {
    index : 27,
    text: "¿Te interesa ser el responsable de un proyecto de negocios?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }] },

  {
    index : 28,
    text: "¿Te interesa el ecommerce y el marketing digital?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]},

  {
    index : 29,
    text: "¿Te interesan las leyes aduanales?",
    responses: [
    { text: "No me interesa" },
    { text: "Me interesa poco"},
    { text: "Me interesa" },
    { text: "Me interesa mucho" }]}]},

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
        r10: this.userResponses[9],
        r11: this.userResponses[10],
        r12: this.userResponses[11],
        r13: this.userResponses[12],
        r14: this.userResponses[13],
        r15: this.userResponses[14],
        r16: this.userResponses[15],
        r17: this.userResponses[16],
        r18: this.userResponses[17],
        r19: this.userResponses[18],
        r20: this.userResponses[19],
        r21: this.userResponses[20],
        r22: this.userResponses[21],
        r23: this.userResponses[22],
        r24: this.userResponses[23],
        r25: this.userResponses[24],
        r26: this.userResponses[25],
        r27: this.userResponses[26],
        r28: this.userResponses[27],
        r29: this.userResponses[28],
        r30: this.userResponses[29]
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

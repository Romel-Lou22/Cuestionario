function checkAnswers() {
    let score = 0;
    const total = 29;
    
    // Q1
    const q1 = document.getElementById("q1").value.toLowerCase();
    if(q1.includes("solicitud") && q1.includes("análisis") && q1.includes("plan") && q1.includes("implementación") && q1.includes("liberación")){
      score++;
    }
    
    // Q2
    const q2Elements = document.querySelectorAll('input[name="q2"]:checked');
    let q2Values = Array.from(q2Elements).map(el => el.value);
    if(q2Values.includes("Preventivo") && q2Values.includes("Correctivo") && q2Values.includes("Adaptativo") && q2Values.length === 3){
      score++;
    }
    
    // Q3
    const q3 = document.getElementById("q3").value.toLowerCase();
    if(q3.includes("pruebas")){
      score++;
    }
    
    // Q4
    const q4 = document.getElementById("q4").value.toLowerCase();
    if(q4.includes("inmediatos") && q4.includes("control")){
      score++;
    }
    
    // Q5
    const q5 = document.getElementById("q5").value.toLowerCase();
    if(q5.includes("traducción") && q5.includes("analizar") && q5.includes("mejorar") && q5.includes("modularizar") && q5.includes("reingeniería")){
      score++;
    }
    
    // Q6
    const q6 = document.querySelector('input[name="q6"]:checked');
    if(q6 && q6.value === "Verdadero") score++;
    
    // Q7
    const q7 = document.querySelector('input[name="q7"]:checked');
    if(q7 && q7.value === "Falso") score++;
    
    // Q8
    const q8 = document.querySelector('input[name="q8"]:checked');
    if(q8 && q8.value === "Verdadero") score++;
    
    // Q9
    const q9 = document.querySelector('input[name="q9"]:checked');
    if(q9 && q9.value === "Verdadero") score++;
    
    // Q10
    const q10 = document.querySelector('input[name="q10"]:checked');
    if(q10 && q10.value === "Opcion1") score++;
    
    // Q11
    const q11 = document.querySelector('input[name="q11"]:checked');
    if(q11 && q11.value === "Falso") score++;
    
    // Q12
    const q12 = document.querySelector('input[name="q12"]:checked');
    if(q12 && q12.value === "Falso") score++;
    
    // Q13
    const q13 = document.getElementById("q13").value.toLowerCase();
    if(q13.includes("arquitectura")) score++;
    
    // Q14
    const q14 = document.getElementById("q14").value.toLowerCase();
    if(q14.includes("valor") && q14.includes("compensa")) score++;
    
    // Q15
    const q15 = document.querySelector('input[name="q15"]:checked');
    if(q15 && q15.value === "Preventivo") score++;
    
    // Q16
    const q16 = document.getElementById("q16").value.toLowerCase();
    if(q16.includes("plan") && q16.includes("solicitud") && q16.includes("análisis") && q16.includes("liberación") && q16.includes("implementación")) score++;
    
    // Q17
    const q17 = document.querySelector('input[name="q17"]:checked');
    if(q17 && q17.value === "Falso") score++;
    
    // Q18
    const q18 = document.getElementById("q18").value.toLowerCase();
    if(q18.includes("cambio continuo") && q18.includes("decremento") && q18.includes("complejidad creciente") && q18.includes("crecimiento continuado")) score++;
    
    // Q19
    const q19 = document.querySelector('input[name="q19"]:checked');
    if(q19 && q19.value === "Verdadero") score++;
    
    // Q20
    const q20 = document.querySelector('input[name="q20"]:checked');
    if(q20 && q20.value === "Verdadero") score++;
    
    // Q21
    const q21 = document.querySelector('input[name="q21"]:checked');
    if(q21 && q21.value === "Falso") score++;
    
    // Q22
    const q22 = document.querySelector('input[name="q22"]:checked');
    if(q22 && q22.value === "Opcion1") score++;
    
    // Q23
    const q23 = document.getElementById("q23").value.toLowerCase();
    if(q23.includes("notificación") && q23.includes("anotación") && q23.includes("reparación") && q23.includes("puesta")) score++;
    
    // Q24
    const q24 = document.querySelector('input[name="q24"]:checked');
    if(q24 && q24.value === "Verdadero") score++;
    
    // Q25
    const q25 = document.getElementById("q25").value.toLowerCase();
    if(q25.includes("complejo") && q25.includes("observaciones")) score++;
    
    // Q26
    const q26 = document.getElementById("q26").value.toLowerCase();
    if(q26.includes("activos") && q26.includes("críticos")) score++;
    
    // Q27
    const q27 = document.getElementById("q27").value.toLowerCase();
    if(q27.includes("experiencia") && q27.includes("estabilidad") && q27.includes("contrato")) score++;
    
    // Q28
    const q28 = document.getElementById("q28").value.toLowerCase();
    if(q28.includes("prevenir") && q28.includes("problemas")) score++;
    
    // Q29
    const q29 = document.getElementById("q29").value.toLowerCase();
    if(q29.includes("retroalimentación") && q29.includes("sistemas")) score++;
    
    document.getElementById("result").textContent = "Tu puntaje: " + score + " de " + total;
  }
  
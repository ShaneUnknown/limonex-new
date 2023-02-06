const emolientes = [
{
  name: "Clásico",
  price: "S/. 2.00",
  content: ["Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida relajante que desinflama el cuerpo.",
  theme: "blue"
},
{
  name: "Especial",
  price: "S/. 5.00",
  content: ["★ Maca", "★ Miel De Abejas", "★ Polen", "★ Algarrobina", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial vitamínica que fortalece el cuerpo y el cerebro.",
  theme: "orange"
},
{
  name: "Tuna",
  price: "S/. 3.00",
  content: ["★ Tuna", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida con Tuna que desinflama el cuerpo y ayuda a la digestión.",
  theme: "purple"
},
{
  name: "Sábila",
  price: "S/. 4.00",
  content: ["★ Sábila", "★ Tuna", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida con Sábila y Tuna que desinflama el cuerpo y mejora el sistema digestivo.",
  theme: "green"
},
{
  name: "Huesos y Articulaciones",
  price: "S/. 5.00",
  content: ["★ Maca Negra", "★ Colágeno", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial preparada para recuperar el cartílago y los huesos deteriorados por la edad.",
  theme: "pink"
},
{
  name: "Colesterol e Hígado Graso",
  price: "S/. 4.00",
  content: ["★ Alcachofa", "★ Cardo Mariano", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial preparada para combatir los niveles altos de colesterol y purificar el hígado graso.",
  theme: "blue"
},
{
  name: "Riñones",
  price: "S/. 3.00",
  content: ["★ Riñoplus", "★ Chancapiedra", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial para combatir las enfermedades renales como los cálculos o piedras en el riñón.",
  theme: "orange"
},
{
  name: "Laxante",
  price: "S/. 5.00",
  content: ["★ Frutilax", "★ Tuna", "★ Chía", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial preparada para regular en tránsito digestivo y el estreñimiento.",
  theme: "purple"
},
{
  name: "Gastritis",
  price: "S/. 5.00",
  content: ["★ Sábila", "★ Tuna", "★ Tocosh", "★ Sangre De Grado", "Linaza", "Cebada", "Boldo", "Chancapiedra", "Uña de Gato", "Alfalfa (opcional)", "Dulce (al gusto)"],
  description: "- Bebida especial  preparada para tratar las heridas estomacales causadas por la gastritis y mejorar el sistema digestivo.",
  theme: "green"
},
{
  name: "Adelgazante",
  price: "S/. 5.00",
  content: ["★ Té Verde", "★ Espirulina", "Linaza", "Cebada", "Boldo", "Chancapiedra", "Uña de Gato", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial que aumenta la quema de calorías y grasa necesaria para bajar de peso.",
  theme: "pink"
},
{
  name: "Relajante",
  price: "S/. 3.00",
  content: ["★ Valeriana", "★ Boldo", "Linaza", "Cebada", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial relajante que beneficia el sueño y controla la ansiedad.",
  theme: "blue"
},
{
  name: "Antigripal / Tos",
  price: "S/. 5.00",
  content: ["★ Polen", "★ Miel De Abejas", "★ Propóleo", "★ Limón", "Linaza", "Cebada", "Boldo", "Chancapiedra", "Uña de Gato", "Alfalfa (opcional)", "Dulce (al gusto)"],
  description: "- Bebida especial para tratar los síntomas de la tos y la gripe.",
  theme: "orange"
},
{
  name: "Infección Urinaria",
  price: "S/. 4.00",
  content: ["★ Flor Blanca", "★ Arándanos", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial que ayuda a combatir las infecciones del tracto urinario.",
  theme: "purple"
},
{
  name: "Anticancerígeno",
  price: "S/. 5.00",
  content: ["★ Cúrcuma", "★ Noni", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial preparada para prevenir el daño celular y alteraciones cancerígenas.",
  theme: "green"
},
{
  name: "Próstata",
  price: "S/. 4.00",
  "content": ["★ Mashua Negra", "★ Bio Prost", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  "description": "- Bebida especial que trata las inflamaciones de la próstata.",
  "theme": "pink"
},
{
  name: "Anemia",
  price: "S/. 5.00",
  content: ["★ 7 Semillas", "★ Maca Negra", "★ Miel De Abejas", "Linaza", "Cebada", "Boldo", "Uña de Gato", "Chancapiedra", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial preparada para combatir la debilidad, cansancio y la palidez provocadas por la anemia.",
  theme: "blue"
},
{
  name: "Diabetes",
  price: "S/. 4.00",
  content: ["★ Moringa", "★ Ortiga Negra", "Linaza", "Cebada", "Boldo", "Chancapiedra", "Uña de Gato", "Alfalfa (opcional)", "Limón (al gusto)"],
  description: "- Bebida especial preparada para reducir los niveles altos de azúcar en la sangre.",
  theme: "orange"
},
{
  name: "Energizante",
  price: "S/. 8.00",
  content: ["★ Maca Negra", "★ 7 Semillas", "★ Quinua", "★ Miel de Abeja", "Boldo", "Chancapiedra", "Uña de Gato", "Alfalfa (opcional)", "Dulce y Limón (al gusto)"],
  description: "- Bebida especial que ayuda a mejorar la energía del cuerpo, para poder realizar las tareas diarias.",
  theme: "purple"
}
]

export default emolientes
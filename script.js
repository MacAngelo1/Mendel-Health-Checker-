function getValue(id){
let val=document.getElementById(id).value;
return val ? parseFloat(val) : null;
}

function analyzeHealth(){

let name=document.getElementById("name").value || "INP";
let age=document.getElementById("age").value || "INP";
let rawSex = document.getElementById("sex").value.trim().toLowerCase();
let sex = "INP";

if(rawSex === "male" || rawSex === "m"){
    sex = "Male";
}
else if(rawSex === "female" || rawSex === "f"){
    sex = "Female";
}
    

let weight=getValue("weight");
let height=getValue("height") ? getValue("height")/100 : null;

let sys=getValue("systolic");
let dia=getValue("diastolic");

let pulse=getValue("pulse");
let sugar=getValue("sugar");

let pcv=getValue("pcv");
let hb=getValue("hb");
let hba1c=getValue("hba1c");

/* DATE */
const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

/* ================= BMI ================= */
let bmiHTML = `<div class="report-section"><b>BMI:</b> INP</div>`;

if(weight && height){
let bmi=(weight/(height*height)).toFixed(1);
let status="", advice="", cls="";

if(bmi<18.5){
status="Underweight";
advice="Increase calorie intake and assess for malnutrition.";
cls="warning";
}
else if(bmi<25){
status="Normal";
advice="Maintain balanced diet and regular exercise.";
cls="good";
}
else if(bmi<30){
status="Overweight";
advice="Lifestyle modification required to prevent progression.";
cls="warning";
}
else{
status="Obese";
advice="Structured weight loss and medical evaluation recommended.";
cls="danger";
}

bmiHTML = `
<div class="report-section">
<b>BMI:</b> <span class="${cls}">${bmi} (${status})</span><br>${advice}
</div>`;
}

/* ================= BP ================= */
let bpHTML = `<div class="report-section"><b>Blood Pressure:</b> INP</div>`;

if(sys && dia){
let status="", advice="", cls="";

if(sys<120 && dia<80){
status="Optimal";
advice="Blood pressure within normal limits, Maintain healthy lifestyle.";
cls="good";
}
else if(sys<130 && dia<85){
status="Normal";
advice="Blood pressure within high normal limits, Maintain healthy lifestyle.";
cls="good";
}
else if(sys<140 || dia<90){
status="Pre-Hypertension";
advice="Elevated BP. lifestyle changes recommended, reduce salt intake, rest adequately, maintain healthy weight by modifying diet and engaging in regular physical activity, monitor blood pressure regularly.";
cls="warning";}

else if(sys<150 && dia<100){
status="Hypertension";
advice="Requires medical management and strict lifestyle control.";
cls="danger";
cls="warning";}

else{
status="Hypertension";
advice="Requires medical management and strict lifestyle control.";
cls="danger";
}

bpHTML = `
<div class="report-section">
<b>Blood Pressure:</b> <span class="${cls}">${sys}/${dia} (${status})</span><br>${advice}
</div>`;
}

/* ================= PULSE  ================= */
let pulseHTML = `<div class="report-section"><b>Pulse:</b> INP</div>`;

if(pulse){
let status="", advice="", cls="";

if(pulse<60){
status="Bradycardia";
advice="Evaluate if symptomatic.";
cls="warning";
}
else if(pulse<=100){
status="Normal";
advice="Pulse rate within normal range.";
cls="good";
}
else{
status="Tachycardia";
advice="Assess for stress, infection or cardiac causes.";
cls="danger";
}

pulseHTML = `
<div class="report-section">
<b>Pulse:</b> <span class="${cls}">${pulse} (${status})</span><br>${advice}
</div>`;
}

/* ================= SUGAR ================= */
let sugarHTML = `<div class="report-section"><b>Blood Sugar:</b> INP</div>`;

if(sugar){
let status="", advice="", cls="";

if(sugar<100){
status="Normal";
advice="Normal fasting glucose level.";
cls="good";
}
else if(sugar<126){
status="Prediabetes";
advice="Impaired glucose control. lifestyle modification Recommended.";
cls="warning";
}
else{
status="Diabetes Range";
advice="High glucose level, Requires further diagnostic evaluation..";
cls="danger";
}

sugarHTML = `
<div class="report-section">
<b>Blood Sugar:</b> <span class="${cls}">${sugar} (${status})</span><br>${advice}
</div>`;
}

/* ================= PCV ================= */
let pcvHTML = `<div class="report-section"><b>PCV:</b> INP</div>`;

if(pcv){
let status="", advice="", cls="";

if(pcv<37){
status="Low";
advice="Low PCV suggests anemia. Investigate underlying cause Increase intake of iron-rich foods or supplements.";
cls="danger";
}

else if(pcv<40 && sex==="Male"){
status="Low";
advice="Low PCV suggests anemia. Investigate underlying cause Increase intake of iron-rich foods or supplements.";
cls="danger";
}

else if(pcv>=37 && pcv<=47 && sex==="Female"){
status="Normal";
advice="Within normal range.";
cls="good";
}


else if(pcv>=40 && pcv<=54 && sex==="Male"){
status="Normal";
advice="Within normal range.";
cls="good";
}

else{
status="High";
advice="Possible dehydration or polycythaemia. Assess further.";
cls="warning";
}

pcvHTML = `
<div class="report-section">
<b>PCV:</b> <span class="${cls}">${pcv} (${status})</span><br>${advice}
</div>`;
}

/* ================= HB ================= */
let hbHTML = `<div class="report-section"><b>Hemoglobin:</b> INP</div>`;

if(hb){
let status="", advice="", cls="";

if(hb<12){
status="Low";
advice="Low hemoglobin indicates anemia, boost blood levels. Further evaluation recommended.";
cls="danger";
}

else if(hb<14 && sex==="Male"){
status="Low";
advice="Low hemoglobin indicates anemia, boost blood levels. Further evaluation recommended.";
cls="danger";
}

else if(hb<=16 && sex==="Female"){
status="Normal";
advice="Hemoglobin level within normal range.";
cls="good";
}

else if(hb<=18 && sex==="Male"){
status="Normal";
advice="Hemoglobin level within normal range.";
cls="good";
}

else{
status="High";
advice="Possible dehydration or elevated red cell mass.";
cls="warning";
}

hbHTML = `
<div class="report-section">
<b>Hemoglobin:</b> <span class="${cls}">${hb} (${status})</span><br>${advice}
</div>`;
}

/* ================= HBA1C ================= */
let hba1cHTML = `<div class="report-section"><b>HbA1c:</b> INP</div>`;

if(hba1c){
let status="", advice="", cls="";

if(hba1c<5.7){
status="Normal";
advice="Normal long-term glucose control.";
cls="good";
}
else if(hba1c<6.5){
status="Prediabetes";
advice="Elevated HbA1c. Risk of diabetes. Lifestyle modification advised.";
cls="warning";
}
else{
status="Diabetes";
advice=" Indicates diabetes. Requires medical management.";
cls="danger";
}

hba1cHTML = `
<div class="report-section">
<b>HbA1c:</b> <span class="${cls}">${hba1c} (${status})</span><br>${advice}
</div>`;
}

/* ================= FINAL OUTPUT ================= */

let resultHTML = `

<div class="report-header">
<div class="report-title">Health Report</div>
<div class="report-date">${formattedDate}</div>
</div>

<div class="report-section">
<b>Patient:</b> ${name} | ${age} | ${sex}
</div>

${bmiHTML}
${bpHTML}
${pulseHTML}
${sugarHTML}
${pcvHTML}
${hbHTML}
${hba1cHTML}

<div class="report-section">
<b>Pharmacist Advice:</b><br>
• Maintain healthy lifestyle<br>
• Monitor parameters regularly<br>
• Seek medical care when abnormal values are present<br><br>
<i>INP = Information Not Provided</i>
</div>

`;

document.getElementById("result").innerHTML=resultHTML;
}

/* PDF */
function downloadPDF(){
const element=document.getElementById("result");

html2pdf().from(element).save("Mendel_Health_Report.pdf");
}

function getValue(id){
let val=document.getElementById(id).value;
return val ? parseFloat(val) : null;
}

function analyzeHealth(){

let name=document.getElementById("name").value || "INP";
let age=document.getElementById("age").value || "INP";

let weight=getValue("weight");
let height=getValue("height") ? getValue("height")/100 : null;

let sys=getValue("systolic");
let dia=getValue("diastolic");

let pulse=getValue("pulse");
let sugar=getValue("sugar");

let pcv=getValue("pcv");
let hb=getValue("hb");
let hba1c=getValue("hba1c");

/* ================= BMI ================= */
let bmi="INP", bmiAdvice="Info not provided", bmiClass="warning";

if(weight && height){
bmi=(weight/(height*height)).toFixed(1);

if(bmi<18.5){
bmiAdvice="Underweight: Increase calorie intake and assess for malnutrition.";
bmiClass="warning";
}
else if(bmi<25){
bmiAdvice="Normal weight: Maintain balanced diet and regular exercise.";
bmiClass="good";
}
else if(bmi<30){
bmiAdvice="Overweight: Lifestyle modification and weight reduction advised.";
bmiClass="warning";
}
else{
bmiAdvice="Obesity: Increased cardiovascular risk. Recommend medical evaluation.";
bmiClass="danger";
}
}

/* ================= BLOOD PRESSURE ================= */
let bpDisplay="INP", bpStatus="INP", bpAdvice="Info not provided", bpClass="warning";

if(sys && dia){
bpDisplay=sys + "/" + dia;

if(sys<120 && dia<80){
bpStatus="Normal";
bpAdvice="Blood pressure within normal limits.";
bpClass="good";
}
else if(sys<140){
bpStatus="Pre-Hypertension";
bpAdvice="Elevated BP. Recommend lifestyle changes and monitoring.";
bpClass="warning";
}
else{
bpStatus="Hypertension";
bpAdvice="High BP. Requires medical evaluation and possible treatment.";
bpClass="danger";
}
}

/* ================= PULSE ================= */
let pulseDisplay="INP", pulseStatus="INP", pulseAdvice="Info not provided", pulseClass="warning";

if(pulse){
pulseDisplay=pulse;

if(pulse<60){
pulseStatus="Bradycardia";
pulseAdvice="Low pulse rate. Evaluate if symptomatic.";
pulseClass="warning";
}
else if(pulse<=100){
pulseStatus="Normal";
pulseAdvice="Pulse rate within normal range.";
pulseClass="good";
}
else{
pulseStatus="Tachycardia";
pulseAdvice="Elevated pulse. Assess for stress, infection or cardiac issues.";
pulseClass="danger";
}
}

/* ================= BLOOD SUGAR ================= */
let sugarDisplay="INP", sugarStatus="INP", sugarAdvice="Info not provided", sugarClass="warning";

if(sugar){
sugarDisplay=sugar;

if(sugar<100){
sugarStatus="Normal";
sugarAdvice="Normal fasting glucose level.";
sugarClass="good";
}
else if(sugar<126){
sugarStatus="Prediabetes";
sugarAdvice="Impaired glucose control. Recommend lifestyle modification.";
sugarClass="warning";
}
else{
sugarStatus="Diabetes Range";
sugarAdvice="High glucose level. Requires further diagnostic evaluation.";
sugarClass="danger";
}
}

/* ================= PCV ================= */
let pcvDisplay="INP", pcvStatus="INP", pcvAdvice="Info not provided", pcvClass="warning";

if(pcv){
pcvDisplay=pcv;

if(pcv<30){
pcvStatus="Low";
pcvAdvice="Low PCV suggests anemia. Investigate underlying cause.";
pcvClass="danger";
}
else if(pcv<=50){
pcvStatus="Normal";
pcvAdvice="Packed cell volume within normal range.";
pcvClass="good";
}
else{
pcvStatus="High";
pcvAdvice="Elevated PCV. Assess for dehydration or polycythemia.";
pcvClass="warning";
}
}

/* ================= HEMOGLOBIN ================= */
let hbDisplay="INP", hbStatus="INP", hbAdvice="Info not provided", hbClass="warning";

if(hb){
hbDisplay=hb;

if(hb<12){
hbStatus="Low";
hbAdvice="Low hemoglobin indicates anemia. Further evaluation recommended.";
hbClass="danger";
}
else if(hb<=17){
hbStatus="Normal";
hbAdvice="Hemoglobin level within normal range.";
hbClass="good";
}
else{
hbStatus="High";
hbAdvice="Elevated hemoglobin. May indicate dehydration or other conditions.";
hbClass="warning";
}
}

/* ================= HBA1C ================= */
let hba1cDisplay="INP", hba1cStatus="INP", hba1cAdvice="Info not provided", hba1cClass="warning";

if(hba1c){
hba1cDisplay=hba1c;

if(hba1c<5.7){
hba1cStatus="Normal";
hba1cAdvice="Normal long-term glucose control.";
hba1cClass="good";
}
else if(hba1c<6.5){
hba1cStatus="Prediabetes";
hba1cAdvice="Elevated HbA1c. Risk of diabetes. Lifestyle modification advised.";
hba1cClass="warning";
}
else{
hba1cStatus="Diabetes";
hba1cAdvice="High HbA1c. Indicates diabetes. Requires medical management.";
hba1cClass="danger";
}
}

/* ================= RESULT ================= */
let resultHTML=`

<div class="report-section">
<b>Patient:</b> ${name} | Age: ${age}
</div>

<div class="report-section">
<b>BMI:</b> <span class="${bmiClass}">${bmi}</span><br>${bmiAdvice}
</div>

<div class="report-section">
<b>Blood Pressure:</b> <span class="${bpClass}">${bpDisplay} (${bpStatus})</span><br>${bpAdvice}
</div>

<div class="report-section">
<b>Pulse:</b> <span class="${pulseClass}">${pulseDisplay} (${pulseStatus})</span><br>${pulseAdvice}
</div>

<div class="report-section">
<b>Blood Sugar:</b> <span class="${sugarClass}">${sugarDisplay} (${sugarStatus})</span><br>${sugarAdvice}
</div>

<div class="report-section">
<b>PCV:</b> <span class="${pcvClass}">${pcvDisplay} (${pcvStatus})</span><br>${pcvAdvice}
</div>

<div class="report-section">
<b>Hemoglobin:</b> <span class="${hbClass}">${hbDisplay} (${hbStatus})</span><br>${hbAdvice}
</div>

<div class="report-section">
<b>HbA1c:</b> <span class="${hba1cClass}">${hba1cDisplay} (${hba1cStatus})</span><br>${hba1cAdvice}
</div>

<div class="report-section">
<b>Pharmacist Advice:</b><br>
• Maintain balanced nutrition<br>
• Monitor vitals regularly<br>
• Seek medical consultation when abnormal values are detected<br><br>
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
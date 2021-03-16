// Credit: Mateusz Rybczonec


const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};



const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;






document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;


let start = document.querySelector('#start')
start.onclick = function(){
  startTimer();
  
}

let finish = document.querySelector('#finish')
finish.onclick = function() {
  window.location.reload();
}
let del = document.querySelector('#remove')
del.onclick = function(){
  localStorage.clear();
}





let stop = document.querySelector('#stop')
stop.onclick = function(){
  stopTimer();
  document.getElementById("name").readOnly = true;
  let variable = document.querySelector('#name').value;
  localStorage.setItem('name', `${variable}`)


  document.getElementById("lastName").readOnly = true;
  let variable1 = document.querySelector('#lastName').value;
  localStorage.setItem('lastName', `${variable1}`)

  document.getElementById("country").readOnly = true;
  let variable2 = document.querySelector('#country').value;
  localStorage.setItem('country', `${variable2}`)

  document.getElementById("city").readOnly = true;
  let variable3 = document.querySelector('#city').value;
  localStorage.setItem('city', `${variable3}`)

  document.getElementById("animal").readOnly = true;
  let variable4 = document.querySelector('#animal').value;
  localStorage.setItem('animal', `${variable4}`)

  document.getElementById("plant").readOnly = true;
  let variable5 = document.querySelector('#plant').value;
  localStorage.setItem('plant', `${variable5}`)

  document.getElementById("sumOf").readOnly = true;
  let variable6 = document.querySelector('#sumOf').value;
  localStorage.setItem('sumOf', `${variable6}`)

}

//  To see result
let more = document.querySelector('#more')
more.onclick = function(){
  addDiv();
  readByElements();
  eyeFunc();
} 
//  Refreshing for timer reseting

let refreshGame = document.querySelector('#refreshGame')
refreshGame.onclick = function(){
  resetTimer();
}







// ADD Div !
function addDiv() {
  const row = document.querySelectorAll('.container');
  row.forEach(rows => {
    var objTo = document.getElementById('container1');
    var divtest = document.createElement("div");
    divtest.innerHTML = rows.innerHTML;
    objTo.append(divtest);
  })

};
// sums , gets items from local storage and cheks if inputs are right 
function eyeFunc(){
  const names = localStorage.getItem("name");
  if(names == "გიო" || names == "ვასო" || names == "ანასტასია"||names == "ავთო" || names == "აანდრო" ||names == "ანა" ||names == "ალექსი" ||names == "ბაჩო"||names == "ბადრი" ||names == "ბონდო" ||names == "ბესიკა" ||names == "გიო" ||names == "გოზანოყი" ||names == "გია" ||names == "გენადი" ||names == "გარი"||names == "დათო"||names == "დიმიტრი"||names == "დიანა"||names == "დურმიშხანი"||names == "ეკა"||names == "ელენე"||names == "ელისო"||names == "ერთაოზი"||names == "ელიზბარი"||names == "ვანო"||names == "ვერა"||names == "ვატო"||names == "ვიკა"||names == "ვაჟა"||names == "ზაზა"||names == "ზვიადი"||names == "ზაირა"||names == "ზურა"||names == "თემო"||names == "თამარი"||names == "თიკო"||names == "თორნიკე"||names == "ირა"||names == "ირაკლი"||names == "იპოლიტე"||names == "ია"||names == "კახა"||names == "კოკი"||names == "კაკო"||names == "ლია"||names == "ლაშა"||names == "ლიზი"||names == "ლევანი"||names == "ლუკა"||names == "მანჩო"||names == "მარი"||names == "მანუჩარი"||names == "მიშო"||names == "ნინო"||names == "ნატო"||names == "ნანა"||names == "ნიკა"||names == "ომარი"||names == "ოლგა"||names == "ოლეგი"||names == "ოთო"||names == "ოთარი"||names == "გიორგი"||names == "პაატა"||names == "პავლე"||names == "ჟორა"||names == "ჟანა"||names == "რუსა"||names == "რუსიკო"||names == "რატი"||names == "რამაზი"||names == "სოსო"||names == "სიკო"||names == "სოლომონი"||names == "სალომე"||names == "ტარიელი"||names == "ტასო"||names == "ტატო"||names == "უშანგი"||names == "უტა"||names == "უჩა"||names == "ფატი"||names == "ფაბრიციო"||names == "ფარსმანი"||names == "ქეთევანი"||names == "ქეთი"||names == "ქაიხოსრო"||names == "ქართლოსი"||names == "ღვთისო"||names == "ყარამანი"||names == "ყუთლუ"||names == "შოთა"||names == "შორენა"||names == "ჩიქო"||names == "ჩიორა"||names == "ჩობანო"||names == "ციცო"||names == "ცოტნე"||names == "ციური"||names == "ცოცორი"||names == "ციალა"||names == "ცუციკი"||names == "ძაბული"||  names == "წ" ||names == "ჭ"||names == "ჭიჭიკო"||names == "ჭიაბერი"||names == "ჯონი"||names == "ჯარჯი"||names == "ჯემალა"||names == "ჯაბა"||names == "ხატია"||names == "ხათუნა"||names == "ხუივოზნაეტ"||names == "ხორხე"||names == "ჰამლეტი"|| names == "ჰარი"||names == "ჰერაკლე"){
    val1 = 10;
    document.getElementById("name").value = `${names} ${val1}`;


  }else{
    val1 = 0;
    document.getElementById("name").value = `${names} ${val1}`;
  }
  

  const lastNames = localStorage.getItem("lastName");
  if(lastNames == "ირემაძე" || lastNames == "იაკობიძე" || lastNames == "იოსელიანი"|| lastNames == "აბაშიძე"|| lastNames == "ადამია"|| lastNames == "ასანიძე"|| lastNames == "აბაშიძე"|| lastNames == "ბაქრაძე"|| lastNames == "ბარათაშვილი"|| lastNames == "ბესელია"|| lastNames == "ბუაძე"|| lastNames == "გაგუა"|| lastNames == "გაბუნია"|| lastNames == "გიორგობიანი"|| lastNames == "გოშაძე"|| lastNames == "დადიანი"|| lastNames == "დავითაშვილი"|| lastNames == "დეისაძე"|| lastNames == "დევდარიანი"|| lastNames == "ერისთავი"|| lastNames == "ელბაქიძე"|| lastNames == "ელისაშვილი"|| lastNames == "ვაჩაძე"|| lastNames == "ვერიშვილი"|| lastNames == "ზურაბიშვილი"|| lastNames == "ზაალიშვილი"|| lastNames == "ზვიადაური"|| lastNames == "თაბაგარი"|| lastNames == "თოდუა"|| lastNames == "კაკაბაძე"|| lastNames == "კოპალიანი"|| lastNames == "კიკნაძე"|| lastNames == "ლიპარტელიანი"|| lastNames == "ლომსაძე"|| lastNames == "ლომიძე"|| lastNames == "მაჭავარიანი"|| lastNames == "მუმლაძე"|| lastNames == "ნაჭყებია"|| lastNames == "ნაკაშიძე"|| lastNames == "ონიანი"|| lastNames == "ორბელიანი"|| 
  lastNames == "პაპიძე"|| lastNames == "პაპუნაშვილი"|| lastNames == "ჟვანია"|| lastNames == "ჟორდანია"|| lastNames == "რუხაძე"|| lastNames == "როდონაია"|| lastNames == "სანაია"|| lastNames == "სიჭინავა"|| lastNames == "ტაბიძე"|| lastNames == "ტყებუჩავა"|| lastNames == "უსუფაშვილი"|| lastNames == "ფალავანდიშვილი"|| lastNames == "ფრუიძე"|| lastNames == "ქეცბაია"|| lastNames == "ქემოკლიძე"|| lastNames == "ღოღობერიძე"|| lastNames == "ღვინია"|| lastNames == "ყიფიანი"|| lastNames == "ყიშიძე"|| lastNames == "შენგელია"|| lastNames == "შერმადინი"|| lastNames == "ჩოხელი"|| lastNames == "ჩიქოვანი"|| lastNames == "ქოიავა"|| lastNames == "ცქვიტაია"|| lastNames == "ციციშვილი"|| lastNames == "ძაგანია"|| lastNames == "ძებნიაური"|| lastNames == "წოწონავა"|| lastNames == "წივწივაძე"|| lastNames == "ჭკადუა"|| lastNames == "ჭუმბურიძე"|| lastNames == "ხურცილავა"|| lastNames == "ხაჩიძე"|| lastNames == "ჯოლოხავა"|| lastNames == "ჯოხაძე"|| lastNames == "ჰანდანოვიჩი"
  ){
    val2 = 10;
    document.getElementById("lastName").value = `${lastNames} ${val2}`;

  }else{
    val2 = 0;
    document.getElementById("lastName").value = `${lastNames} ${val2}`;

  }

  const countrys = localStorage.getItem("country");
  if(countrys == "განა" || countrys == "გერმანია" || countrys == "ავსტრია"|| countrys == "ამერიკა"|| countrys == "ბულგარეთი"|| countrys == "ბელგია"|| countrys == "დანია"|| countrys == "ესტონეთი"|| countrys == "ესპანეთი"|| countrys == "ვატიკანი"|| countrys == "ვენესუელა"|| countrys == "ვიეტნამი"|| countrys == "ზამბია"|| countrys == "ზიმბაბვე"|| countrys == "თურქეთი"|| countrys == "თურქმენეთი"|| countrys == "იტალია"|| countrys == "ისრაელი"|| countrys == "ისლანდია"|| countrys == "ირლანდია"|| countrys == "იაპონია"|| countrys == "ირანი"|| countrys == "კანადა"|| countrys == "კენია"|| countrys == "კოსტა-რიკა"|| countrys == "კორეა"|| countrys == "ლატვია"|| countrys == "ლაოსი"|| countrys == "ლუქსემბურგი"|| countrys == "მადაგასკარი"|| countrys == "მალაიზია"|| countrys == "მონღოლეთი"|| countrys == "მოლდოვა"|| countrys == "მექსიკა"|| countrys == "ნეპალი"|| countrys == "ნიდერლანდები"|| countrys == "ნორვეგია"|| countrys == "ომანი"|| countrys == "პაკისტანი"|| countrys == "პოლონეთი"|| countrys == "პორტუგალია"|| countrys == "ჟ"|| countrys == "რუმინეთი"|| countrys == "რუსეთი"|| countrys == "რუანდა"|| countrys == "საბერძნეთი"|| countrys == "საფრანგეთი"|| countrys == "სან-მარინო"|| countrys == "სამხრეთ კორეა"|| countrys == "საქართველო"|| countrys == "სენეგალი"|| countrys == "ავსტრალია"|| countrys == "ავღანეთი"|| countrys == "აზერბაიჯანი"|| countrys == "ალბანეთი"|| countrys == "ალჟირი"|| countrys == "არგენტინა"|| countrys == "სირია"|| countrys == "სუდანი"|| countrys == "სომხეთი"|| countrys == "ტაივანი"|| countrys == "ტანზანია"|| countrys == "ტაჯიკეთი"|| countrys == "ტუნისი"|| countrys == "უგანდა"|| countrys == "უკრაინა"|| countrys == "ურუგვაი"|| countrys == "უნგრეთი"|| countrys == "ფიჯი"|| countrys == "ფარერები"|| countrys == "ქუვეითი"|| countrys == "ყაზახეთი"|| countrys == "ყირგიზეთი"|| countrys == "შვეიცარია"|| countrys == "შვედეთი"|| countrys == "ჩეხეთი"|| countrys == "ჩილე"|| countrys == "ჩინეთი"|| countrys == "ც"|| countrys == "ხორვატია"|| countrys == "ჯიბუტი"|| countrys == "ჰაიტი" || countrys == "ჰონდურასი"
  ){
    val3 = 10;
    document.getElementById("country").value = `${countrys} ${val3}`;

  }else{
    val3 = 0;
    document.getElementById("country").value = `${countrys} ${val3}`;

  }
  
  const citys = localStorage.getItem("city");
  if(citys == "გორი" || citys == "გაგრა" || citys == "ჩხოროწყუ" || citys == "შეფილდი" || citys == "ყაზბეგი" || citys == "ამსტერდამი" || citys == "ათენი"|| citys == "ბათუმი"|| citys == "ბრიუსელი"|| citys == "დელი"|| citys == "დუბაი"|| citys == "ერევანი"|| citys == "ვოლგოგრადი"|| citys == "ვენა"|| citys == "ვილნიუსი"|| citys == "ზუგდიდი"|| citys == "ზესტაფონი"|| citys == "თბილისი"|| citys == "თეირანი"|| citys == "თელავი"|| citys == "იერუსალიმი"|| citys == "კიევი"|| citys == "კიშინოვი"|| citys == "ლონდონი"|| citys == "ლისაბონი"|| citys == "ლუბლიანა"|| citys == "მინსკი"|| citys == "მონაკი"|| citys == "ნიუ-იორკი"|| citys == "ბერლინი"|| citys == "ონი"|| citys == "პეტერბურგი"|| citys == "ჟენევა"|| citys == "რეიკიავიკი"|| citys == "სეული"|| citys == "ტფილისი"|| citys == "ტალინი"|| citys == "უ"|| citys == "ფოთი"|| citys == "ქაბული"|| citys == "ღ"|| citys == "ყირიმი"|| citys == "შირდი"|| citys == "ჩ"|| citys == "ც"|| citys == "ძ"|| citys == "წ"|| citys == "ჭ"|| citys == "ჯ"|| citys == "ხაშური"|| citys == "ჰ"|| citys == "ვადუცი"|| citys == "პარიზი"|| citys == "რომი"|| citys == "მადრიდი"|| citys == "ოსლო"|| citys == "ჰელსინკი"|| citys == "კოპენჰაგენი"|| citys == "სტოკჰოლმი"|| citys == "ნიქოზია"|| citys == "ქუთაისი" ){
    val4 = 10;
    document.getElementById("city").value = `${citys} ${val4}`;

  }else{
    val4 = 0;
    document.getElementById("city").value = `${citys} ${val4}`;
    
  }
  
  const animals = localStorage.getItem("animal");
  if(animals == "გორილა" || animals== "აქლემი" || animals== "ბუ" || animals== "გუგული" || animals== "დათვი" || animals== "ენოტი" || animals== "ვირი" || animals== "ზებრა" || animals== "თუთიყუში" || animals== "ირემი" || animals== "კოალა" || animals== "ლომი" || animals== "მაიმუნი" || animals== "ნიანგი" || animals== "ოპოსუმი" || animals== "პინგვინი" || animals== "ჟირაფი" || animals== "რ" || animals== "სპილო" || animals== "ტურა" || animals== "უ" || animals== "ფარშევანგი" || animals== "ქამელეონი" || animals== "ღორი" || animals== "ყანჩა" || animals== "ჩიტი" || animals== "ცხენი" || animals== "ძროხა" || animals== "წიწილა" || animals== "ჭია"|| animals== "ჯორი"|| animals== "ხვლიკი"|| animals== "ჰიპოპოტამი" || animals== "თაგვი" || animals== "შევარდენი"
  ){
    val5 = 10;
    document.getElementById("animal").value = `${animals} ${val5}`;

  }else{
    val5 = 0;
    document.getElementById("animal").value = `${animals} ${val5}`;

  }
  
  const plants = localStorage.getItem("plant");
  if(plants == "გოგრა" || plants == "გარგარი" || plants == "ატამი" || plants == "ბალი" || plants == "ალუბალი" || plants == "დაფნა" || plants == "ენძელა" || plants == "ვერხვი" || plants == "ზამბახი" || plants == "თუთა" || plants == "ია" || plants == "კაკალი" || plants == "ლიმონი" || plants == "მარწყვი" || plants == "ნიორი" || plants == "ომბალო" || plants == "პრასი" || plants == "ჟოლო" || plants == "რკო" || plants == "სტაფილო" || plants == "ტიტა" || plants == "ურნაბი" || plants == "ფორთოხალი" || plants == "ქოქოსი" || plants == "ღოღნაშო" || plants == "ყაყაჩო" || plants == "შვრია" || plants == "ჩაი" || plants == "ცაცხვი" || plants == "ძირა" || plants == "წიწაკა" || plants == "ჭადარი"|| plants == "ჯონჯოლი"|| plants == "ხახვი"|| plants == "ჰ" ){
    val6 = 10;
    document.getElementById("plant").value = `${plants} ${val6}`;
    

  }else{
    val6 = 0;
    document.getElementById("plant").value = `${plants} ${val6}`;
  
  }
  let sum = val1 + val2 + val3 + val4 + val5 + val6  
  console.log(sum)
  document.getElementById("sumOf").value = `${sum}`;
 


}




// Read only elements func
function readByElements(){
  document.getElementById("name").readOnly = true;
  document.getElementById("lastName").readOnly = true;
  document.getElementById("country").readOnly = true;
  document.getElementById("city").readOnly = true;
  document.getElementById("animal").readOnly = true;
  document.getElementById("plant").readOnly = true;
}



//Timer Func
function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
function stopTimer(){
  clearInterval(timerInterval)
}
function resetTimer(){
  clearTimeout();
}


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function resetTimer(){ 
  window.location.reload();
}


// Random massive and function

const letters = [
    'ა', 
    'ბ', 
    'გ', 
    'დ', 
    'ე',
    'ვ', 
    'ზ', 
    'თ', 
    'ი', 
    'კ',
    'ლ', 
    'მ', 
    'ნ', 
    'ო', 
    'პ',
    'ჟ', 
    'რ', 
    'ს', 
    'ტ', 
    'უ',
    'ფ', 
    'ქ', 
    'ღ', 
    'ყ', 
    'შ',
    'ჩ', 
    'ც', 
    'ძ', 
    'წ', 
    'ჭ',
    'ჯ',
    'ხ',
    'ჰ'
];

function randomLeter(letters) {
   return letters[Math.floor(Math.random() * letters.length)];
}

document.querySelector("#demo").innerHTML = randomLeter(letters);

'use strict'
console.log("TASK 2 -->")

function calcAverageCalories(days) {
    const totalDays = days.length;
    let totalCalories = 0;
    for(const day of days){
        totalCalories += day.calories
    };
    if (totalDays > 0) {
        return totalCalories / totalDays;
    } 
    return 0;
}

console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); // 3180
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270
  
  console.log(
    calcAverageCalories([])
  ); // 0

/**   Цієї умови немає в завданні, але я подумала, що якщо спортсмен сьогодні 
 записав дані, а завтра не записав, чи проспав весь день і нічого не їв, таке. Тобто, в нас в 
 умові ніби не прописано, що спортсмен обов'язково прописував всі дні. 
 Знаб, що якщо цього в тз немає, то не треба, але я не могла позбутися цієї думки.
 */

  console.log(
    calcAverageCalories([
        {day: "monday", calories: 1},
        {day: "sunday", calories: 3}
    ])
  ); // 0
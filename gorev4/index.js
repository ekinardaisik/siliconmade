const months = ["January", "February", "March", "April", "May", "June", "July"];
const gainedValues = [18, 60, 68, 58, 59, 10, 60];
const lostValues = [-18, -30, -25, -37, -3, -20, -50];
const barColorsGained = [
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
];
const barColorsLost = [
  "brown",
  "brown",
  "brown",
  "brown",
  "brown",
  "brown",
  "brown",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: months,
    datasets: [
      {
        label: "Gained",
        backgroundColor: barColorsGained,
        data: gainedValues,
      },
      {
        label: "Lost",
        backgroundColor: barColorsLost,
        data: lostValues,
      },
    ],
  },
  options: {
    tooltips: {
      mode: "index",
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

var AirDatepickerLocaleEn = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  today: "Today",
  clear: "Clear",
  dateFormat: "MM/dd/yyyy",
  timeFormat: "hh:mm aa",
  firstDay: 0,
};
new AirDatepicker("#datePicker", {
  inline: true,
  locale: AirDatepickerLocaleEn,
});

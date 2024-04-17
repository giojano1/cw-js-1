function getFeedback(score, name) {
  if (score < 51) {
    alert(
      `სამწუხაროდ ${name} ვერ გადალახეთ ბარიერი, თქვენ დაგაკლდათ  ${
        51 - score
      } ქულა`
    );
  } else if (score >= 51 && score < 90) {
    alert(`გილოცავ ${name}, თქვენ ${score - 51} ქულით მეტი აიღეთ ბარიერზე`);
  } else if (score >= 90) {
    alert(`გილოცავ ${name} თქვენ მიიღეთ ძალიან კარგი შედეგი`);
  }
}
getFeedback(51, "giorgi");

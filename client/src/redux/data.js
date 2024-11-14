async function Questions() {
  let Data = await fetch("/api/questions");
  let AllData = await Data.json();
  return AllData;
}
export default Questions();

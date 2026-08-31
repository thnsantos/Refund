// Seleciona elementos do Formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

//Seleciona os elementos da lista
const expenseList = document.querySelector('ul')
const expenseQuantity = document.querySelector("aside header p span")

//Captura o input para formatação
amount.oninput = () => {
  //Valor atual e Impede add de Letras
  let value = amount.value.replace(/\D/g, '');

  // transforma o valor em centavos para reais
  value = Number(value) / 100;

  //Atualiza o valor do input
  amount.value = formatCurrencyBRL(value);
} 

//Função formata o valor para moeda BRL
function formatCurrencyBRL(value) {
  value = value.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
   });
  
   //Rtorna o valor formatado
  return value
}


//Captura o evento de submit do formulário para obter valores
form.onsubmit = (event) => {

  //Previne o comportasmento de recarregar a página ao enviar o formulário
  event.preventDefault();

  //objeto com detalhes de novas despesas
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  console.log(newExpense);

  //Chama a função que adiciona a nova despesa na lista
  addExpense(newExpense);
}

//Função que adiciona novos itens de despesas
function addExpense(newExpense) {

  //Bloco de try caso ocorra erro ao add new item
  try {
    //cria o elemento para add a lista.
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    //Cria o ícone de categoria
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    //Cria a info da despesa
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    //Cria o nome da despesa
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

    //Cria a categoria da dispesa
    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.expense

    //Add name e category em exp ense-info
    expenseInfo.append(expenseName,expenseCategory)

    //Cria o valor da despesa
    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<span>R$</span>${newExpense.amount.toUpperCase().replace("R$", "")}`

    //Cria o icone de remover
    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.setAttribute("src", "img/remove.svg")
    removeIcon.setAttribute("alt", "remover")

    //Adiciona as infromações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

    //Adiciona o Item na Lista
    expenseList.append(expenseItem)

    //Atualiza os Totais
    updateTotals()

  } catch (error) {

    alert('Erro ao atualizar a lista de despesas');
    console.error(error);
  }
}

//Atualiza os totais das despesas
function updateTotals() {
    try {
      //Recupera todos os itens (li) da listam(ul)
      const items = expenseList.children
      
      //Atualiza a quantidade de itens da lista
      expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

      //Variavel para Incrementar o total
      let toal = 0

      //Percorre cada item (li) da lista (ul)
      for(let i = 0; i < items.length; i++){
        const itemAmount = items[item].querySelector(".expense-amount")

      }
       
    } catch (error) {
      alert('Erro ao atualizar a lista de despesas');
      console.error(error);
    }
}
import { fetchData } from '/js/api/api.js';
import { setDiscount } from '/js/utils.js';
import {
  updateTeamOptions,
  updateCategoryOptions,
} from '/components/Product/CategorySelectbox.js';

const render = async () => {};

render();

const productId = Number(window.location.pathname.split('/')[3]);
const product = await fetchData(`/products/${productId}`);
const {
  teamId,
  categoryId,
  name,
  inventory,
  price,
  rate,
  discountedPrice,
  shortDescription,
  img,
  detailDescription,
} = product;

const category = categoryId.split('-').pop();

//카테고리 선택 렌더링
const teamSelectBox = document.querySelector('.select.team select');
await updateTeamOptions(teamSelectBox);
teamSelectBox.value = teamId;

const categorySelectBox = document.querySelector('.select.category select');
async function renderCategoryOptions(teamSelectBox, categorySelectBox) {
  const teamId = teamSelectBox.value;
  await updateCategoryOptions(teamId, categorySelectBox);
}

async function renderCategoryOptionsFirst() {
  const teamId = teamSelectBox.value;
  await updateCategoryOptions(teamId, categorySelectBox);
  categorySelectBox.value = category;
}

teamSelectBox.addEventListener('input', renderCategoryOptions);
renderCategoryOptionsFirst();

//상품명
const nameInput = document.querySelector('input.name');
nameInput.value = name;

//재고
const inventoryInput = document.querySelector('input.inventory');
inventoryInput.value = inventory;

//상품원가
const priceInput = document.querySelector('.price');
priceInput.value = price;

//상품 할인률
const rateInput = document.querySelector('.rate');
rateInput.value = rate;

//상품 판매가
const discountedPriceInput = document.querySelector('.discounted-price');

function renderDiscountedPrice() {
  const discountedPrice = setDiscount(priceInput.value, rateInput.value);
  discountedPriceInput.value = discountedPrice;
}
renderDiscountedPrice();
priceInput.addEventListener('input', renderDiscountedPrice);
rateInput.addEventListener('input', renderDiscountedPrice);

//짧은 설명
const shortDescriptionInput = document.querySelector('input.shortDescription');
shortDescriptionInput.value = shortDescription;

const postButton = document.querySelector('.post');
postButton.addEventListener('click', async event => {
  event.preventDefault();

  const productThumbnail = document.querySelector('.productThumbnail').files[0];
  const formData = new FormData();
});

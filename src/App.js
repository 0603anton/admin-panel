import './App.css';
import './input.css'
import './search-bar.css'
import './reset.css'
import './checkbox-radio.css'
import './button.css'
import './dropdown.css'




function App() {
  return (
    <div class="wrapper">
      <div class="input-group wrapper__item">
        <div class="input-item input-item__content">
          <label for="dateInput" class="input-item__label"
          >Дата и время заказа</label
          >
          <div class="input-item__body">
            <input
              type="text"
              id="dateInput"
              class="input-item__input"
              placeholder="Введите"
            />
          </div>
        </div>

        <div class="input-item input-item__content">
          <label for="dateInputIncorrect" class="input-item__label"
          >Дата и время заказа</label
          >
          <div class="input-item__body">
            <input
              type="text"
              id="dateInputIncorrect"
              class="input-item__input input-item__input_incorrect"
              placeholder="Введите"
              value="06.12.2021"
            />
            <button class="input-item__button">
              <svg
                class="input-item__button_incorrect"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        <div class="input-item input-item__content">
          <label for="dateInput-disabled" class="input-item__label"
          >Дата и время заказа</label
          >
          <div class="input-item__body">
            <input
              type="text"
              id="dateInput-disabled"
              class="input-item__input input-item__input_disabled"
              placeholder="Введите"
              value="06.12.2021"
              disabled
            />
            <svg
              class="input-item__icon input-item__icon_lock"
              viewBox="0 0 16 16"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="input-group input-group__searchbar wrapper__item">
        <div
          class="input-item input-item__content input-item__content_searchbar"
        >
          <div class="input-item__body">
            <input
              type="text"
              class="input-item__input input-item__input_without-text"
              placeholder="Номер заказа или ФИО"
            />
            <div class="input-item__icon input-item__icon_search">
              <svg
                class="input-item__icon_icon-search"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#8055FF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="input-item input-item__content">
          <div class="input-item__body">
            <input
              type="text"
              class="input-item__input input-item__input_with-text"
              placeholder="Номер заказа или ФИО"
              value="50744"
            />
            <button class="input-item__icon input-item__icon_search">
              <svg
                class="input-item__icon_icon-search"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#8055FF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                  fill="none"
                />
              </svg>
            </button>
            <button class="input-item__button input-item__button_clear">
              <svg
                class="input-item__button_icon-clear"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="checkbox-group">
        <label class="check checkbox-group__checkbox" for="">
          <input class="check__box" type="checkbox" name="" id="" />
        </label>
        <label class="check" for="">
          <input class="check__box" type="checkbox" name="" id="" checked />
        </label>
      </div>

      <div class="radio-group">
        <label class="radio radio-group__radiobutton">
          <input class="radio__item" type="radio" name="radio" />
        </label>

        <label class="radio">
          <input class="radio__item" type="radio" name="radio" checked />
        </label>
      </div>

      <div class="button-wrapper wrapper__buttons">
        <div class="button-group button-wrapper__bgroup">
          <button class="button button_md button_blue button-group__button">
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
            <span class="button__text">Text here</span>
          </button>
          <button class="button button_md button_blue button-group__button">
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_md button_blue button_without-text button-group__button"
          >
            <svg
              class="button__icon button__icon_without-text"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
          </button>
        </div>
        <div class="button-group button-wrapper__bgroup">
          <button
            class="button button_md button_blue-reverse button-group__button"
          >
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_md button_blue-reverse button-group__button"
          >
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_md button_blue-reverse button_without-text button-group__button"
          >
            <svg
              class="button__icon button__icon_without-text"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
          </button>
        </div>
        <div class="button-group">
          <button
            class="button button_md button_black-reverse button-group button-group__button"
          >
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_md button_black-reverse button-group__button"
          >
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_md button_black-reverse button_without-text button-group__button"
          >
            <svg
              class="button__icon button__icon_without-text"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
          </button>
        </div>
        <div class="button-group button-wrapper__bgroup_sm">
          <button class="button button_sm button_blue button-group__button">
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
            <span class="button__text">Text here</span>
          </button>
          <button class="button button_sm button_blue button-group__button">
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_sm button_blue button_sm-without-text button-group__button"
          >
            <svg
              class="button__icon button__icon_without-text"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
          </button>
        </div>
        <div class="button-group">
          <button
            class="button button_sm button_blue-reverse button-group__button"
          >
            <svg
              class="button__icon"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_sm button_blue-reverse button-group__button"
          >
            <span class="button__text">Text here</span>
          </button>
          <button
            class="button button_sm button_blue-reverse button_sm-without-text button-group__button"
          >
            <svg
              class="button__icon button__icon_without-text"
              viewBox="0 0 16 16"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
          </button>
        </div>
      </div>

      <div class="dropdown-wrapper wrapper__dropdown">
        <div class="dropdown-group dropdown-wrapper__group">
          <div class="dropdown-group__status">
            <label class="check check_styled" for="new">
              <input
                class="check__box check__box_with-text"
                type="checkbox"
                name=""
                id="new"
              />
              <span class="check__text">Новый</span>
            </label>
            <label class="check check_styled" for="count">
              <input
                class="check__box check__box_with-text"
                type="checkbox"
                name=""
                id="count"
              />
              <span class="check__text">Рассчет</span>
            </label>
            <label class="check check_styled" for="confirmed">
              <input
                class="check__box check__box_with-text"
                type="checkbox"
                name=""
                id="confirmed"
                checked
              />
              <span class="check__text">Подтвержден</span>
            </label>
            <label class="check check_styled" for="delay">
              <input
                class="check__box check__box_with-text"
                type="checkbox"
                name=""
                id="delay"
              />
              <span class="check__text">Отложен</span>
            </label>
            <label class="check check_styled" for="done">
              <input
                class="check__box check__box_with-text"
                type="checkbox"
                name=""
                id="done"
              />
              <span class="check__text">Выполнен</span>
            </label>
            <label class="check check_styled" for="deny">
              <input
                class="check__box check__box_with-text"
                type="checkbox"
                name=""
                id="deny"
              />
              <span class="check__text">Отменен</span>
            </label>
          </div>

          <div class="dropdown-group__status">
            <label class="radio radio_styled">
              <input
                class="radio__item radio__item_with-text"
                type="radio"
                name="radioBottom"
              />
              <span class="check__text">Новый</span>
            </label>
            <label class="radio radio_styled">
              <input
                class="radio__item radio__item_with-text"
                type="radio"
                name="radioBottom"
              />
              <span class="check__text">Рассчет</span>
            </label>
            <label class="radio radio_styled">
              <input
                class="radio__item radio__item_with-text"
                type="radio"
                name="radioBottom"
                checked
              />
              <span class="check__text">Подтвержден</span>
            </label>
            <label class="radio radio_styled">
              <input
                class="radio__item radio__item_with-text"
                type="radio"
                name="radioBottom"
              />
              <span class="check__text">Отложен</span>
            </label>
            <label class="radio radio_styled">
              <input
                class="radio__item radio__item_with-text"
                type="radio"
                name="radioBottom"
              />
              <span class="check__text">Выполнен</span>
            </label>
            <label class="radio radio_styled">
              <input
                class="radio__item radio__item_with-text"
                type="radio"
                name="radioBottom"
              />
              <span class="check__text">Отменен</span>
            </label>
          </div>
        </div>
        <div class="dropdown-group">
          <div class="dropdown-group__bottom">
            <div class="input-item">
              <label for="pageInput" class="input-item__label"
              >Номер страницы</label
              >
              <div class="input-item__body">
                <input
                  type="text"
                  id="pageInput"
                  class="input-item__input input-item__input_dropdown"
                  placeholder="Введите номер"
                />
              </div>
            </div>
          </div>
          <div class="dropdown-group__bottom dropdown-group_position">
            <label for="" class="input-item__label">Удалить n записей?</label>
            <button
              class="button button_position button_md button__dropdown button_blue-reverse"
            >
              <span class="button__text">Удалить</span>
            </button>
            <button class="button_position button button_md button_blue">
              <span class="button__text">Отмена</span>
            </button>
          </div>
          <div class="dropdown-group__bottom dropdown-group_position">
            <label for="" class="input-item__label">Выбирите тему</label>
            <button
              class="button button_position button__dropdown button_md button_blue-reverse"
            >
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                strok="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="4" stroke="none" />
                <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
                <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
                <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
                <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
                <path
                  d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                  stroke="none"
                />
                <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
                <path
                  d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                  stroke="none"
                />
                <path
                  d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                  stroke="none"
                />
              </svg>
              <span class="button__text">Светлая</span>
            </button>
            <button
              class="button button_position button_md button_blue button-group__button"
            >
              <svg
                class="button__icon"
                viewBox="0 0 16 16"
                strok="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <span class="button__text">Темная</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

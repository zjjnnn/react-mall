const LayoutSidebar = () => {
  return (
    <div class="g-layout_sidebar">
      <div class="g-sm-full p-conditions">
        <section id="categoryFacetMain" class="p-condition">
          <h2 class="p-condition_h">
            <button
              class="g-sm-btn g-sm-btn-item g-sm-btn-em g-lg-appearance-n"
              type="button"
              aria-expanded="true"
              aria-controls="p-filterCategory"
              data-breakpoints="sm"
              aria-disabled="true"
              disabled="true"
            >
              <span>カテゴリを選択</span>
              <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </button>
          </h2>
          <div
            class="p-condition_body g-sm-modal"
            id="p-filterCategory"
            aria-hidden="false"
            aria-modal="false"
            aria-labelledby="p-filterCategory_h"
            data-breakpoints="sm"
          >
            <div class="g-modal_backdrop">
              <div class="g-modal_spacer"></div>
              <div class="g-modal_el">
                <header class="g-modal_head g-only-sm">
                  <p class="g-modal_h" id="p-filterCategory_h">
                    カテゴリを選択
                  </p>
                  <button
                    class="g-modal_close"
                    type="button"
                    aria-label="閉じる"
                    aria-expanded="true"
                    aria-controls="p-filterCategory"
                  >
                    <i class="g-i g-i-close" aria-hidden="true"></i>
                  </button>
                </header>
                <section class="p-condition_item">
                  <div class="p-condition_item_inner">
                    <h3 class="p-condition_t">カテゴリ</h3>
                  </div>
                  <ul class="g-sm-lineGrid-1 g-sm-lineGrid-fw g-lg-list">
                    <li
                      class="g-lineGrid_item"
                      value="category__PadSikiBedCovers"
                    >
                      <a
                        class="g-btn g-lg-btn-sm g-sm-btn-item g-fw"
                        href="/ec/cat/Shingu/PadSikiBed/PadSikiBedCovers/1/?orderBy=5 "
                        onclick="getCategoryForTealium('敷きパッド')"
                      >
                        <span>敷きパッド(75)</span>
                        <i class="g-i g-i-arrow-r" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li
                      class="g-lineGrid_item"
                      value="category__PadSikiBedBedpad"
                    >
                      <a
                        class="g-btn g-lg-btn-sm g-sm-btn-item g-fw"
                        href="/ec/cat/Shingu/PadSikiBed/PadSikiBedBedpad/1/?orderBy=5 "
                        onclick="getCategoryForTealium('ベッドパッド')"
                      >
                        <span>ベッドパッド(10)</span>
                        <i class="g-i g-i-arrow-r" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li
                      class="g-lineGrid_item"
                      value="category__PadSikiBedMattressto"
                    >
                      <a
                        class="g-btn g-lg-btn-sm g-sm-btn-item g-fw"
                        href="/ec/cat/Shingu/PadSikiBed/PadSikiBedMattressto/1/?orderBy=5 "
                        onclick="getCategoryForTealium('マットレストッパー')"
                      >
                        <span>マットレストッパー(7)</span>
                        <i class="g-i g-i-arrow-r" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div class="g-modal_spacer"></div>
            </div>
          </div>
        </section>
        <section class="p-condition">
          <h2 class="p-condition_h">
            <button
              id="selectFacet"
              class="g-sm-btn g-sm-btn-item g-sm-btn-em g-lg-appearance-n"
              type="button"
              aria-expanded="true"
              aria-controls="p-filterCondition"
              data-breakpoints="sm"
              aria-disabled="true"
              disabled="true"
            >
              <span>条件で絞り込む</span>
              <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </button>
          </h2>
          <div
            class="p-condition_body g-sm-modal"
            id="p-filterCondition"
            aria-hidden="false"
            aria-modal="false"
            aria-labelledby="p-filterCondition_h"
            data-breakpoints="sm"
          >
            <div class="g-modal_backdrop">
              <div class="g-modal_spacer"></div>
              <div class="g-modal_el">
                <header class="g-modal_head g-only-sm">
                  <p class="g-modal_h" id="p-filterCondition_h">
                    条件で絞り込む
                  </p>
                  <button
                    id="cancelSelectFacet"
                    class="g-modal_close"
                    type="button"
                    aria-label="閉じる"
                    aria-expanded="true"
                    aria-controls="p-filterCondition"
                  >
                    <i class="g-i g-i-close" aria-hidden="true"></i>
                  </button>
                </header>
                <section class="p-condition_item">
                  <div class="p-condition_item_inner">
                    <h3 class="p-condition_t">現在絞り込んでいる条件</h3>
                    <ul id="selectedAttributes" class="g-flow-xs"></ul>
                  </div>
                  <div class="p-condition_btns">
                    <button
                      id="clearAllfacets"
                      onclick="clearAll()"
                      class="g-btn g-sm-btn-em g-lg-fw .p-condition_btns button"
                      type="button"
                      disabled="disabled"
                    >
                      <span>全条件をクリア</span>
                    </button>
                    <button
                      id="narrowDownButton"
                      onclick="narrowDownFacets();getAllFacetsForTealium();"
                      class="g-btn g-btn-brand g-only-sm"
                      type="button"
                      aria-expanded="true"
                      aria-controls="p-filterCondition"
                    >
                      <span>絞り込む</span>
                    </button>
                  </div>
                </section>
                <div id="mainFacetAttributes">
                  <section class="p-condition_item">
                    <h3 class="p-condition_t">
                      <button
                        id="toggleDiv"
                        class="g-sm-btn g-sm-btn-item g-lg-appearance-n"
                        type="button"
                        aria-expanded="true"
                        aria-controls="p-filteratrribute-0076"
                        data-breakpoints="sm"
                        aria-disabled="true"
                        disabled="true"
                      >
                        <span>機能・仕様</span>
                        <i
                          class="g-i g-i-arrow-d g-only-sm"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </h3>
                    <div
                      id="p-filteratrribute-0076"
                      aria-hidden="false"
                      data-breakpoints="sm"
                    >
                      <ul class="g-sm-lineGrid-1 g-sm-lineGrid-fw g-lg-list">
                        <li class="g-lineGrid_item">
                          <label class="g-checkable g-checkable-em g-sm-checkable-item g-size">
                            <input
                              id="id-facet-attribute-attribute__0076__00760225"
                              type="checkbox"
                              name="attribute-filter"
                              value="attribute__0076__00760225"
                              onclick="selectedFacetAttributes(this);getFacetForTealium('機能・仕様','洗濯機OK');"
                              data-label="洗濯機OK"
                            />
                            <span>
                              <i
                                class="g-s g-s-checkbox-on g-checkable_on"
                                aria-hidden="true"
                              ></i>
                              <i
                                class="g-s g-s-checkbox-off g-checkable_off"
                                aria-hidden="true"
                              ></i>
                              <span class="g-checkable_label">洗濯機OK(1)</span>
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>

                <section class="p-condition_item">
                  <h3 class="p-condition_t">
                    <button
                      class="g-sm-btn g-sm-btn-item g-lg-appearance-n"
                      type="button"
                      aria-expanded="true"
                      aria-controls="priceFacet"
                      data-breakpoints="sm"
                      aria-disabled="true"
                      disabled="true"
                    >
                      <span>価格</span>
                      <i
                        class="g-i g-i-arrow-d g-only-sm"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </h3>
                  <div
                    id="priceFacet"
                    aria-hidden="false"
                    data-breakpoints="sm"
                  >
                    <ul class="g-sm-lineGrid-1 g-sm-lineGrid-fw g-lg-list">
                      <li class="g-lineGrid_item">
                        <label class="g-checkable g-checkable-em g-sm-checkable-item">
                          <input
                            id="id-price__0_1000"
                            type="radio"
                            name="price-filter"
                            data-label="〜 ¥1,000"
                            value="price__0_1000"
                            onclick="selectedPrice();getPrizeForTealium('〜 ¥1,000');"
                          />
                          <span>
                            <i
                              class="g-s g-s-radio-on g-checkable_on"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="g-s g-s-radio-off g-checkable_off"
                              aria-hidden="true"
                            ></i>
                            <span class="g-checkable_label">
                              〜 ¥1,000（2）
                            </span>
                          </span>
                        </label>
                      </li>
                    </ul>

                    <div class="g-inputGroup g-inputGroup-line g-unit p-condition_price">
                      <div class="g-inputGroup_static">¥</div>
                      <input
                        class="g-input g-input-sm"
                        id="p-minPrice"
                        type="text"
                        name="minPrice"
                        maxlength="7"
                        value=""
                        size="5"
                        aria-label="最低価格"
                      />
                      <div class="g-inputGroup_static">〜 ¥</div>
                      <input
                        class="g-input g-input-sm"
                        id="p-maxPrice"
                        type="text"
                        name="maxPrice"
                        maxlength="7"
                        value=""
                        size="5"
                        aria-label="最高価格"
                      />
                      <button
                        id="priceButton"
                        class="g-btn g-btn-brand g-font-sm g-only-lg"
                        type="button"
                        onclick="selectedPrice();getPrizeForTealium('');"
                        data-interlock='{"subjects":["#p-minPrice","#p-maxPrice"]}'
                        disabled="disabled"
                      >
                        <span>絞り込む</span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
              <div class="g-modal_spacer"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LayoutSidebar;

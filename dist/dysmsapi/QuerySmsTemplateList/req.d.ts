export interface QuerySmsTemplateListRequest {
    /**
     * 当前页码。默认取值为**1**。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页显示的模板个数。取值范围：**1~50**。
     * @example `10`
     */
    "PageSize"?: number;
}

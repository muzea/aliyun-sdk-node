export interface QuerySmsSignListRequest {
    /**
     * 展示第几页的签名信息。默认取值为**1**。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页展示的签名条数。取值范围：**1~50**。
     * @example `10`
     */
    "PageSize"?: number;
}

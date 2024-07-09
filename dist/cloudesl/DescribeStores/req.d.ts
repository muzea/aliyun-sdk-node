export interface DescribeStoresRequest {
    /**
     * 商家自定义门店ID。
     * @example `123456`
     */
    "UserStoreCode"?: string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 门店名称。
     * @example `天猫超市`
     */
    "StoreName"?: string;
    /**
     * 门店创建时间：结束时间。
     * @example `2020-03-08T02:58:16Z`
     */
    "ToDate"?: string;
    /**
     * 门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId"?: string;
    /**
     * 门店创建时间：开始时间。
     * @example `2020-03-06T02:58:16Z`
     */
    "FromDate"?: string;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 门店配置的模板版本号；
     * @example `1.1.0`
     */
    "TemplateVersion"?: string;
}

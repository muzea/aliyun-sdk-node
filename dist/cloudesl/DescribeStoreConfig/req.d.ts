export interface DescribeStoreConfigRequest {
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 系统保留字段，请忽略
     * @example `{}`
     */
    "ExtraParams"?: string;
}

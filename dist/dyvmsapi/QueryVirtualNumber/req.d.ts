export interface QueryVirtualNumberRequest {
    /**
     * 产品名称。默认取值：**dyvms**。
     * @example `dyvms`
     */
    "ProdCode"?: string;
    /**
     * 页号。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 路由类型。取值：
     * - **0**：归属地优先。
     * - **1**：随机。
     * @example `0`
     */
    "RouteType"?: number;
}

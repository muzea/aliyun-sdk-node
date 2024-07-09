export interface DescribeApisByAppRequest {
    /**
     * APP的ID
     * @example `333486644`
     */
    "AppId": number;
    /**
     * 当前页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页条目
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * API的ID
     * @example `b19240592b1b4e74961fb8438ed7550c`
     */
    "ApiUid"?: string;
    /**
     * API名称
     * @example `getPersonInfo`
     */
    "ApiName"?: string;
    /**
     * API请求路径
     * @example `/tt`
     */
    "Path"?: string;
    /**
     * API的请求HTTP Method
     * @example `POST`
     */
    "Method"?: string;
    /**
     * API描述信息
     * @example `test`
     */
    "Description"?: string;
}

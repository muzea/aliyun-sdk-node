export interface DescribeApisWithStageNameIntegratedByAppRequest {
    /**
     * APP的ID
     * @example `2386789`
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
     * @example `ApiName`
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
     * 描述，不超过200个字符
     * @example `test`
     */
    "Description"?: string;
}

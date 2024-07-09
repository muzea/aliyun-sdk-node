export interface ListFunctionLogRequest {
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 页大小，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 函数名称。
     * @example `demoFunction`
     */
    "Name": string;
    /**
     * 服务空间的SpaceID。
     * @example `dece4ea0-****-4cfa-8514-8a88d205e2b8`
     */
    "SpaceId": string;
    /**
     * 函数运行时请求ID。
     * @example `0a206a521561344642018387523432`
     */
    "LogRequestId"?: string;
    /**
     * 开始时间。
     * @example `1560134212326`
     */
    "FromDate"?: number;
    /**
     * 结束时间。
     * @example `1560134212326`
     */
    "ToDate"?: number;
    /**
     * 状态。可选值：
     * - SUCCESS ：成功
     * - FAIL ：失败
     * - 为空时返回全部
     * @example `SUCCESS`
     */
    "Status"?: string;
}

export interface QueryCommercialUsageResponse {
    /**
     * 接口状态，取值说明如下：2XX：成功。3XX：重定向。4XX：请求错误。5XX：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `99A663CB-8D7B-4B0D-A006-03C8EE38E7BB`
     */
    RequestId: string;
    /**
     * 查询是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 涉及到多区域查询是，整体是否执行完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Complete: boolean;
        /**
         * 返回数据的数据结构体列表。
         */
        Items: any[];
    };
}

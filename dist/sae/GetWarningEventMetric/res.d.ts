export interface GetWarningEventMetricResponse {
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3B763F98-0BA2-5C23-B6B8-558568D2****`
     */
    RequestId: string;
    /**
     * 应用信息列表。
     */
    Data: {
        /**
         * 应用ID。
         * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
         */
        AppId: string;
        /**
         * 应用名称。
         * @example `test`
         */
        Name: string;
        /**
         * 命名空间ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * Warning事件数量。
         * @example `10`
         */
        WarningCount: number;
    }[];
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取应用列表。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}

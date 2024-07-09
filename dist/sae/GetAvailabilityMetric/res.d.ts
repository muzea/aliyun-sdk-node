export interface GetAvailabilityMetricResponse {
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3A92C4EA-4C53-5A1C-8AEB-F2DB1198****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 应用ID。
         * @example `017f39b8-dfa4-4e16-a84b-1dcee4b1****`
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
         * 当前实例数。
         * @example `1`
         */
        Runnings: number;
        /**
         * 目标实例数。
         * @example `0`
         */
        Instances: number;
        /**
         * 异常实例数。
         * @example `0`
         */
        ErrorInstances: number;
        /**
         * 是否启用弹性伸缩。取值说明如下：
         * - **1**：启用弹性伸缩。
         * - **0**：未启用弹性伸缩。
         * @example `0`
         */
        EnableAutoscale: number;
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

export interface GetAppMessageQueueRouteResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `4B00BCB0-105F-5A2A-B75B-641C8E9B18FC`
     */
    RequestId: string;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `success`
     */
    Message: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 应用ID。
         * @example `hkhon1po62@54e1f42f37cd65a`
         */
        AppId: string;
        /**
         * 地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 开启或关闭。
         * - `true`：开启。
         * - `false`：关闭。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 此应用的未打标环境，不会消费的标签。
         */
        Tags: string[];
        /**
         * 消息灰度过滤侧。
         * @example `Server`
         */
        FilterSide: string;
    };
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：true：请求成功。                                 false：请求失败。
     * @example `true`
     */
    Success: boolean;
}

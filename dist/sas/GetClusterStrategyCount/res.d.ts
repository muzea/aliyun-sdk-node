export interface GetClusterStrategyCountResponse {
    /**
     * 返回数据详情。
     */
    Data: {
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 策略数。
         * @example `10`
         */
        StrategyCount: number;
    }[];
    /**
     * 总条数。
     * @example `3`
     */
    Count: number;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `796348B5-115C-5BFB-83EA-B5C3C12F822F`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
}

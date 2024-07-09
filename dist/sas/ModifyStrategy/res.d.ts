export interface ModifyStrategyResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8EFA2BD9-00CD-5D69-B6B0-4EE83EAF072E`
     */
    RequestId: string;
    /**
     * 接口调用的结果状态。取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 策略ID。
         * @example `8164239`
         */
        StrategyId: number;
    };
}

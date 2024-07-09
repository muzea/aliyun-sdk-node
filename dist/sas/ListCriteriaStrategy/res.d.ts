export interface ListCriteriaStrategyResponse {
    /**
     * 容器主动防御规则编号及规则名称列表。
     */
    Data: {
        /**
         * 容器主动防御规则唯一标识。
         * @example `test`
         */
        Id: number;
        /**
         * 容器主动防御规则名称。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 接口调用的结果状态。取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `835851E3-AFA2-5EA7-93E9-4FC9BCF3F973`
     */
    RequestId: string;
}

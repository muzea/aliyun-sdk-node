export interface DescribeImageEventOperationConditionResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 告警类型。取值：
         * - **sensitiveFile**：敏感文件。
         * @example `sensitiveFile`
         */
        EventType: string;
        /**
         * 操作列表。
         */
        Operations: {
            /**
             * 操作码。取值：
             * - **whitelist**：白名单。
             * @example `whitelist`
             */
            OperationCode: string;
            /**
             * 操作名称。
             * @example `whitelist`
             */
            OperationName: string;
            /**
             * 规则条件。
             */
            Conditions: {
                /**
                 * 条件关键字。取值：
                 * - **MD5**：MD5。
                 * - **PATH**：路径。
                 * @example `MD5`
                 */
                ConditionKey: string;
                /**
                 * 条件名称。
                 * @example `MD5`
                 */
                ConditionName: string;
                /**
                 * 匹配类型。
                 */
                SupportedMisType: string[];
            }[];
        }[];
        /**
         * 规则范围。
         */
        Scenarios: string[];
    };
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `ADE57832-9666-511C-9A80-B87DE2E8****`
     */
    RequestId: string;
}

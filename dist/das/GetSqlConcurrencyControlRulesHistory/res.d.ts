export interface GetSqlConcurrencyControlRulesHistoryResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表，包括信息总数、错误码等。
     */
    Data: {
        /**
         * 总记录数。
         * @example `4`
         */
        Total: number;
        List: {
            /**
             * 详细信息列表。
             */
            rules: {
                /**
                 * 当前实例的限流规则ID。
                 * @example `16`
                 */
                ItemId: number;
                /**
                 * 选择SQL的类型。取值：
                 * - **SELECT**
                 * - **UPDATE**
                 * - **DELETE**
                 * @example `SELECT`
                 */
                SqlType: string;
                /**
                 * 实例ID。
                 * @example `rm-2ze1jdv45i7l6****`
                 */
                InstanceId: string;
                /**
                 * 需要限流的SQL关键词。
                 * >多个关键词间以波浪线（~）分隔，SQL语句中需要同时包含这些关键词才会触发限流规则。
                 * @example `call~open~api~test~4~from~POP`
                 */
                SqlKeywords: string;
                /**
                 * 获取限流规则历史的开始时间，格式为Unix时间戳，单位为毫秒。
                 * @example `1608888296000`
                 */
                StartTime: number;
                /**
                 * 哈希值，根据输入的限流关键词计算出来的值。
                 * @example `b0b8aceeb43baea87b219c81767b****`
                 */
                KeywordsHash: string;
                /**
                 * SQL限流的生效时长，单位为秒。
                 * >限流规则仅在生效时间内开启。
                 * @example `600`
                 */
                ConcurrencyControlTime: number;
                /**
                 * 用户ID。
                 * @example `testxxx`
                 */
                UserId: string;
                /**
                 * SQL最大并发数，取值为大于或等于1的整数。
                 * >当包含关键词的SQL达到最大并发数时会触发限流策略。
                 * @example `2`
                 */
                MaxConcurrency: number;
                /**
                 * 限流规则的生效状态，取值：
                 * - **Open**：限流规则正在生效中。
                 * - **Closed**：限流规则已执行结束。
                 * @example `Open`
                 */
                Status: string;
            }[];
        };
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功
     * - **false**：执行失败
     * @example `true`
     */
    Success: string;
}

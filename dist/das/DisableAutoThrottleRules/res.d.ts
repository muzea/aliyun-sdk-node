export interface DisableAutoThrottleRulesResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 总数据库实例数量。
         * @example `2`
         */
        TotalInstanceCount: number;
        /**
         * 关闭自动SQL限流功能成功的数据库实例数量。
         * @example `1`
         */
        ConfigSuccessInstanceCount: number;
        /**
         * 关闭自动SQL限流功能失败的数据库实例数量。
         * @example `1`
         */
        ConfigFailInstanceCount: number;
        /**
         * 关闭自动SQL限流功能成功的数据库实例列表。
         */
        ConfigSuccessInstanceList: {
            /**
             * 关闭设置是否成功：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            ConfigSuccess: boolean;
            /**
             * 数据库实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
        }[];
        /**
         * 关闭自动SQL限流功能失败的数据库实例列表。
         */
        ConfigFailInstanceList: {
            /**
             * 关闭设置是否成功：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            ConfigSuccess: boolean;
            /**
             * 数据库实例ID。
             * @example `rm-2ze9xrhze0709****`
             */
            InstanceId: string;
            /**
             * 错误信息。
             * @example `cannot found instance by rm-2ze9xrhze0709****`
             */
            ErrorMessage: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}

export interface UpdateAutoResourceOptimizeRulesAsyncResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 请求是否失败：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        Fail: boolean;
        /**
         * 批量设置的返回数据。
         * > 异步请求完成时（即isFinish取值为**true**时）才会返回该数据。
         */
        ConfigResponse: {
            /**
             * 总数据库实例数量。
             * @example `2`
             */
            TotalInstanceCount: number;
            /**
             * 设置成功的数据库实例数量。
             * @example `1`
             */
            ConfigSuccessInstanceCount: number;
            /**
             * 设置失败的数据库实例数量。
             * @example `1`
             */
            ConfigFailInstanceCount: number;
            /**
             * 设置成功的数据库实例列表。
             */
            ConfigSuccessInstanceList: {
                /**
                 * 设置是否成功：
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
             * 设置失败的数据库实例列表。
             */
            ConfigFailInstanceList: {
                /**
                 * 设置是否成功：
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
                 * @example `Only Support DAS Pro High-availability Edition RDS MySQL 5.6, 5.7, 8.0 instance, and CPU cores >= 4, innodb_file_per_table=ON`
                 */
                ErrorMessage: string;
            }[];
        };
        /**
         * 异步请求的ID。
         * @example `async__20ee808e72257f16a4fe024057ca****`
         */
        ResultId: string;
        /**
         * 异步请求是否执行完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        IsFinish: boolean;
        /**
         * 异步请求的执行状态：
         * - **RUNNING**：正在运行。
         * - **SUCCESS**：成功。
         * - **FAIL**：失败。
         * @example `SUCCESS`
         */
        State: string;
        /**
         * 异步请求是否执行完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Complete: boolean;
        /**
         * 执行时间，格式为Unix时间戳，单位为毫秒。
         * @example `1645668213000`
         */
        Timestamp: number;
    };
    /**
     * 请求ID。
     * @example `9CB97BC4-6479-55D0-B9D0-EA925AFE****`
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

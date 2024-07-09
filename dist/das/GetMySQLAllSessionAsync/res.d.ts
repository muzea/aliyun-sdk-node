export interface GetMySQLAllSessionAsyncResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）
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
         * 会话数据。
         */
        SessionData: {
            /**
             * 会话总数。
             * @example `988`
             */
            TotalSessionCount: number;
            /**
             * 运行中会话总数。
             * @example `10`
             */
            ActiveSessionCount: number;
            /**
             * 运行中会话执行的最长时间，单位为秒（s）。
             * @example `6`
             */
            MaxActiveTime: number;
            /**
             * 会话列表。
             */
            SessionList: {
                /**
                 * 会话ID。
                 * @example `14521783`
                 */
                SessionId: number;
                /**
                 * 数据库用户名。
                 * @example `testUser`
                 */
                User: string;
                /**
                 * 客户端IP地址。
                 * @example `47.100.XX.XX`
                 */
                Client: string;
                /**
                 * 数据库名。
                 * @example `dbTest`
                 */
                DbName: string;
                /**
                 * 会话执行的命令类型。
                 * @example `Query`
                 */
                Command: string;
                /**
                 * 会话执行时间，单位为秒（s）。
                 * @example `6`
                 */
                Time: number;
                /**
                 * 会话状态。
                 * @example `starting`
                 */
                State: string;
                /**
                 * 会话执行的SQL语句。
                 * @example `INSERT INTO ...`
                 */
                SqlText: string;
                /**
                 * 客户端IP别名。
                 * @example `master-shanghai`
                 */
                UserClientAlias: string;
                /**
                 * 会话所在事务ID。
                 * @example `754300775132`
                 */
                TrxId: string;
                /**
                 * 事务持续时间，单位为秒（s）。
                 * @example `6`
                 */
                TrxDuration: number;
                /**
                 * SQL模板ID。
                 * > 仅PolarDB-X 2.0实例返回该字段。
                 * @example `a7cac1a9`
                 */
                SqlTemplateId: string;
            }[];
            /**
             * 按数据库账号统计会话。
             */
            UserStats: {
                /**
                 * 数据库账号名。
                 * @example `testUser`
                 */
                Key: string;
                /**
                 * 该账号会话总数。
                 * @example `2`
                 */
                TotalCount: number;
                /**
                 * 该账号活跃会话数。
                 * > 活跃会话判断逻辑： 命令是Query或者Execute，以及未结束事务中的会话。
                 * @example `1`
                 */
                ActiveCount: number;
                /**
                 * 该账号对应的会话ID列表。
                 */
                ThreadIdList: number[];
                /**
                 * 会话对应的账号列表。
                 */
                UserList: string[];
            }[];
            /**
             * 按客户端IP统计会话。
             */
            ClientStats: {
                /**
                 * 客户端IP地址。
                 * @example `47.100.XX.XX`
                 */
                Key: string;
                /**
                 * 该客户端IP地址下的会话总数。
                 * @example `2`
                 */
                TotalCount: number;
                /**
                 * 该客户端IP地址下的活跃会话数。
                 * > 活跃会话判断逻辑： 命令是Query或者Execute，以及未结束事务中的会话。
                 * @example `1`
                 */
                ActiveCount: number;
                /**
                 * 该客户端IP对应的会话ID列表。
                 */
                ThreadIdList: number[];
                /**
                 * 会话对应的账号列表。
                 */
                UserList: string[];
            }[];
            /**
             * 按数据库统计会话。
             */
            DbStats: {
                /**
                 * 数据库名。
                 * @example `dbTest`
                 */
                Key: string;
                /**
                 * 该数据库会话总数。
                 * @example `2`
                 */
                TotalCount: number;
                /**
                 * 该数据库活跃会话数。
                 * > 活跃会话判断逻辑： 命令是Query或者Execute，以及未结束事务中的会话。
                 * @example `1`
                 */
                ActiveCount: number;
                /**
                 * 该数据库名对应的会话ID列表。
                 */
                ThreadIdList: number[];
                /**
                 * 会话对应的账号列表。
                 */
                UserList: string[];
            }[];
            /**
             * 获取会话的时间，格式为Unix时间戳，单位为毫秒。
             * @example `1659581514000020`
             */
            TimeStamp: number;
        };
        /**
         * 异步请求ID。
         * @example `async__507044db6c4eadfa2dab9b084e80****`
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
         * 执行时间，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1660100753556`
         */
        Timestamp: number;
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

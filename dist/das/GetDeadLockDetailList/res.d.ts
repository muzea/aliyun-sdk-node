export interface GetDeadLockDetailListResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
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
         * 详细信息列表。
         */
        List: {
            /**
             * 采集的时间，格式为Unix时间戳，单位为毫秒。
             * @example `1702301170701`
             */
            BatchId: number;
            /**
             * 阻塞列表。即主动造成锁定的会话信息。
             */
            BlockProcessList: {
                /**
                 * 当前事务所使用的客户端名称。
                 * @example `Microsoft SQL Server Management Studio - Query`
                 */
                ClientApp: string;
                /**
                 * 主机名。
                 * @example `sd7402****`
                 */
                HostName: string;
                /**
                 * 事务开启的时间。格式为Unix时间戳，单位为毫秒。
                 * @example `1702301152000`
                 */
                LastTranStarted: number;
                /**
                 * 锁模式。更多信息，请参见[锁模式](~~2362804~~)。
                 * @example `U`
                 */
                LockMode: string;
                /**
                 * 会话已经生成的日志大小。单位：字节（Byte）。
                 * @example `352`
                 */
                LogUsed: number;
                /**
                 * 用户登录名。
                 * @example `sd7402****\\Administrator`
                 */
                LoginName: string;
                /**
                 * 已经被锁住的对象。
                 * @example `testdb1.dbo.test2`
                 */
                ObjectOwned: string;
                /**
                 * 当前事务请求加锁的对象。
                 * @example `testdb1.dbo.test1`
                 */
                ObjectRequested: string;
                /**
                 * 会话当前持有的锁模式。更多信息，请参见[锁模式](~~2362804~~)。
                 * @example `X`
                 */
                OwnMode: string;
                /**
                 * 开启事务的会话ID。
                 * @example `61`
                 */
                Spid: number;
                /**
                 * SQL语句详情。
                 * @example `update test1 set col1 =9`
                 */
                SqlText: string;
                /**
                 * 当前事务的状态。
                 * @example `suspended`
                 */
                Status: string;
                /**
                 * 是否是死锁的受害者：
                 * - **0**：不是。
                 * - **1**：是。
                 * @example `0`
                 */
                Victim: number;
                /**
                 * 会话当前正在等待的锁模式。更多信息，请参见[锁模式](~~2362804~~)。
                 * @example `U`
                 */
                WaitMode: string;
                /**
                 * 当前事务等待中的资源。
                 * @example `RID: 5:1:312:0`
                 */
                WaitResource: string;
                /**
                 * 当前事务等待中的资源详情。
                 * @example `RID:school:school.mdf:312:0`
                 */
                WaitResourceDescription: string;
                /**
                 * 数据库名称。
                 * @example `testdb1`
                 */
                DatabaseName: string;
            }[];
            /**
             * 客户端名称。
             * @example `Microsoft SQL Server Management Studio - Query`
             */
            ClientApp: string;
            /**
             * 主机名。
             * @example `sd7402****`
             */
            HostName: string;
            /**
             * 事务开启的时间。格式为Unix时间戳，单位为毫秒。
             * @example `1702301141000`
             */
            LastTranStarted: number;
            /**
             * 锁模式。更多信息，请参见[锁模式](~~2362804~~)。
             * @example `U`
             */
            LockMode: string;
            /**
             * 会话已经生成的日志大小。单位：字节（Byte）。
             * @example `352`
             */
            LogUsed: number;
            /**
             * 用户登录名。
             * @example `sd7402****\\Administrator`
             */
            LoginName: string;
            /**
             * 当前事务请求加锁的对象。
             * @example `testdb1.dbo.test2`
             */
            ObjectRequested: string;
            /**
             * 已经被锁住的对象。
             * @example `testdb1.dbo.test1`
             */
            ObjectOwned: string;
            /**
             * 会话当前持有的锁模式。更多信息，请参见[锁模式](~~2362804~~)。
             * @example `X`
             */
            OwnMode: string;
            /**
             * 开启事务的会话ID。
             * @example `56`
             */
            Spid: number;
            /**
             * SQL语句详情。
             * @example `update test2 set col1 =88`
             */
            SqlText: string;
            /**
             * 当前事务的状态。
             * @example `suspended`
             */
            Status: string;
            /**
             * 是否是死锁的受害者：
             * - **0**：不是。
             * - **1**：是。
             * @example `1
            `
             */
            Victim: number;
            /**
             * 会话当前正在等待的锁模式。更多信息，请参见[锁模式](~~2362804~~)。
             * @example `U`
             */
            WaitMode: string;
            /**
             * 当前事务等待中的资源。
             * @example `RID: 5:1:376:0`
             */
            WaitResource: string;
            /**
             * 当前事务等待中的资源详情。
             * @example `RID:school:school.mdf:376:0`
             */
            WaitResourceDescription: string;
            /**
             * 数据库的名称。
             * @example `testdb1`
             */
            DatabaseName: string;
        }[];
        /**
         * 当前页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页记录数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回总记录数。
         * @example `2`
         */
        Total: number;
    };
    /**
     * 请求ID。
     * @example `840F51F7-9C01-538D-94F6-AE712905****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}

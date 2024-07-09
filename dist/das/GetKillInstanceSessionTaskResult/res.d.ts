export interface GetKillInstanceSessionTaskResultResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `f77d535b45405bd462b21caa3ee8****`
         */
        TaskId: string;
        /**
         * 阿里云主账号ID。
         * @example `164882191396****`
         */
        UserId: string;
        /**
         * 实例ID。
         * @example `rm-2ze1jdv45i7l6****`
         */
        InstanceId: string;
        /**
         * 节点ID。
         * > PolarDB MySQL版实例的结束会话任务才会返回该数据。
         * @example `pi-bp1h12rv501cv****`
         */
        NodeId: string;
        /**
         * 结束会话任务的状态：
         * - **RUNNING**：正在运行。
         * - **SUCCESS**：成功。
         * - **FAILURE**：失败。
         * - **ERROR**：其他错误。
         * @example `SUCCESS`
         */
        TaskState: string;
        /**
         * 需要结束的会话ID列表。
         * > 结束全部会话时，实例或节点上的所有会话ID列表。
         */
        Sessions: number[];
        /**
         * 结束成功的会话数量。
         * @example `100`
         */
        KillSuccessCount: number;
        /**
         * 结束失败的会话数量。
         * @example `0`
         */
        KillFailCount: number;
        /**
         * 指定的不会被结束的会话数量，包含忽略列表中账号的会话、阿里云内部运维账号的会话和**Binlog Dump**会话。
         * @example `9`
         */
        IgnoredUserSessionCount: number;
        /**
         * 结束会话的详情列表。
         */
        Result: {
            /**
             * 会话ID。
             * @example `8357518`
             */
            Id: number;
            /**
             * 数据库账号。
             * @example `testUser`
             */
            User: string;
            /**
             * 发起该会话主机的IP地址和端口。
             * @example `100.104.XX.XX:23428`
             */
            Host: string;
            /**
             * 数据库名。
             * @example `dbTest`
             */
            Db: string;
            /**
             * 会话执行的命令类型。
             * @example `Sleep`
             */
            Command: string;
            /**
             * 执行时间，单位为秒（s）。
             * @example `1`
             */
            Time: number;
            /**
             * 会话状态。
             * @example `Sending data`
             */
            State: string;
            /**
             * 会话执行的SQL语句。
             * @example `SELECT sleep(60)`
             */
            Info: string;
            /**
             * 是否是活跃会话。
             * > 活跃会话判断逻辑： 命令是Query或者Execute，以及未结束事务中的会话。
             * @example `true`
             */
            Active: boolean;
            /**
             * 结束该会话的子任务ID。
             * @example `task_d9e94107-6116-4ac3-b874-81466aff****`
             */
            TaskId: string;
            /**
             * 结束该会话时的结果描述。
             * - **SESSION_KILLED**：结束会话成功。
             * - **SESSION_EXPIRED**：会话已过期。
             * - **SESSION\_NO\_PERMISSION**：用于结束会话的账号权限不足。
             * - **SESSION\_ACCOUNT\_ERROR**：用于结束会话的账号或密码错误。
             * - **SESSION\_IGNORED\_USER**：不需要结束的账号的会话。
             * - **SESSION\_INTERNAL\_USER\_OR\_COMMAND**：阿里云运维账号的会话或者命令。
             * - **SESSION\_KILL\_TASK\_TIMEOUT**：结束会话超时。
             * - **SESSION\_OTHER\_ERROR**：其他错误。
             * @example `SESSION_KILLED`
             */
            Reason: string;
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

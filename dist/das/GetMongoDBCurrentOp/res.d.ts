export interface GetMongoDBCurrentOpResponse {
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
     * 详细信息。
     */
    Data: {
        /**
         * 获取数据库会话数据的时间，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1692029584428`
         */
        Timestamp: number;
        /**
         * 会话列表。
         */
        SessionList: {
            /**
             * 操作ID。
             * @example `14508`
             */
            OpId: string;
            /**
             * 是否是活跃的操作：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Active: boolean;
            /**
             * 包含与此操作关联的完整命令对象的文档。
             * @example `"command" : {
              "find" : "items",
              "filter" : {
                "sku" : 1403978
              },
              ...
              "$db" : "test"
            }`
             */
            Command: string;
            /**
             * 操作类型。
             * @example `update`
             */
            Op: string;
            /**
             * 操作持续时间，单位为秒（s）。
             * @example `5`
             */
            SecsRunning: number;
            /**
             * 执行计划描述。
             * @example `None`
             */
            PlanSummary: string;
            /**
             * 主机。
             * @example `a79****.cloud.et15:3328`
             */
            Host: string;
            /**
             * 客户端的地址。
             * @example `219.143.XX.XX:52324`
             */
            Client: string;
            /**
             * 连接描述。
             * @example `conn1013858`
             */
            Desc: string;
            /**
             * 命名空间。
             * @example `admin.cmd`
             */
            Ns: string;
            /**
             * 连接ID。
             * @example `66378736`
             */
            ConnectionId: number;
            /**
             * MongoDB驱动。
             * @example `mongo-java-driver|legacy@3.11.2`
             */
            Driver: string;
            /**
             * 系统类型。
             * @example `Linux`
             */
            OsType: string;
            /**
             * 系统名。
             * @example `Linux`
             */
            OsName: string;
            /**
             * 系统架构。
             * @example `AMD64`
             */
            OsArch: string;
            /**
             * 平台。
             * @example `Java/Alibaba/1.8.0_152-b5`
             */
            Platform: string;
            /**
             * 该操作是否被标记为终止：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            KillPending: boolean;
            /**
             * 分片节点ID。
             * > 分片集群实例时返回该参数。
             * @example `d-bp1689995b78****`
             */
            Shard: string;
        }[];
        /**
         * 会话统计数据。
         */
        SessionStat: {
            /**
             * 活跃会话数。
             * @example `0`
             */
            ActiveCount: number;
            /**
             * 会话总数。
             * @example `11`
             */
            TotalCount: number;
            /**
             * 会话执行最长耗时，单位为秒（s）。
             * @example `0`
             */
            LongestSecsRunning: number;
            /**
             * 客户端地址的统计数据。
             */
            ClientStats: any;
            /**
             * 命名空间统计数据。
             */
            DbStats: any;
        };
    };
    /**
     * 请求ID。
     * @example `FC6C0929-29E1-59FD-8DFE-70D9D41E****`
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

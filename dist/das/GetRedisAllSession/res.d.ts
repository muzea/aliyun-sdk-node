export interface GetRedisAllSessionResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回的消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 会话数据。
     */
    Data: {
        /**
         * 获取数据库会话数据的时间，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1660100753556`
         */
        Timestamp: number;
        /**
         * 会话总数。
         * @example `2`
         */
        Total: number;
        /**
         * 会话信息。
         */
        Sessions: {
            /**
             * 频道订阅数量。
             * @example `0`
             */
            Sub: number;
            /**
             * 模式匹配的订阅数量。
             * @example `0`
             */
            Psub: number;
            /**
             * 空闲时长，单位为秒（s）。
             * @example `8`
             */
            Idle: number;
            /**
             * 客户端标志，取值如下：
             * - **A**：尽快关闭连接。
             * - **b**：客户端正在等待阻塞事件。
             * - **c**：写入全部回复后将关闭连接。
             * - **d**：受监视的键已被修改，`EXEC`命令将失败。
             * - **i**：客户端正在等待虚拟机I/O操作（已废弃）。
             * - **M**：客户端是主节点。
             * - **N**：未设置特点标志。
             * - **O**：处于监视模式的客户端。
             * - **r**：客户端是只读模式的集群节点。
             * - **S**：客户端是一般模式下的从节点。
             * - **u**：客户端未被阻塞。
             * - **U**：通过Unix域套接字连接的客户端。
             * - **x**：客户端正在执行事务。
             * @example `N`
             */
            Flags: string;
            /**
             * 输出列表包含的对象数量。
             * @example `0`
             */
            Oll: number;
            /**
             * 输入缓冲区剩余大小，单位为字节（Byte）。
             * @example `0`
             */
            QbufFree: number;
            /**
             * `MULTI`/`EXEC`上下文中的命令数。
             * @example `-1`
             */
            Multi: number;
            /**
             * 输出缓冲区大小，单位为字节（Byte）。
             * @example `0`
             */
            Omem: number;
            /**
             * 输入缓冲区大小，单位为字节（Byte）。
             * @example `0`
             */
            Qbuf: number;
            /**
             * 客户端名称。
             * @example `test`
             */
            Name: string;
            /**
             * 输出固定缓冲区大小，单位为字节（Byte）。
             * @example `0`
             */
            Obl: number;
            /**
             * 客户端的地址。
             * @example `172.16.XX.XX`
             */
            Client: string;
            /**
             * 最近一次执行的命令。
             * @example `PING`
             */
            Cmd: string;
            /**
             * 客户端ID。
             * @example `9080586`
             */
            Id: number;
            /**
             * 客户端的地址和端口。
             * @example `172.16.XX.XX:53458`
             */
            Addr: string;
            /**
             * 节点ID。
             * @example `r-2zemyfd1sh1u2i****-proxy-14#1679****`
             */
            NodeId: string;
            /**
             * 已连接时长，单位为秒（s）。
             * @example `12`
             */
            Age: string;
            /**
             * 该客户端正在使用的数据库ID。
             * @example `0`
             */
            Db: number;
            /**
             * 文件描述符事件，取值为：
             * - **r**：客户端套接字在事件Loop中可读。
             * - **w**：客户端套接字在事件Loop中可写。
             * @example `r`
             */
            Events: string;
            /**
             * 套接字所使用的文件描述符。
             * @example `73`
             */
            Fd: number;
            /**
             * 客户端别名。
             * @example `prod ip`
             */
            ClientDesc: string;
        }[];
        /**
         * 访问来源统计数据。
         */
        SourceStats: {
            /**
             * 访问来源。
             * @example `172.16.XX.XX`
             */
            Key: string;
            /**
             * 该访问来源的会话总数。
             * @example `1`
             */
            Count: string;
            /**
             * 客户端ID数据。
             */
            Ids: number[];
        }[];
    };
    /**
     * 请求ID。
     * @example `40C6E9AF-6C23-5614-AA83-34344CC6****`
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

export interface DescribeDBProxyEndpointResponse {
    /**
     * 代理连接地址的网络类型，取值：
     * * **InnerString**：内网地址。
     * * **OuterString**：外网地址。
     * @example `InnerString`
     */
    DBProxyConnectStringNetType: string;
    /**
     * 代理终端的设置信息，格式为JSON，包含下述参数：
     * * **TransactionReadSqlRouteOptimizeStatus**：事务拆分设置，取值为**0**（关闭）或**1**（开启）。
     * * **ConnectionPersist**：连接池设置：取值为**0**（关闭）、**1**（会话级连接池）或**2**（事务级连接池）。
     * * **ReadWriteSpliting**：读写分离设置，取值为**0**（关闭）或**1**（开启）。
     * * **PinPreparedStmt**：仅RDS PostgrSQL可见，内部参数。
     * > RDS PostgreSQL仅支持修改**ReadWriteSpliting**，**TransactionReadSqlRouteOptimizeStatus**和**PinPreparedStmt**默认为1。
     * @example `TransactionReadSqlRouteOptimizeStatus:1;ConnectionPersist:0;ReadWriteSpliting:1`
     */
    DBProxyFeatures: string;
    /**
     * 请求ID。
     * @example `847BA085-B377-4BFA-8267-F82345ECE1D2`
     */
    RequestId: string;
    /**
     * 读权重分配信息，即传入主实例和只读实例的读请求权重，格式为JSON，包含下述参数：
     * * **DBInstanceId**：实例ID。
     * * **DBInstanceType**：实例类型，取值为**Master**（主实例）或**ReadOnly**（只读实例）。
     * * **NodeID**：集群系列中主实例主节点和备节点的节点ID。
     * * **NodeType**：集群系列中的节点类型，取值为**Primary**（主实例-主节点）或**Secondary**（主实例-备节点）。
     * * **Weight**：读请求权重，以**100**递增，最大值为**10000**。
     * @example `[{\"Availability\":\"Available\",\"DBInstanceId\":\"rm-2z****\"，\"DBInstanceType\":\"Master\",\"NodeId\":\"rn-t2****\",\"NodeType\":\"Primary\",\"Weight\":0}, {\"Availability\":\"Available\",\"DBInstanceId\":\"rm-2z****\"，\"DBInstanceType\":\"Master\",\"NodeId\":\"rn-z9****\",\"NodeType\":\"Secondary\",\"Weight\":400}, {\"Availability\":\"Available\",,\"DBInstanceId\":\"rm-2z****\"，\"DBInstanceType\":\"Master\",\"NodeId\":\"rn-1c****\",\"NodeType\":\"Secondary\",\"Weight\":400}]]`
     */
    ReadOnlyInstanceWeight: string;
    /**
     * 读权重分配模式，详情请参见[读权重分配](~~96076~~)。取值：
     * * **Standard**：按规格权重自动分配。
     * * **Custom**：自定义分配权重。
     * @example `Standard`
     */
    ReadOnlyInstanceDistributionType: string;
    /**
     * 读写分离的延迟阈值，当只读实例延迟时间超过该阈值时，读取流量不发往该实例，单位：秒。
     * @example `30`
     */
    ReadOnlyInstanceMaxDelayTime: string;
    /**
     * 代理终端的读写类型，取值：
     * * **ReadWrite**：读写模式。
     * * **ReadOnly**：只读模式。
     * @example `ReadWrite`
     */
    DbProxyEndpointReadWriteMode: string;
    /**
     * 代理终端的备注信息。
     * @example `proxyterminal-test`
     */
    DbProxyEndpointAliases: string;
    /**
     * 代理连接地址ID。
     * @example `keaxncrjluwu0gue****`
     */
    DBProxyEndpointId: string;
    /**
     * 代理连接地址端口。
     * @example `3306`
     */
    DBProxyConnectStringPort: string;
    /**
     * 代理连接地址。
     * @example `testproxy****.rwlb.rds.aliyuncs.com`
     */
    DBProxyConnectString: string;
    /**
     * 内部参数，无需关注。
     * @example `normal`
     */
    DBProxyEngineType: string;
    EndpointConnectItems: {
        /**
         * 代理连接地址的详细信息列表。
         */
        EndpointConnectItems: {
            /**
             * 服务端口，默认为**3306**。
             * @example `3306`
             */
            DbProxyEndpointPort: string;
            /**
             * 代理连接地址。
             * @example `testproxy****.rwlb.rds.aliyuncs.com`
             */
            DbProxyEndpointConnectString: string;
            /**
             * 网络类型，取值：
             * * **0**：公网
             * * **1**：经典网络
             * * **2**：专有网络
             * @example `2`
             */
            DbProxyEndpointNetType: string;
        }[];
    };
}

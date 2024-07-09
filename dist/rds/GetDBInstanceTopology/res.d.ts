export interface GetDBInstanceTopologyResponse {
    /**
     * 内部参数，无需关注。
     * @example `None`
     */
    Code: string;
    /**
     * 内部参数，无需关注。
     * @example `None`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7430AB1A-6D49-5B6D-B9E5-920250076074`
     */
    RequestId: string;
    /**
     * 拓扑结构详情。
     */
    Data: {
        /**
         * 实例ID。
         * @example `rm-m5ezban****`
         */
        DBInstanceName: string;
        /**
         * 实例的网络连接信息列表。
         */
        Connections: {
            /**
             * 可用区ID。
             * @example `cn-qingdao-c`
             */
            ZoneId: string;
            /**
             * 实例ID。
             * @example `rm-m5ezban****`
             */
            DBInstanceName: string;
            /**
             * 数据库连接地址。
             * @example `rm-m5ezban****mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 实例的网络连接地址类型。取值：
             * * **vpc**：内网连接地址。
             * * **public**：公网连接地址。
             * @example `vpc`
             */
            NetType: string;
        }[];
        /**
         * 节点列表。
         */
        Nodes: {
            /**
             * 实例ID。
             * @example `rm-m5ezban****`
             */
            DBInstanceName: string;
            /**
             * 可用区ID。
             * @example `cn-qingdao-c`
             */
            ZoneId: string;
            /**
             * 专属集群内的主机ID。
             * >非专属集群实例返回空。
             * @example `i-bp****`
             */
            DedicatedHostId: string;
            /**
             * 节点类型。返回值：
             * * **Master**：主节点。
             * * **Slave**：备节点。
             * @example `master`
             */
            Role: string;
            /**
             * 实例的唯一标识。
             * >非专属集群实例返回**-1**。
             * @example `349054`
             */
            NodeId: string;
            /**
             * 专属集群ID。
             * >非专属集群实例返回空。
             * @example `dhg-4n****`
             */
            DedicatedHostGroupId: string;
        }[];
    };
}

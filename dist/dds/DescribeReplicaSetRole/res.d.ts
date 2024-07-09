export interface DescribeReplicaSetRoleResponse {
    /**
     * 请求ID。
     * @example `DB4A0595-FCA9-437F-B2BB-25DBFC009D3E`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    DBInstanceId: string;
    ReplicaSets: {
        /**
         * 副本集角色信息列表。
         */
        ReplicaSet: {
            /**
             * 节点的连接端口。
             * @example `3717`
             */
            ConnectionPort: string;
            /**
             * 该节点在副本集中的角色。
             * - **Primary**：主节点。
             * - **Secondary**：从节点。
             * @example `Primary`
             */
            ReplicaSetRole: string;
            /**
             * 保留的经典网络地址剩余时长，单位为秒。
             * @example `1209582`
             */
            ExpiredTime: string;
            /**
             * 节点的连接地址。
             * @example `dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com`
             */
            ConnectionDomain: string;
            /**
             * 网络类型。
             * - **VPC**：专有网络。
             * - **Classic**：经典网络。
             * - **Public**：公网。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 节点的角色ID。
             * @example `651xxxxx`
             */
            RoleId: string;
        }[];
    };
}

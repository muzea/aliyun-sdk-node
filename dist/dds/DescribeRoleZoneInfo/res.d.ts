export interface DescribeRoleZoneInfoResponse {
    /**
     * 请求ID。
     * @example `728B9A96-E262-4AE5-915E-3A51CCE2FDA9`
     */
    RequestId: string;
    ZoneInfos: {
        /**
         * 节点在可用区中的分布信息列表。
         */
        ZoneInfo: {
            /**
             * 节点ID。
             * @example `dds-bpxxxxxxxx`
             */
            InsName: string;
            /**
             * 节点类型，返回值为：
             * - **normal**：普通节点。
             * - **configServer**：配置服务器节点。
             * - **shard**：Shard节点。
             * - **mongos**：Mongos节点。
             * > 当实例类型为副本集实例时，返回值为**normal**；当实例类型为分片集群实例时，返回值中包含**configServer**、**shard**和**mongos**。
             * @example `normal`
             */
            NodeType: string;
            /**
             * 节点的角色，返回值为：
             * - **Primary**：主节点。
             * - **Secondary**：从节点。
             * - **Hidden**：隐藏节点。
             * @example `Primary`
             */
            RoleType: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-e`
             */
            ZoneId: string;
            /**
             * 角色ID。
             * @example `83xxxxx`
             */
            RoleId: string;
        }[];
    };
}

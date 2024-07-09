export interface DescribeLogicInstanceTopologyResponse {
    /**
     * 实例的ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `794120D1-E0CF-4713-BAE4-EBAEA04506AF`
     */
    RequestId: string;
    RedisProxyList: {
        /**
         * 代理详情，包含代理节点信息。
         */
        NodeInfo: {
            /**
             * 节点的容量，单位为MB。
             * @example `5120`
             */
            Capacity: string;
            /**
             * 连接数限制。
             * @example `320000`
             */
            Connection: string;
            /**
             * 节点类型，返回值：
             * * **db**：数据节点。
             * * **normal**：管理节点，由Proxy节点（代理节点）和CS节点（配置管理节点）组成。部分实例不会返回normal，而是分别返回proxy和cs。
             * @example `proxy`
             */
            NodeType: string;
            /**
             * 节点的带宽限制，单位为MB/s。
             * @example `96`
             */
            Bandwidth: string;
            /**
             * 节点ID。
             * @example `r-bp10noxlhcoim2****-proxy-3#542****`
             */
            NodeId: string;
        }[];
    };
    RedisShardList: {
        /**
         * 分片详情，包含NodeInfo等子节点信息。
         */
        NodeInfo: {
            /**
             * 节点的容量，单位为MB。
             * @example `2048`
             */
            Capacity: string;
            /**
             * 连接数限制。
             * @example `10000`
             */
            Connection: string;
            /**
             * 节点类型，返回值：
             * * **proxy**：代理节点。
             * * **db**：数据节点。
             * @example `db`
             */
            NodeType: string;
            /**
             * 节点的带宽限制，单位为MB/s。
             * @example `96`
             */
            Bandwidth: string;
            /**
             * 节点ID。
             * @example `r-bp10noxlhcoim2****-db-0#688****`
             */
            NodeId: string;
            /**
             * 子实例类型，返回值：
             * * **master**：主节点类型。
             * * **readonly**：只读实例类型。
             * @example `master`
             */
            SubInstanceType: string;
        }[];
    };
}

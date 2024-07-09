export interface DescribeDBInstanceDiagnosisSummaryResponse {
    /**
     * 请求ID。
     * @example `070534EC-78D5-5519-83CC-E7B1A9213483`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `6`
     */
    TotalCount: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 实例节点详情列表。
     */
    Items: {
        /**
         * 节点名称。
         * @example `gp-t4np568qe9710****-master-100984919`
         */
        Hostname: string;
        /**
         * 节点的IP地址。
         * @example `192.168.XX.XX`
         */
        NodeAddress: string;
        /**
         * 节点类型，取值如下：
         * - **master**：协调节点。
         * - **slave**：备协调节点。
         * - **segment**：计算节点。
         * @example `master`
         */
        NodeType: string;
        /**
         * 节点所在的宿主名。
         * @example `ap-southeast-1.i-t4n4c4ryr0yr441d****`
         */
        NodeName: string;
        /**
         * 节点的端口号。
         * @example `3000`
         */
        NodePort: string;
        /**
         * 节点ID。
         * @example `1`
         */
        NodeID: string;
        /**
         * 节点运行状态，取值如下：
         * - **UP**：节点运行中。
         * - **DOWN**：节点故障。
         * @example `UP`
         */
        NodeStatus: string;
        /**
         * 节点当前所属角色，取值如下：
         * - **primary**：主节点。
         * - **mirror**：副本节点。
         * @example `primary`
         */
        NodeRole: string;
        /**
         * 节点最初所属角色，取值如下：
         * - **primary**：主节点。
         * - **mirror**：副本节点。
         * 如果该参数值与**NodeRole**参数的值一致，表示没有发生过角色反转（主备切换）；如果该参数值与**NodeRole**参数的值不一致，表示发生过角色反转。
         * @example `primary`
         */
        NodePreferredRole: string;
        /**
         * 节点数据同步状态，取值如下：
         * - **Synced**：已同步。
         * - **Not Syncing**：未同步。
         * - **No sync required**：无需同步，仅协调节点会出现该模式。
         * @example `Synced`
         */
        NodeReplicationMode: string;
        /**
         * 分组ID。
         * @example `-1`
         */
        NodeCID: string;
    }[];
    /**
     * 协调节点状态统计信息。
     */
    MasterStatusInfo: {
        /**
         * 正常状态节点数量。
         * @example `2`
         */
        NormalNodeNum: number;
        /**
         * 异常状态节点数量。
         * @example `0`
         */
        ExceptionNodeNum: number;
        /**
         * 未同步节点数量。
         * @example `0`
         */
        NotSyncingNodeNum: number;
        /**
         * 已同步节点数量。
         * @example `1`
         */
        SyncedNodeNum: number;
        /**
         * 正常角色节点数量。
         * @example `2`
         */
        PreferredNodeNum: number;
        /**
         * 主从切换角色节点数量。
         * @example `0`
         */
        NotPreferredNodeNum: number;
    };
    /**
     * 计算节点状态统计信息。
     */
    SegmentStatusInfo: {
        /**
         * 正常状态节点数量。
         * @example `4`
         */
        NormalNodeNum: number;
        /**
         * 异常状态节点数量。
         * @example `0`
         */
        ExceptionNodeNum: number;
        /**
         * 未同步节点数量。
         * @example `4`
         */
        NotSyncingNodeNum: number;
        /**
         * 已同步节点数量。
         * @example `0`
         */
        SyncedNodeNum: number;
        /**
         * 正常角色节点数量。
         * @example `4`
         */
        PreferredNodeNum: number;
        /**
         * 主从切换角色节点数量。
         * @example `0`
         */
        NotPreferredNodeNum: number;
    };
}

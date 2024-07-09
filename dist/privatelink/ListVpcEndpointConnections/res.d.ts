export interface ListVpcEndpointConnectionsResponse {
    /**
     * 终端节点连接信息。
     */
    Connections: {
        /**
         * 可用区信息。
         */
        Zones: {
            /**
             * 终端节点所属的交换机。
             * @example `vsw-hp3uf6045ljdhd5zr****`
             */
            VSwitchId: string;
            /**
             * 可用区ID。
             * @example `cn-huhehaote-b`
             */
            ZoneId: string;
            /**
             * 服务资源ID。
             * @example `lb-hp32z1wp5peaoox2q****`
             */
            ResourceId: string;
            /**
             * 终端节点网卡ID。
             * @example `eni-hp32lk0pyv6o94hs****`
             */
            EniId: string;
            /**
             * 可用区域名。
             * @example `ep-hp34jaz8ykl0exwt****-cn-huhehaote.epsrv-hp3vpx8yqxblby3i****.cn-huhehaote-b.privatelink.aliyuncs.com`
             */
            ZoneDomain: string;
            /**
             * 可用区的状态。取值：
             * - **Creating**：创建中。
             * - **Wait**：等待连接。
             * - **Connected**：已连接。
             * - **Deleting**：删除中。
             * - **Disconnecting**：断开连接中。
             * - **Disconnected**：已断开。
             * - **Connecting**：连接中。
             * - **Migrating**：迁移中。
             * - **Migrated**：已迁移。
             * @example `Connected`
             */
            ZoneStatus: string;
            /**
             * 平滑迁移场景下被替换的服务资源ID。
             * @example `lb-hp32z1wp5peaoox2q****`
             */
            ReplacedResourceId: string;
            /**
             * 平滑迁移场景下被替换的终端节点网卡ID。
             * @example `eni-hp32lk0pyv6o94hs****`
             */
            ReplacedEniId: string;
        }[];
        /**
         * 连接修改时间。
         * @example `2021-09-28T10:34:46Z`
         */
        ModifiedTime: string;
        /**
         * 终端节点连接的连接带宽，单位：Mbps。取值范围：**1024~10240**。
         * @example `1024`
         */
        Bandwidth: number;
        /**
         * 终端节点所属的账号ID。
         * @example `25346073170691****`
         */
        EndpointOwnerId: number;
        /**
         * 终端节点和终端节点服务是否同一账号，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        ResourceOwner: boolean;
        /**
         * 终端节点服务的ID。
         * @example `epsrv-hp3vpx8yqxblby3i****`
         */
        ServiceId: string;
        /**
         * 终端节点连接状态，取值：
         * - **Pending**：修改中。
         * - **Connecting**：连接中。
         * - **Connected**：已连接。
         * - **Disconnecting**：断开连接中。
         * - **Disconnected**：未连接。
         * - **Deleting**：删除中。
         * - **ServiceDeleted**：对应的终端节点服务已删除。
         * @example `Disconnected`
         */
        ConnectionStatus: string;
        /**
         * 终端节点ID。
         * @example `ep-hp33b2e43fays7s8****`
         */
        EndpointId: string;
        /**
         * 终端节点所属的专有网络。
         * @example `vpc-hp356stwkxg3fn2xe****`
         */
        EndpointVpcId: string;
        /**
         * 终端节点所属的资源组ID。
         * @example `rg-acfmw353z35v***`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 查询到的终端节点连接列表条目数。
     * @example `1`
     */
    TotalCount: string;
}

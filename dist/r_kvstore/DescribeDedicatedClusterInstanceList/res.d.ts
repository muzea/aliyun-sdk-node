export interface DescribeDedicatedClusterInstanceListResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页可展示的记录数。
     * @example `25`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `712CCF2A-16BD-411B-93F7-E978BEF2****`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `0`
     */
    TotalCount: number;
    /**
     * 实例信息列表。
     */
    Instances: {
        /**
         * 专有网络VPC ID。
         * @example `vpc-t4n2clc70t3hqwsrr****`
         */
        VpcId: string;
        /**
         * 架构类型，返回值：
         * * **logic**：集群架构。
         * * **normal**：标准架构。
         * @example `logic`
         */
        CharacterType: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-t4nvrca24dczppq44****`
         */
        VswitchId: string;
        /**
         * 实例规格。
         * @example `redis.cluster.sharding.common.ce`
         */
        InstanceClass: string;
        /**
         * 可维护时间段的开始时间，格式为<i>HH:mm</i>Z（UTC时间）。
         * @example `16:00Z`
         */
        MaintainStartTime: string;
        /**
         * 实例的创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-05-06T07:09:40Z`
         */
        CreateTime: string;
        /**
         * 直连地址。
         * @example `r-t4ncdi1dgi0ja8****.redis.hangzhou.rds.aliyuncs.com`
         */
        ConnectionDomain: string;
        /**
         * 可维护时间段的结束时间，格式为<i>HH:mm</i>Z（UTC时间）。
         * @example `17:00Z`
         */
        MaintainEndTime: string;
        /**
         * 存储类型，返回值固定为LOCAL_SSD（[ESSD云盘](~~122389~~)）。
         * @example `LOCAL_SSD`
         */
        StorageType: string;
        /**
         * 实例ID。
         * @example `r-bp1e7vl6ygf1yq****`
         */
        InstanceId: string;
        /**
         * 实例的默认带宽，单位为MB/s。
         * @example `24`
         */
        BandWidth: number;
        /**
         * 实例当前的带宽，单位为MB/s，由默认带宽和增加的带宽组成。
         * @example `50`
         */
        CurrentBandWidth: number;
        /**
         * 数据库版本，返回值固定为**5.0**。
         * @example `5.0`
         */
        EngineVersion: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例名称。
         * @example `testdb`
         */
        InstanceName: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-e`
         */
        ZoneId: string;
        /**
         * 专属集群名称。
         * @example `testname`
         */
        ClusterName: string;
        /**
         * 实例状态，返回值：
         * * **Normal**：正常。
         * * **Creating**：创建中。
         * * **Changing**：修改中。
         * * **Inactive**：被禁用。
         * * **Flushing**：清除中。
         * * **Released**：已释放。
         * * **Transforming**：转换中。
         * * **Unavailable**：服务停止。
         * * **Error**：创建失败。
         * * **Migrating**：迁移中。
         * * **BackupRecovering**：备份恢复中。
         * * **MinorVersionUpgrading**：小版本升级中。
         * * **NetworkModifying**：网络变更中。
         * * **SSLModifying**：SSL变更中。
         * * **MajorVersionUpgrading**：大版本升级中，可正常访问。
         * @example `Normal`
         */
        InstanceStatus: string;
        /**
         * 数据库类型，返回值固定为**redis**。
         * @example `redis`
         */
        Engine: string;
        /**
         * 数据分片数量。
         * > 仅当Redis实例为[集群架构](~~52228~~)时，才会返回本参数。
         * @example `3`
         */
        ShardCount: number;
        /**
         * 内部参数，维护实例使用。
         * @example `4652****`
         */
        CustomId: string;
        /**
         * 代理节点数量。
         * > * 返回值为**0**时，表示实例未开启代理模式；返回值为大于**0**的整数时（例如**1**），表示实例已开启代理模式。
         * > * 仅当Redis实例为[集群架构](~~52228~~)时，才会返回本参数。
         * @example `1`
         */
        ProxyCount: number;
        /**
         * 专属集群ID。
         * @example `dhg-rx71fc5ndh9o****`
         */
        ClusterId: string;
        /**
         * 节点信息列表。
         */
        InstanceNodeList: {
            /**
             * 节点IP地址。
             * @example `10.0.33.***`
             */
            NodeIp: string;
            /**
             * 专属集群的主机ID。
             * @example `ch-bp13vf0y9gx3c****`
             */
            DedicatedHostName: string;
            /**
             * 节点类型，返回值：
             * * **db**：数据节点。
             * * **proxy**：代理节点。
             * * **normal**：普通节点（标准架构的实例会返回该值）。
             * @example `normal`
             */
            NodeType: string;
            /**
             * 节点所属的可用区。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * Redis实例ID。
             * @example `r-bp1e7vl6ygf1yq****`
             */
            InstanceId: string;
            /**
             * 节点的端口。
             * @example `3001`
             */
            Port: number;
            /**
             * 节点角色，返回值：
             * * **master**：主节点。
             * * **slave**：从节点。
             * @example `master`
             */
            Role: string;
            /**
             * 节点ID。
             * @example `17921111`
             */
            NodeId: number;
        }[];
    }[];
}

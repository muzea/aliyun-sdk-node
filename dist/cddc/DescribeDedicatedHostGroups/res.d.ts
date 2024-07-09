export interface DescribeDedicatedHostGroupsResponse {
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22E12SD`
     */
    RequestId: string;
    DedicatedHostGroups: {
        /**
         * 主机详细信息。
         */
        DedicatedHostGroups: {
            /**
             * 磁盘分配率。
             * @example `100`
             */
            DiskAllocateRation: number;
            /**
             * 实例部署方式。
             * @example `origin`
             */
            DeployType: string;
            /**
             * 主机创建时间。
             * @example `2021-05-07T02:00Z`
             */
            CreateTime: string;
            /**
             * 不同存储类型对应的主机数量。
             * @example `2`
             */
            DedicatedHostCountGroupByHostType: any;
            /**
             * 主机描述。
             * @example `mysql-host`
             */
            Text: string;
            /**
             * 主机所属专属集群ID。
             * @example ` dhg-34639v1jt4y4****`
             */
            DedicatedHostGroupId: string;
            /**
             * 磁盘利用率。
             * @example `0`
             */
            DiskUtility: number;
            /**
             * 内存使用量。
             * @example `0`
             */
            MemUsedAmount: number;
            /**
             * 内存分配量。
             * @example `0`
             */
            MemAllocatedAmount: number;
            /**
             * 主机CPU超配比。
             * @example `200`
             */
            CpuAllocationRatio: number;
            /**
             * 主机内存超配比。
             * @example `100`
             */
            MemAllocationRatio: number;
            /**
             * 分配的内存比例。
             * @example `9.38`
             */
            MemAllocateRation: number;
            /**
             * 内存利用率。
             * @example `0`
             */
            MemUtility: number;
            /**
             * CPU申请量。
             * @example `3`
             */
            CpuAllocatedAmount: number;
            /**
             * 主机所属专属集群名称。
             * @example ` dhg-34639v1jt4y4****`
             */
            DedicatedHostGroupDesc: string;
            /**
             * CPU申请比例
             * @example `9.38`
             */
            CpuAllocateRation: number;
            /**
             * 主机上实例数量。
             * @example `2`
             */
            InstanceNumber: number;
            /**
             * 主机OS权限。取值：
             * - **0、1**：关闭
             * - **2、3**（默认值）：开放
             * > 创建数据库引擎为**MySQL**、**SQL Server**、**PostgreSQL**的专属集群时，您可以根据实际需求选择主机开放OS权限。
             * @example `1`
             */
            OpenPermission: string;
            /**
             * 主机所属专属集群专有网络ID。
             * @example `vpc-bp1ov7as4yvz4kxei****`
             */
            VPCId: string;
            /**
             * 磁盘分配容量。
             * @example `1024`
             */
            DiskAllocatedAmount: number;
            /**
             * 主机数量。
             * @example `2`
             */
            HostNumber: number;
            /**
             * 磁盘使用量。
             * @example `1024`
             */
            DiskUsedAmount: number;
            /**
             * 主机资源分配策略，取值：
             * - **Evenly**：均衡分配，最大化追求更稳定的系统表现，优先从未分配资源或已分配资源较少的主机中分配资源。
             * - **Intensively**：紧凑分配，最大化追求更充分的资源利用率，优先从创建时间较早且已分配资源较多的主机中分配资源。
             * @example `Evenly`
             */
            AllocationPolicy: string;
            /**
             * 主机数据库引擎类型。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 主机空间超配比。
             * @example `200`
             */
            DiskAllocationRatio: number;
            /**
             * 主机的主实例D。若主机上无主实例，则返回空字符串。
             * @example `rm-bp15rszyxs4t3****`
             */
            BastionInstanceId: string;
            /**
             * 主机故障处理策略。取值：
             * - Auto（默认）：自动替换主机。
             * - Manual：手动替换主机。
             * @example `Auto`
             */
            HostReplacePolicy: string;
            ZoneIDList: {
                /**
                 * 主机可用区列表。
                 */
                ZoneIDList: string[];
            };
            /**
             * 主机所属的专属集群系列。取值：
             * - **Pro**：MyBase专有版集群
             * - **Standard**：MyBase托管版集群
             * @example `Pro`
             */
            Category: string;
        }[];
    };
}

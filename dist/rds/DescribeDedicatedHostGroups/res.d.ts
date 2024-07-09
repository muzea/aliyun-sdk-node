export interface DescribeDedicatedHostGroupsResponse {
    /**
     * 请求ID。
     * @example `AB44DC0A-7E77-442A-97A9-C6418694CB22`
     */
    RequestId: string;
    DedicatedHostGroups: {
        /**
         * 专属集群信息列表。
         */
        DedicatedHostGroups: {
            /**
             * 当前专属集群已分配的磁盘比例。单位：百分号（%）。
             * @example `0.49`
             */
            DiskAllocateRation: number;
            /**
             * 当前专属集群创建时间的时间戳。
             * @example `1571125370000`
             */
            CreateTime: string;
            /**
             * 当前专属集群里的主机存储类型。取值：
             * * **dhg_cloud_ssd**：云盘
             * * **dhg_local_ssd**：本地盘
             * @example `dhg_cloud_ssd`
             */
            DedicatedHostCountGroupByHostType: any;
            /**
             * 当前专属集群的名称和ID信息。由**DedicatedHostGroupDesc**和**DedicatedHostGroupId**拼接，格式为：DedicatedHostGroupDesc/DedicatedHostGroupId。
             * @example `testHostGroup/dhg-7a9xxxxxxxx`
             */
            Text: string;
            /**
             * 当前专属集群的ID。
             * @example `dhg-7a9xxxxxxxx`
             */
            DedicatedHostGroupId: string;
            /**
             * 当前专属集群的磁盘利用率。单位：百分号（%）。
             * @example `0`
             */
            DiskUtility: number;
            /**
             * 当前专属集群中已使用的内存数量。单位：MB。
             * @example `0`
             */
            MemUsedAmount: number;
            /**
             * 当前专属集群中已分配的内存数量。
             * @example `16384`
             */
            MemAllocatedAmount: number;
            /**
             * 当前专属集群的CPU超配比。单位：百分号（%）。关于超配比的更多信息，请参见[管理集群](~~182328~~)。
             * @example `200`
             */
            CpuAllocationRatio: number;
            /**
             * 当前专属集群的内存超配比。单位：%。关于超配比的更多信息，请参见[管理集群](~~182328~~)。
             * @example `90`
             */
            MemAllocationRatio: number;
            /**
             * 当前专属集群的内存利用率。单位：百分号（%）。
             * @example `0`
             */
            MemUtility: number;
            /**
             * 当前专属集群已分配的内存比例。单位：百分号（%）。
             * @example `33.7`
             */
            MemAllocateRation: number;
            /**
             * 当前专属集群已分配CPU的个数。
             * @example `8`
             */
            CpuAllocatedAmount: number;
            /**
             * 当前专属集群的名称。
             * @example `testHostGroup`
             */
            DedicatedHostGroupDesc: string;
            /**
             * 当前专属集群已分配CPU的比例。单位：百分号（%）。
             * @example `25`
             */
            CpuAllocateRation: number;
            /**
             * 当前专属集群中实例的总个数。
             * @example `4`
             */
            InstanceNumber: number;
            /**
             * 主机OS权限开放状态。返回值：
             * * **0**或者**null**：不可开放。
             * * **1**：可开放。
             * * **3**：已开放。
             * @example `3`
             */
            OpenPermission: string;
            /**
             * 当前专属集群所在专有网络VPC ID。
             * @example `vpc-bp1oxxxxxx`
             */
            VPCId: string;
            /**
             * 当前专属集群中已分配的磁盘容量。单位：GB。
             * @example `200`
             */
            DiskAllocatedAmount: number;
            /**
             * 当前专属集群中主机的总个数。
             * @example `3`
             */
            HostNumber: number;
            /**
             * 当前专属集群的已使用磁盘容量。单位：GB。
             * @example `20`
             */
            DiskUsedAmount: number;
            /**
             * 当前专属集群的资源调度的分配策略。返回值：
             * * **Evenly**：均衡分配
             * * **Intensively**：紧凑分配
             * @example `Evenly`
             */
            AllocationPolicy: string;
            /**
             * 当前专属集群的数据库引擎。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 当前专属集群的磁盘空间超配比。单位：%。关于超配比的更多信息，请参见[管理集群](~~182328~~)。
             * @example `200`
             */
            DiskAllocationRatio: number;
            /**
             * 堡垒机ID。
             * @example `bastionhost-cn-m7xxxxxxxx`
             */
            BastionInstanceId: string;
            /**
             * 主机故障时系统的处理策略。返回值：
             * * **Auto**：自动替换主机。
             * * **Manual**：手动替换主机。
             * @example `Auto`
             */
            HostReplacePolicy: string;
            ZoneIDList: {
                /**
                 * 当前专属集群主机所在的可用区列表。
                 */
                ZoneIDList: string[];
            };
        }[];
    };
}

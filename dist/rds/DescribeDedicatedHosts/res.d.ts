export interface DescribeDedicatedHostsResponse {
    /**
     * 主机组ID。
     * @example `dhg-7a9xxxxxxxx`
     */
    DedicatedHostGroupId: string;
    /**
     * 请求ID。
     * @example `C860658E-68A6-46C1-AF6E-3AE7C4D3CACF`
     */
    RequestId: string;
    DedicatedHosts: {
        /**
         * 主机信息列表。
         */
        DedicatedHosts: {
            /**
             * 主机存储类型。返回值：
             * * **dhg_cloud_ssd**：ESSD云盘。
             * * **dhg_local_ssd**：SSD本地盘。
             * @example `dhg_cloud_ssd`
             */
            HostType: string;
            /**
             * 主机存储容量。单位：MB。
             * @example `2097152`
             */
            HostStorage: string;
            /**
             * 已使用内存。单位：MB。
             * @example `16384`
             */
            MemoryUsed: string;
            /**
             * 专属集群ID。
             * @example `dhg-7a9xxxxxxxx`
             */
            DedicatedHostGroupId: string;
            /**
             * 主机当前是否允许分配实例。返回值：
             * * **0**：不允许分配
             * * **1**：允许分配
             * @example `1`
             */
            AllocationStatus: string;
            /**
             * 已使用存储空间。
             * @example `0`
             */
            StorageUsed: string;
            /**
             * 主机ID。
             * @example `i-bpxxxxxxx`
             */
            DedicatedHostId: string;
            /**
             * 主机组中每台主机的内存最大使用率。
             * @example `90`
             */
            MemAllocationRatio: string;
            /**
             * 主机创建时间。
             * @example `2021-03-25 17:29:06.0`
             */
            CreatedTime: string;
            /**
             * 主机内网IP地址。
             * @example `192.xx.xx.xx`
             */
            IPAddress: string;
            /**
             * 主机状态。返回值：
             *  * **0**：创建中
             *  * **1**：使用中
             *  * **2**：宕机
             *  * **3**：宕机下线（替换主机中）
             *  * **4**：下线
             *  * **5**：删除
             *  * **6**：重启中
             * @example `1`
             */
            HostStatus: string;
            /**
             * 主机名称。
             * @example `testHost1`
             */
            HostName: string;
            /**
             * 主机CPU总核数。单位：个。
             * @example `8`
             */
            HostCPU: string;
            /**
             * 主机上的实例总数。
             * @example `4`
             */
            InstanceNumber: string;
            /**
             * 主机OS权限开放状态。返回值：
             * * **0**或者**null**：不可开放。
             * * **1**：可开放。
             * * **3**：已开放。
             * @example `3`
             */
            OpenPermission: string;
            /**
             * 主机CPU已使用核数。单位：个。
             * @example `4`
             */
            CpuUsed: string;
            /**
             * 主机所属专有网络VPC ID。
             * @example `vpc-bpxxxxxxx`
             */
            VPCId: string;
            /**
             * 主机规格。
             * @example `ecs.i2.16xlarge`
             */
            HostClass: string;
            /**
             * 主机到期时间。
             * @example `2021-04-25T16:00:00Z`
             */
            EndTime: string;
            /**
             * 主机所属虚拟交换机ID。
             * @example `vsw-bpxxxxxxx`
             */
            VSwitchId: string;
            /**
             * 当前专属集群的CPU超配比。单位：%。关于超配比的更多信息，请参见[管理集群](~~182328~~)。
             * @example `200`
             */
            CPUAllocationRatio: string;
            /**
             * 主机所在可用区ID。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            /**
             * 主机镜像。仅在**Engine**参数为**mssql**时返回。返回值：
             * * **WindowsWithMssqlStdLicense**：Windows（含SQL Server标准版License）。
             * * **WindowsWithMssqlEntLisence**：Windows（含SQL Server企业版License）。
             * * **WindowsWithMssqlWebLisence**：Windows（含SQL ServerWeb版License）。
             * @example `WindowsWithMssqlStdLicense`
             */
            ImageCategory: string;
            /**
             * 实例的数据库引擎。
             * @example `mysql`
             */
            Engine: string;
            /**
             * 当前专属集群的磁盘空间超配比。单位：%。关于超配比的更多信息，请参见[管理集群](~~182328~~)。
             * @example `200`
             */
            DiskAllocationRatio: string;
            /**
             * 主机内存总量。单位：MB。
             * @example `32238`
             */
            HostMem: string;
            /**
             * 堡垒机ID。
             * @example `bastionhost-cn-m7xxxxxxxx`
             */
            BastionInstanceId: string;
            /**
             * 专属集群主机账号。可通过[CreateDedicatedHostAccount](~~196877~~)创建。
             * @example `test123`
             */
            AccountName: string;
        }[];
    };
}

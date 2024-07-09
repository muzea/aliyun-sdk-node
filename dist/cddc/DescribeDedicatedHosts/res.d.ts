export interface DescribeDedicatedHostsResponse {
    /**
     * 查询返回主机总数目。
     * @example `40`
     */
    TotalRecords: number;
    /**
     * 每页展示数目。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22EASER`
     */
    RequestId: string;
    /**
     * 展示总页码数。
     * @example `2`
     */
    PageNumbers: number;
    /**
     * 专属集群ID。
     * @example `dhg-6w7q18iwt5jo****`
     */
    DedicatedHostGroupId: string;
    DedicatedHosts: {
        /**
         * 主机信息列表。
         */
        DedicatedHosts: {
            /**
             * 主机的存储类型。
             * @example `dhg_cloud_ssd`
             */
            HostType: string;
            /**
             * 主机的存储总量，单位为GB。
             * @example `1234`
             */
            HostStorage: string;
            /**
             * 内存使用量，单位为GB。
             * @example `24576`
             */
            MemoryUsed: string;
            /**
             * 主机所属专属集群ID。
             * @example `dhg-6w7q18iwt5jo****`
             */
            DedicatedHostGroupId: string;
            /**
             * 主机是否可分配实例，取值：
             * - **Allocatable**：允许实例分配
             * - **Suspended**：停止实例分配
             * @example `Suspended`
             */
            AllocationStatus: string;
            /**
             * 存储使用量，单位为GB。
             * @example `588800`
             */
            StorageUsed: string;
            /**
             * ECS规格代码。更多信息，请参见[ECS实例规格](~~25378~~)。
             * @example `ecs.r5.16xlarge`
             */
            EcsClassCode: string;
            /**
             * 主机ID。
             * @example `ch-bp10a5id3boqi****`
             */
            DedicatedHostId: string;
            /**
             * 内存使用率，单位为百分比。
             * @example `90`
             */
            MemAllocationRatio: string;
            /**
             * 主机的创建时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**。
             * @example `2020-10-16 16:30:19`
             */
            CreatedTime: string;
            /**
             * 主机的IP地址。
             * @example `192.168.XX.XX`
             */
            IPAddress: string;
            /**
             * 主机状态，取值：
             * - **0**：创建中
             * - **1**：运行中
             * - **2**：故障中
             * - **3**：准备下线
             * - **4**：维护中
             * - **5**：已下线
             * - **6**：重启中
             * - **7**：锁定中
             * > 当主机出现故障时，主机会下线，主机下线前主机会迁移实例数据到其他主机上。
             * @example `1`
             */
            HostStatus: string;
            /**
             * 主机名称。
             * @example `ch-bp15xfnp706tl****`
             */
            HostName: string;
            /**
             * 主机CPU。
             * @example `16`
             */
            HostCPU: string;
            /**
             * CPU使用量，单位为核。
             * @example `10`
             */
            CpuUsed: string;
            /**
             * 主机上部署的实例数量。
             * @example `1`
             */
            InstanceNumber: string;
            /**
             * 主机OS权限开放状态。取值：
             * - **0**：关闭
             * - **1**（默认值）：开放
             * @example `1`
             */
            OpenPermission: string;
            /**
             * 主机分布标识。
             * > 仅主机类型为**Tair**时返回此参数。
             * @example `0`
             */
            DistributionSymbol: string;
            /**
             * 主机所属专属集群的专有网络ID。
             * @example `vpc-bp1roz55mrbj3ka1s****`
             */
            VPCId: string;
            /**
             * 主机规格。
             * @example `rds.g6.4xlarge`
             */
            HostClass: string;
            /**
             * 主机的到期时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**。
             * @example `2021-10-16 16:30:19`
             */
            EndTime: string;
            /**
             * 主机所在虚拟交换机ID。
             * @example `vsw-bp133c8ifzxd3iv6q****`
             */
            VSwitchId: string;
            /**
             * 主机所在可用区。
             * @example `ap-southeast-1a`
             */
            ZoneId: string;
            /**
             * CPU使用率.。
             * @example `10`
             */
            CPUAllocationRatio: string;
            /**
             * 主机镜像类型。
             * @example `ALinux`
             */
            ImageCategory: string;
            /**
             * 主机的数据库类型。
             * @example `mysql`
             */
            Engine: string;
            /**
             * 磁盘使用率，单位为百分比。
             * @example `10`
             */
            DiskAllocationRatio: string;
            /**
             * 主机内存，单位GB。
             * @example `65536`
             */
            HostMem: string;
            /**
             * 关联的堡垒机ID。
             * @example `bastionhost-cn-i7m2fgw****`
             */
            BastionInstanceId: string;
            /**
             * 自定义主机账号的名称。
             * * 由小写字母、数字、下划线（_）组成。
             * * 以字母开头，以字母或数字结尾。
             * * 最少含2个字符，最多含16个字符。
             * @example `test`
             */
            AccountName: string;
            /**
             * 主机账号类型，取值：
             * **Normal**：普通账号
             * **Admin**：管理员账号
             * @example `Normal`
             */
            AccountType: string;
            /**
             * 主机分布标签。
             * @example `t4n9uz07h3r1tmcejtxf:1`
             */
            DistributionTag: string;
            /**
             * 专属集群类型，取值：
             * - **Pro**：MyBase专有版
             * - **Standard**：MyBase托管版
             * >  仅中国站返回此参数。
             * @example `Standard`
             */
            Category: string;
            /**
             * ECS ID。
             * >  仅中国站且专属集群类型为**MyBase专有版**时返回此参数。
             * @example `i-2zec7l031p0jtru3pn7a`
             */
            EcsId: string;
            /**
             * ECS磁盘信息。
             * >  仅中国站且专属集群类型为**MyBase专有版**时返回此参数。
             * @example `{\"SystemDiskSize\":20,\"DataDiskCount\":0,\"DataDiskSize\":0,\"DataDiskCategory\":[\"\"],\"SystemDiskCategory\":\"cloud_essd\"}`
             */
            DiskInfo: string;
            /**
             * 付费类型。
             * @example `PREPAY`
             */
            ChargeType: string;
            /**
             * MyBase SQL Server主机支持的版本号。
             * @example `2012_std_ha,2012_std,2016_std_ha,2016_std,2017_std_ha,2017_std,2019_std_ha,2019_std`
             */
            MssqlSupportVersion: string;
        }[];
    };
    /**
     * 本地盘磁盘自动扩展的上限值，单位GB。
     * @example `3661824`
     */
    MaxAutoScaleHostStorage: number;
}

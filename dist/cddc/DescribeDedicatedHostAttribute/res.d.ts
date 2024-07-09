export interface DescribeDedicatedHostAttributeResponse {
    /**
     * 主机的存储类型，取值：
     * - **dhg_cloud_ssd**、**dhg_cloud_essd**：ESSD云盘
     * - **dhg_local_ssd**：本地SSD盘
     * @example `dhg_cloud_ssd`
     */
    HostType: string;
    /**
     * 主机的存储总量，单位为GB。
     * @example `100`
     */
    HostStorage: number;
    /**
     * 主机上只读实例的备节点数。
     * @example `1`
     */
    InstanceNumberROSlave: number;
    /**
     * 账号类型，取值：
     * - **Normal**：普通权限账号
     * - **Admin**：管理员账号
     * @example `Admin`
     */
    AccountType: string;
    /**
     * 主机内存使用量，单位为GB。
     * @example `24576`
     */
    MemoryUsed: string;
    /**
     * 主机所属集群的ID。
     * @example `dhg-34639v1jt4y4****`
     */
    DedicatedHostGroupId: string;
    /**
     * 请求ID。
     * @example `00A001D6-2630-5CBD-A23C-80BC1BAFDC31`
     */
    RequestId: string;
    /**
     * 主机上只读实例的主节点数。
     * @example `1`
     */
    InstanceNumberROMaster: number;
    /**
     * 主机是否可分配实例，取值：
     * - **Allocatable**：允许分配实例
     * - **Suspended**：停止分配实例
     * @example `Suspended`
     */
    AllocationStatus: string;
    /**
     * 主机的存储使用量，单位为GB。
     * @example `588800`
     */
    StorageUsed: string;
    /**
     * ECS规格代码。
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
     * 主机创建成功的时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**。
     * @example `2021-11-13T07:14:22Z`
     */
    CreatedTime: string;
    /**
     * 主机的IP地址。
     * @example `192.168.XX.XX`
     */
    IPAddress: string;
    /**
     * 是否开启自动续费功能，取值：
     * * **true**：开启
     * * **false**（默认值）：不开启
     * @example `false`
     */
    AutoRenew: string;
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
     * > 当主机出现故障时，主机要下线，主机下线之前会将该故障主机上的实例进行迁移，从而保证数据的完整性。
     * @example `1`
     */
    HostStatus: string;
    /**
     * 主机的名称。
     * @example `ch-8vbj9x74z874o****`
     */
    HostName: string;
    /**
     * 主机的CPU，单位为核。
     * @example `16`
     */
    HostCPU: number;
    /**
     * 是否开放专属集群内的主机的OS权限，取值：
     * - **0**：不可开放状态
     * - **1**：开放状态
     * @example `1`
     */
    OpenPermission: string;
    /**
     * 主机上部署实例的个数。
     * @example `3`
     */
    InstanceNumber: number;
    /**
     * 主机CPU使用量。
     * @example `36`
     */
    CpuUsed: string;
    /**
     * 专有网络的ID。
     * @example `vpc-wz9vu1jb32wn3sdd6****`
     */
    VPCId: string;
    /**
     * 主机的规格。
     * @example `mssql.host.c2xlarge`
     */
    HostClass: string;
    /**
     * [地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 主机上的主节点数。
     * @example `4`
     */
    InstanceNumberMaster: number;
    /**
     * VSwitch ID。
     * @example `vsw-bp1kaugqyrzb58oc1****`
     */
    VSwitchId: string;
    /**
     * 主机上的备节点数。
     * @example `1`
     */
    InstanceNumberSlave: number;
    /**
     * 主机到期时间，格式为**yyyy-MM-ddTHH:mm:ssZ（UTC时间）**。
     * @example `2022-03-16T16:00:00Z`
     */
    ExpiredTime: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-h`
     */
    ZoneId: string;
    /**
     * 专属集群的cpu超配比，单位为百分比，精确到10%。
     * @example `200`
     */
    CPUAllocationRatio: string;
    /**
     * 主机镜像。引擎类型为**SQL Server**时返回，取值：
     * - **WindowsWithMssqlEntAlwaysonLicense**：SQL Server集群版
     * - **WindowsWithMssqlStdLicense**：SQL Server标准版
     * - **WindowsWithMssqlEntLicense**：SQL Server企业版
     * - **WindowsWithMssqlWebLicense**：SQL Server Web版
     * @example `WindowsWithMssqlStdLicense`
     */
    ImageCategory: string;
    /**
     * 专属集群的空间超配比。
     * @example `200`
     */
    DiskAllocationRatio: string;
    /**
     * 主机的内存，单位为MB。
     * @example `2048`
     */
    HostMem: number;
    /**
     * 主机账号名称。
     * - 由小写字母、数字、下划线（_）组成。
     * - 以字母开头，以字母或数字结尾。
     * - 包含2~16个字符。
     * @example `cdp_system`
     */
    AccountName: string;
    /**
     * 主机分布的标签。
     * @example `tag`
     */
    DistributionTag: string;
}

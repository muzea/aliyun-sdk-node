export interface CreateDedicatedHostRequest {
    /**
     * 目标集群ID。通过云数据库专属集群控制台**集群列表**查看目标集群ID。
     * > 主机的数据库类型与集群的数据库类型一致。
     * @example `dhg-6w7q18iwt5jo****`
     */
    "DedicatedHostGroupId": string;
    /**
     * 主机的规格。关于不同数据库类型支持的主机规格，详情请参见[主机规格详情](~~206343~~)。
     * @example `rds.g6.4xlarge`
     */
    "HostClass": string;
    /**
     * 主机的付费类型。取值为**prepaid**（包年包月）。
     * @example `prepaid`
     */
    "PayType": string;
    /**
     * 指定主机的预付费类型。取值：
     * <props="china">
     * * **Year**：包年。
     * * **Month**：包月。
     * * **Week**：包周。
     * </props>
     * <props="intl">
     * * **Year**：包年。
     * * **Month**：包月。
     * </props>
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 指定购买时长。取值：
     * <props="china">
     * * 当参数**Period**=**Year**时，**UsedTime**取值为**1**~**5**。
     * * 当参数**Period**=**Month**时，**UsedTime**取值为**1**~**9**。
     * * 当参数**Period**=**Week**时，**UsedTime**取值为**1**、**2**、**3**。
     * </props>
     * <props="intl">
     * * 当参数**Period**=**Year**时，**UsedTime**取值为**1**~**5**。
     * * 当参数**Period**=**Month**时，**UsedTime**取值为**1**~**9**。
     * </props>
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 客户端生成该参数值，用于保证请求的幂等性，防止重复提交请求。该参数值只能包含ASCII字符，且不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzSBZH8****`
     */
    "ClientToken": string;
    /**
     * 是否开启自动续费功能。取值：
     * * **true**：开启。
     * * **false**：不开启。
     * > 不填写默认为**false**。
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 主机镜像。取值：
     *   - **WindowsWithMssqlEntAlwaysonLicense**：SQL Server集群版
     *   - **WindowsWithMssqlStdLicense**：SQL Server标准版
     *   - **WindowsWithMssqlEntLicense**：SQL Server企业版
     *   - **WindowsWithMssqlWebLicense**：SQL Server Web版
     *   - **AliLinux**：其他主机镜像
     * > 创建SQL Server主机时，需要填写对应版本的主机镜像。
     * @example `AliLinux`
     */
    "ImageCategory"?: string;
    /**
     * 主机密码。 仅集群类型为**私有部署集群**时，支持创建主机密码。密码需符合如下要求：
     * - 长度为8~30个字符。
     * - 必须至少包含三项：大写字母、小写字母、数字和特殊字符。
     * - 特殊符号：()\\`~!@#$%^&*-_+=|{}\[\]:;'<>,.?/
     * @example `Test123456`
     */
    "OsPassword"?: string;
    /**
     * 主机磁盘类型，仅针对Tair类型主机生效，当前只支持以下两种类型：
     * - **cloud_essd**：PL1云盘
     * - **cloud_essd0**：PL0云盘
     * @example `cloud_essd0`
     */
    "HostStorageType"?: string;
    /**
     * 主机磁盘大小，仅针对Tair类型主机生效，取值范围是（单位GB）：
     * - 512
     * - 1024
     * - 1536
     * - 2048
     * - 2560
     * - 3072
     * - 3584
     * - 4096
     * @example `512`
     */
    "HostStorage"?: string;
    /**
     * 主机所在集群的[地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。调用[DescribeRegions](~~214103~~)接口查询可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId": string;
    /**
     * 虚拟交换机的ID，可通过专有网络控制台查看目标虚拟机ID。
     * @example `vsw-bp133c8ifzxd3iv6q****`
     */
    "VSwitchId": string;
    /**
     * MyBase 开放版使用，创建开放版集群类型：onACK、onECS
     * @example `onACK`
     */
    "ClusterType"?: string;
    /**
     * MyBase开放版使用，开放版集群别名
     * @example `test-on-ack-cluster`
     */
    "ClusterAlias"?: string;
    /**
     * MyBase开放版onECS集群指定VPC ID
     * @example `vpc-xxxxxx`
     */
    "VpcID"?: string;
    /**
     * MyBase开放版onECS实例关联的服务。
     */
    "ClusterServices"?: string[];
    /**
     * MyBase开放版onECS实例的参数。
     */
    "MyBaseEcsClass"?: {
        /**
         * 付费类型，取值如下：
         * - PrePaid：预付费。
         * - PostPaid：后付费。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 实例规格。
         * @example `ecs.g7.large`
         */
        EcsClassCode: string;
        /**
         * 购买数量。
         * @example `1`
         */
        Amount: number;
        /**
         * 购买on ECS主机的包年包月时长。当参数ChargeType取值为PrePaid时，Period参数必填。
         * @example `1`
         */
        Period: number;
        /**
         * 包年包月时长的单位，默认为Month（月）。
         * @example `Month`
         */
        PeriodType: string;
        /**
         * 系统盘容量。单位为GB。
         * @example `40`
         */
        SystemDiskSize: number;
        /**
         * 磁盘类型。
         * @example `cloud_essd`
         */
        SystemDiskCategory: string;
        /**
         * 数据盘大小。单位为GB。
         * @example `40`
         */
        DataDiskSize: number;
        /**
         * 数据盘类型。
         * @example `cloud_essd`
         */
        DataDiskCategory: string;
        /**
         * 数据盘数量。
         * @example `2`
         */
        DataDiskCount: number;
        /**
         * 是否自动续费，默认false。
         * @example `false`
         */
        AutoRenew: boolean;
        /**
         * ECS主机密码。
         * @example `***********`
         */
        Password: string;
        /**
         * 密钥对名称。
         * @example `test****`
         */
        KeyPairName: string;
        /**
         * 实例所属安全组集合。
         */
        SecurityGroupIds: string[];
        /**
         * 主机标签信息。
         */
        Tags: string[];
        /**
         * 公网出带宽最大值，单位为Mbit/s。
         * 默认值：0。设定为大于0时会自动创建公网IP。
         * @example `100`
         */
        InternetMaxBandwidthOut: number;
        /**
         * 网络计费类型。取值范围：
         * - PayByBandwidth：按固定带宽计费。
         * - PayByTraffic：按使用流量计费。
         * @example `PayByTraffic`
         */
        InternetChargeType: string;
        /**
         * 部署集ID。
         * @example `****`
         */
        DepolymentSetId: string;
    };
}

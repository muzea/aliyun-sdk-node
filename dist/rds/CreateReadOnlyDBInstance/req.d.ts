export interface CreateReadOnlyDBInstanceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 地域ID。只读实例的地域必须和主实例相同。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 主实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例规格，详见[只读实例规格列表](~~145759~~)。建议只读实例规格不小于主实例规格，否则易导致只读实例延迟高、负载高等现象。
     * @example `mysqlro.n2.small.1c`
     */
    "DBInstanceClass": string;
    /**
     * 存储空间，只读实例存储空间需要大于或等于主实例存储空间。取值：请参见[只读实例规格列表](~~145759~~)的**存储空间**列。每5 GB进行递增，单位：GB。
     * @example `20`
     */
    "DBInstanceStorage": number;
    /**
     * 数据库版本号。必须与主实例相同。
     * * MySQL数据库取值：**5.6**、**5.7**、**8.0**。
     * * SQL Server数据库取值：**2017_ent、2019_ent、2022_ent**。
     * * PostgreSQL数据库取值：**10.0、11.0、12.0、13.0、14.0、15.0**
     * @example `5.6`
     */
    "EngineVersion": string;
    /**
     * 付费类型，取值：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 实例描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以http://和https://开头。
     * @example `testReadOnly`
     */
    "DBInstanceDescription"?: string;
    /**
     * 只读实例的网络类型，取值：
     * * **VPC**：专有网络
     * * **Classic**：经典网络
     * 默认创建专有网络实例，需要传入**VPCId**和**VSwitchId**。
     * >只读实例的网络类型可以和主实例不同。
     * @example `Classic`
     */
    "InstanceNetworkType"?: string;
    /**
     * 只读实例的专有网络VPC ID。当**InstanceNetworkType**配置为空或**VPC**时需要传入。
     * > * 主实例的存储类型为本地SSD盘时，只读实例可以选择任意VPC网络。
     * > * 主实例的存储类型为云盘时，只读实例VPC必须和主实例保持一致。
     * @example `vpc-uf6f7l4fg90****`
     */
    "VPCId"?: string;
    /**
     * 只读实例的虚拟交换机ID。当**InstanceNetworkType**配置为空或**VPC**时需要传入。
     * @example `vsw-uf6adz52c2p****`
     */
    "VSwitchId"?: string;
    /**
     * 设置只读实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
     * @example `172.16.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例系列，取值：
     * * **Basic**：基础系列
     * * **HighAvailability**：高可用系列（默认值）
     * * **AlwaysOn**：集群系列
     * <props="china">* **Finance**：金融版</props>
     * >PostgreSQL云盘实例的只读实例为基础系列，因此必须传入**Basic**。
     * @example `HighAvailability`
     */
    "Category"?: string;
    /**
     * 实例储存类型，取值：
     * * **local_ssd**：本地SSD盘
     * * **cloud_ssd**：SSD云盘
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * > * RDS MySQL主实例为本地SSD盘，则仅支持传入**local_ssd**；RDS MySQL主实例为云盘，则仅支持传入云盘存储类型。
     * > * SQL Server仅支持传入云盘存储类型。
     * @example `local_ssd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 在专属集群内创建只读实例时指定专属集群ID。
     * @example `dhg-4n****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 在专属集群内创建只读实例时，指定主实例的主机ID。
     * @example `i-bp****`
     */
    "TargetDedicatedHostIdForMaster"?: string;
    /**
     * 备用参数。
     * @example `test`
     */
    "GdnInstanceName"?: string;
    /**
     * 备用参数。
     * @example `test`
     */
    "TddlBizType"?: string;
    /**
     * 备用参数。
     * @example `test`
     */
    "TddlRegionConfig"?: string;
    /**
     * 备用参数。
     * @example `test`
     */
    "InstructionSetArch"?: string;
    /**
     * 指定购买时长。取值：
     * * 当参数**Period**为**Year**时，**UsedTime**取值为**1**~**5**。
     * * 当参数**Period**为**Month**时，**UsedTime**取值为**1**~**9**。
     * > 若**PayType**为**Prepaid**，需要传入该参数。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 指定预付费实例为包年或者包月类型。取值：
     * * **Year**：包年
     * * **Month**：包月
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 实例是否自动续费，仅在创建包年包月实例时传入。取值：
     * * **true**：是
     * * **false**：否
     * > * 按月购买，则自动续费周期为1个月。
     * > * 按年购买，则自动续费周期为1年。
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 是否开启RDS释放保护功能。取值：
     * * **true**：开启
     * * **false**：关闭（默认值）
     * > 仅**计费方式**为**按量付费**时支持开启。
     * @example `true`
     */
    "DeletionProtection"?: boolean;
    /**
     * 支持在RDS MySQL主实例创建只读实例时初始化端口。
     * 取值范围：1000~65534
     * @example `3306`
     */
    "Port"?: string;
    /**
     * 弃用参数，无需配置。
     * @example `0`
     */
    "BpeEnabled"?: string;
    /**
     * <props="intl">无效参数，无需配置。</props>
     * <props="china">通用云盘IO突发功能开关。</props>
     * <props="china">* true：开启IO突发功能。</props>
     * <props="china">* false：关闭IO突发功能。</props>
     * <props="china">> 了解通用云盘的IO突发功能的更多信息，请参见[什么是通用云盘](~~2340501~~)。</props>
     * @example `false`
     */
    "BurstingEnabled"?: boolean;
    /**
     * 是否自动支付。
     * 取值范围：
     * 1. **true**：自动支付。您需要确保账户余额充足。
     * 1. **false**：只生成订单不扣费。
     * > 默认值为true。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录RDS管理控制台自行支付。
     * >
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * <props="china">是否开启通用云盘IO加速功能，参数取值含义如下：</props>
     * <props="china"> - 1：开启</props>
     * <props="china"> - 0：不开启</props>
     * <props="china">> 通用云盘的IO加速功能的更多信息，请参见[通用云盘IO加速功能技术介绍](~~2527067~~)。</props>
     * <props="intl">预留参数。</props>
     * @example `0`
     */
    "IoAccelerationEnabled"?: string;
}

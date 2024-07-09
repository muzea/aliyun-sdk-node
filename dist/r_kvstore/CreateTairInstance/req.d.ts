export interface CreateTairInstanceRequest {
    /**
     * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称，需满足下述要求：
     * * 长度为2~80个字符。
     * * 以大小写英文字母或中文开头，不支持空格和特殊字符：`@/:=”<>{[]}`。
     * @example `apitest`
     */
    "InstanceName"?: string;
    /**
     * 实例密码，需满足下述要求：
     * * 长度为8~32位。
     * * 需包含大写字母、小写字母、特殊字符和数字中的至少三种，支持的特殊字符为`!@#$%^&*()_+-=`。
     * @example `Pass!123456`
     */
    "Password"?: string;
    /**
     * 实例规格，更多信息，请参见：
     * - [内存型规格](~~443844~~)。
     * - [持久内存型规格](~~443845~~)。
     * - [磁盘型规格](~~443846~~)。
     * @example `tair.scm.standard.4m.32d`
     */
    "InstanceClass": string;
    /**
     * 主可用区ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的可用区。
     * > 您也可以再传入SecondaryZoneId参数指定备可用区，主备节点将分别部署在指定的主可用区和备可用区，实现同城双中心主备架构。例如指定ZoneId参数为"cn-hangzhou-h"，指定SecondaryZoneId参数为"cn-hangzhou-g"。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 付费类型，取值：
     * - **PrePaid**（默认）：预付费，即包年包月。
     * - **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 专有网络ID，可调用专有网络VPC的[DescribeVpcs](~~35739~~)获取。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    "VpcId": string;
    /**
     * 该专有网络下的虚拟交换机ID，可调用专有网络VPC的[DescribeVpcs](~~35739~~)获取。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId": string;
    /**
     * 付费周期，单位为月，取值：**1**~**9**、**12**、**24**、**36**、**60** 。
     * > 当**ChargeType**取值为**PrePaid**时，本参数必须传入。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 活动ID、业务信息。
     * @example `000000000`
     */
    "BusinessInfo"?: string;
    /**
     * 优惠码。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 如需基于某个实例的备份集创建新实例，请先在此参数中指定源实例ID。
     * > 然后通过**BackupId**、**ClusterBackupId**（云原生集群架构建议使用ClusterBackupId）或**RestoreTime**参数指定需要使用的备份集或指定时间点，本参数需要与上述3个中的任意一个参数组合使用。
     * @example `r-bp1zxszhcgatnx****`
     */
    "SrcDBInstanceId"?: string;
    /**
     * 若您的实例是云原生架构实例，并且是集群实例，则建议您使用[DescribeClusterBackupList](~~2679158~~)查询出集群备份集id，例如"cb-xx"，然后填入ClusterBackupId请求参数来达到克隆集群实例的目的，免去您输入各个分片备份集id的烦恼。
     * 您可在此参数中指定源实例的备份集ID，系统将使用该备份集中保存的数据创建新实例。通过调用[DescribeBackups](~~61081~~)可查询BackupId。如果源实例是集群实例，则此处需要填写源实例各个分片的备份集id，并且通过逗号隔开，例如"10**,11**,15**"
     * @example `2158****20`
     */
    "BackupId"?: string;
    /**
     * 部分新集群架构支持集群备份集ID，您可以通过[DescribeClusterBackupList](~~2679158~~)接口获取。
     * * 若支持，可输入指定的集群备份集ID即可，无需再填写**BackupId**参数。
     * * 若不支持，请在BackupId参数中填写为原实例各个分片下的备份集ID，通过逗号隔开，例如"2158\*\*\*\*20,2158\*\*\*\*22"等。
     * @example `cb-hyxdof5x9kqb****`
     */
    "ClusterBackupId"?: string;
    "RecoverConfigMode"?: string;
    /**
     * 指定实例的内网IP地址。
     * > 该地址需在实例所属交换机的网段内，您可以调用专有网络VPC的[DescribeVSwitches](~~35748~~)获取网段信息。
     * @example `172.16.88.***`
     */
    "PrivateIpAddress"?: string;
    /**
     * 是否使用代金券，取值：
     * * **true**：使用代金券。
     * * **false**（默认）：不使用代金券。
     * @example `true`
     */
    "AutoUseCoupon"?: string;
    /**
     * 是否开启自动续费，取值：
     * * **true**：开启。
     * * **false**（默认）：不开启。
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 自动续费周期，单位为月，取值：**1**、**2**、**3**、**6**、**12**。
     * > 当**AutoRenew**取值为**true**时，本参数必须传入。
     * @example `3`
     */
    "AutoRenewPeriod"?: string;
    /**
     * 目标资源组ID。
     * > * 您可以通过调用[ListResourceGroups](~~158855~~)接口或通过控制台获取资源组ID列表。相关操作，请参见[查看资源组基本信息](~~151181~~)。
     * > * 修改实例所属的资源组之前，您可以调用[ListResources](~~158866~~)接口查看实例现在所属的资源组。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 自动支付，取值固定为**true**。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 存储类型，取值为**essd_pl1**、**essd_pl2**、**essd_pl3**。
     * > 当**InstanceType**取值为**tair_essd**时，且创建ESSD型时，才需要输入本参数。
     * @example `essd_pl1`
     */
    "StorageType"?: string;
    /**
     * 磁盘型实例的存储空间，不同的规格取值范围有所区别，详情请参见[磁盘型规格](~~443846~~)。
     * > 当**InstanceType**取值为**tair_essd**时，且创建ESSD型时，才需要输入本参数。
     * @example `60`
     */
    "Storage"?: number;
    /**
     * 实例类型，取值：
     * - **MASTER_SLAVE**（默认）：高可用，采用主从架构，可保障可用性。
     * - **STAND_ALONE**：单副本，采用单节点架构。在节点故障后，数据会丢失，系统会自动拉起新的空实例。仅在**单可用区**时支持，且不支持创建集群与读写分离架构。
     * @example `MASTER_SLAVE`
     */
    "ShardType"?: string;
    /**
     * 实例中的数据节点个数，取值：
     * * **1**：默认值，即表示创建的实例为[标准架构](~~52228~~)，仅拥有1个数据节点。
     * * **2**~**32**：传入该范围的值，即表示创建的实例为[集群架构](~~52228~~)，拥有指定数量的数据节点。
     * > 当**InstanceType**取值为**tair_rdb**或**tair_scm**时，本参数才可以传入**2**~**32**，即只有内存型和持久内存型支持集群架构。
     * @example `2`
     */
    "ShardCount"?: number;
    /**
     * 主可用区的只读节点数，本参数仅适用于创建云盘版读写分离架构实例，您可以通过该参数实现自定义只读节点数量，取值：1~9。
     * > 但该参数与SlaveReadOnlyCount的总和不能大于9。
     * @example `5`
     */
    "ReadOnlyCount"?: number;
    /**
     * 数据库版本，默认取值：**1.0**，不同 Tair 产品类型传参规则：
     * - Tair_rdb: Tair 内存型兼容Redis 5.0和Redis 6.0协议，传**5.0**或者**6.0**。
     * - Tair_scm: Tair 持久内存兼容Redis 6.0协议，传**1.0**。
     * - Tair_essd: Tair 磁盘（ESSD/SSD）兼容Redis 6.0协议。 创建ESSD型请传入**1.0**、创建SSD型请传入**2.0**。
     * @example `1.0`
     */
    "EngineVersion"?: string;
    /**
     * 存储介质，取值：
     * * **tair_rdb**：内存型。
     * * **tair_scm**：持久内存型。
     * * **tair_essd**：磁盘型。
     * @example `tair_scm`
     */
    "InstanceType": string;
    /**
     * 备可用区ID，可调用[DescribeRegions](~~61012~~)查询。
     * > 本参数和ZoneId参数传入的值不能相同，且不可传入多可用区对应的ID。
     * @example `cn-hangzhou-g`
     */
    "SecondaryZoneId"?: string;
    /**
     * 是否将本次新建的实例作为分布式实例中的子实例，通过该方式可创建分布实例。
     * * 若希望新建的实例作为第一个子实例，请输入**true**。
     * * 若希望新建的实例作为第二、三个子实例，请输入分布式实例 ID，例如gr-bp14rkqrhac****。
     * * 不作为分布式实例，您无需输入任何值。
     * > 若希望作为分布式实例，本次新建的实例需为Tair内存型。
     * @example `gr-bp14rkqrhac****`
     */
    "GlobalInstanceId"?: string;
    /**
     * 实例的标签信息。
     */
    "Tag"?: {
        /**
         * 标签的键，与Tag Value组成标签的键值对。
         * > 单次最多支持传入5组标签的键值对。
         * @example `key1_test`
         */
        Key: string;
        /**
         * 标签的值。
         * > **N**表示传入第几个标签的值。例如**Tag.1.Value**表示传入第一个标签的值；**Tag.2.Value**表示传入第二个标签的值。
         * @example `value1_test`
         */
        Value: string;
    }[];
    /**
     * 是否对本次创建实例的操作执行预检查，取值：
     * * **true**：执行预检查操作，不创建实例。检查项目包含请求参数、请求格式、业务限制和库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * * **false**（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 实例的服务端口，取值范围：1024~65535，默认值为6379。
     * @example `6379`
     */
    "Port"?: number;
    /**
     * 实例的全局IP白名单模板，多个IP白名单模板请用英文逗号（,）分隔，不可重复。
     * @example `g-zsldxfiwjmti0kcm****`
     */
    "GlobalSecurityGroupIds"?: string;
    /**
     * 参数模板ID，根据新创建的参数模板参数创建实例，不可重复。
     * @example `g-50npzjcqb1ua6q6j****`
     */
    "ParamGroupId"?: string;
    /**
     * 用于多可用区读写分离实例创建时，指定备可用区的只读节点数量，该参数与ReadOnlyCount的总和不能大于9。
     * ><notice>创建多可用区读写分离实例 SlaveReadOnlyCount  和 SecondaryZoneId 需要同时指定。></notice>
     * @example `1`
     */
    "SlaveReadOnlyCount"?: number;
    /**
     * 若源实例已开启数据闪回，您可在此参数中指定源实例备份保留周期内的任意时间点，系统将使用源实例在该时间点的备份数据创建新实例。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2021-07-06T07:25:57Z`
     */
    "RestoreTime"?: string;
}

export interface CreateInstanceRequest {
    /**
     * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "Token"?: string;
    /**
     * 实例名称。 名称为2~80个字符，以大小写字母或中文开头，不支持字符`@/:=”<>{[]}`和空格。
     * @example `apitest`
     */
    "InstanceName"?: string;
    /**
     * 实例密码。 长度为8－32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
     * @example `Pass!123456`
     */
    "Password"?: string;
    /**
     * 实例的存储容量，单位为MB。
     * > 调用此接口需至少传递**Capacity**或**InstanceClass**中的一个参数。
     * @example `16384`
     */
    "Capacity"?: number;
    /**
     * 实例的规格，例如redis.master.small.default为社区版（经典版）标准架构双副本1GB实例，详细信息请参见[规格查询导航](~~26350~~)。
     * > 调用此接口需至少传递**Capacity**或**InstanceClass**中的一个参数。
     * @example `redis.master.small.default`
     */
    "InstanceClass"?: string;
    /**
     * 主可用区ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的可用区。
     * > 您也可以再传入SecondaryZoneId参数指定备可用区，主备节点将分别部署在指定的主可用区和备可用区，实现同城双中心主备架构。例如指定ZoneId参数为"cn-hangzhou-h"，指定SecondaryZoneId参数为"cn-hangzhou-g"。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 付费类型，取值：
     * * **PrePaid**：预付费。
     * * **PostPaid**（默认）：按量付费。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 节点类型，取值：
     * * **MASTER_SLAVE**：高可用（双副本）
     * * **STAND_ALONE**：单副本
     * * **double**：双副本
     * * **single**：单副本
     * > 云原生版实例请选择**MASTER_SLAVE**或**STAND_ALONE**，经典版实例请选择**double**或**single**。
     * @example `STAND_ALONE`
     */
    "NodeType"?: string;
    /**
     * 网络类型，取值：
     * * **VPC**：专有网络，默认值。
     * @example `VPC`
     */
    "NetworkType"?: string;
    /**
     * VPC网络的ID。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机的ID。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId"?: string;
    /**
     * 付费周期，单位为月，取值：**1**~**9**、**12**、**24**、**36**、**60**  。
     * > **ChargeType**取值为**PrePaid**时，本参数才可用且必须传入。
     * @example `12`
     */
    "Period"?: string;
    /**
     * 活动ID、业务信息。
     * @example `000000000`
     */
    "BusinessInfo"?: string;
    /**
     * 优惠码，默认值为：`default`。
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
     * @example `111111111`
     */
    "BackupId"?: string;
    /**
     * 实例类型，取值：
     * * **Redis**（默认）
     * * **Memcache**
     * @example `Redis`
     */
    "InstanceType"?: string;
    /**
     * Redis**经典版本**，版本号取值：
     * * **2.8**（不推荐，[计划停止全面支持](~~2674657~~)）
     * * **4.0**（不推荐）
     * * **5.0**
     * Redis**云原生版本**，版本号取值：
     * * **5.0**
     * * **6.0**（推荐）
     * * **7.0**
     * > 默认值为**5.0**。
     * @example `5.0`
     */
    "EngineVersion"?: string;
    /**
     * 指定新实例的内网IP地址。
     * > 内网IP需在实例所属的交换机网段内。
     * @example `172.16.0.***`
     */
    "PrivateIpAddress"?: string;
    /**
     * 是否使用代金券，取值：
     * * **true**：使用代金券。
     * * **false**（默认）：不使用代金券。
     * @example `false`
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
     * 资源组ID。
     * @example `rg-resourcegroupid1`
     */
    "ResourceGroupId"?: string;
    /**
     * 若源实例已开启数据闪回，您可在此参数中指定源实例备份保留周期内的任意时间点，系统将使用源实例在该时间点的备份数据创建新实例。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-06-19T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 专属集群ID，在专属集群内创建Redis实例时需传入本参数。
     * @example `dhg-uv4fnk6r7zff****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 分片数，本参数仅适用于创建云盘版集群架构实例，您可以通过该参数实现自定义分片数量。
     * @example `4`
     */
    "ShardCount"?: number;
    /**
     * 主可用区的只读节点数，本参数仅适用于创建云盘版读写分离架构实例，您可以通过该参数实现自定义只读节点数量，取值：1~9。
     * > 但该参数与SlaveReadOnlyCount的总和不能大于9。
     * @example `5`
     */
    "ReadOnlyCount"?: number;
    /**
     * 分布式实例ID，本参数仅适用于中国站。
     * <props="china"> 如需将新创建的Redis实例追加为分布式实例中的新子实例，本参数才可用且必须传入。相关说明与控制台操作，请参见[为分布式实例添加子实例](~~106885~~)。</props>
     * @example `gr-bp14rkqrhac****`
     */
    "GlobalInstanceId"?: string;
    /**
     * 是否将本次新建的实例作为分布式实例中的第一个子实例，通过该方式可创建分布实例，取值：
     * * **true**：作为第一个子实例。
     * * **false**（默认）：不作为第一个子实例。
     * > * 如需传入**true**，本次新建的实例需为Tair内存型，引擎版本为5.0。
     * > * 本参数仅适用于中国站。
     * @example `false`
     */
    "GlobalInstance"?: boolean;
    /**
     * 备可用区ID，可调用[DescribeZones](~~94527~~)接口查询。
     * > 本参数和ZoneId参数传入的值不能相同，且不可传入多可用区对应的ID。
     * @example `cn-hangzhou-g`
     */
    "SecondaryZoneId"?: string;
    /**
     * 实例的服务端口，取值范围：**1024**~**65535**，默认值为**6379**。
     * @example `6379`
     */
    "Port"?: string;
    /**
     * 是否对本次创建实例的操作执行预检查，取值：
     * * **true**：执行预检查操作，不创建实例。检查项目包含请求参数、请求格式、业务限制和库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * * **false**（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 实例的全局IP白名单模板，多个IP白名单模板请用英文逗号（,）分隔，不可重复。
     * @example `g-zsldxfiwjmti0kcm****`
     */
    "GlobalSecurityGroupIds"?: string;
    /**
     * 指定新创建实例的AOF参数配置，取值：
     * - **yes**（默认）：开启AOF持久化。
     * - **no**：关闭AOF持久化。
     * > 该参数适用于经典版实例，云原生版实例暂不支持指定AOF参数。
     * @example `yes`
     */
    "Appendonly"?: string;
    /**
     * 连接地址的前缀，需由小写英文字母与数字组成，以小写字母开头，长度为8~40个字符。
     * >
     * > 连接地址格式为：<前缀>.redis.rds.aliyuncs.com。
     * @example `r-bp1zxszhcgatnx****`
     */
    "ConnectionStringPrefix"?: string;
    /**
     * 参数模板ID，全局唯一。
     * @example `rpg-test**`
     */
    "ParamGroupId"?: string;
    /**
     * 实例的标签信息。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * > * **N**表示传入第几个标签的键，单个实例最多可绑定20个标签。例如Tag.1.Key表示传入第一个标签的键；Tag.2.Key表示传入第二个标签的键。
         * > * 如果标签的键不存在，则自动创建。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签的值。
         * > **N**表示传入第几个标签的值。例如**Tag.1.Value**表示传入第一个标签的值；**Tag.2.Value**表示传入第二个标签的值。
         * @example `testvalue`
         */
        Value: string;
    }[];
    /**
     * 部分新集群架构支持集群备份集ID，您可以通过[DescribeClusterBackupList](~~2679158~~)接口获取。
     * * 若支持，可输入指定的集群备份集ID即可，无需再填写**BackupId**参数。
     * * 若不支持，请在BackupId参数中填写为原实例各个分片下的备份集ID，通过逗号隔开，例如"2158\*\*\*\*20,2158\*\*\*\*22"等。
     * @example `cb-hyxdof5x9kqb****`
     */
    "ClusterBackupId"?: string;
    /**
     * 用于多可用区读写分离实例创建时，指定备可用区的只读节点数量。该参数与ReadOnlyCount的总和不能大于9。
     * ><notice>创建多可用区读写分离实例时需要同时指定SlaveReadOnlyCount和SecondaryZoneId参数。></notice>
     * @example `2`
     */
    "SlaveReadOnlyCount"?: number;
    "RecoverConfigMode"?: string;
}

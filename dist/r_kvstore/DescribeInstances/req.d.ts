export interface DescribeInstancesRequest {
    /**
     * 实例所属的地域ID。
     * > 调用本接口时，如果传入了**Tag**参数，则本参数必须传入。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要查询的实例ID。
     * > 如需传入多个实例ID时，使用英文逗号（,）分隔实例ID，最多一个请求传入 30 个实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceIds"?: string;
    /**
     * 实例状态，取值：
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
     * > 更多实例状态及详细信息，请参见[实例状态与影响](~~200740~~)。
     * @example `Normal`
     */
    "InstanceStatus"?: string;
    /**
     * 付费类型，取值：
     * * **PrePaid**：预付费，即包年包月。
     * * **PostPaid**：后付费，即按量付费。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 网络类型，取值：
     * * **CLASSIC**：经典网络。
     * * **VPC**：专有网络。
     * @example `CLASSIC`
     */
    "NetworkType"?: string;
    /**
     * <props="china">Redis实例的引擎版本，取值：**2.8**、**4.0**、**5.0**或**6.0**。</props>
     * <props="intl">Redis实例的引擎版本，取值：**2.8**、**4.0**或**5.0**。</props>
     * <props="partner">Redis实例的引擎版本，取值：**2.8**、**4.0**或**5.0**。</props>
     * @example `4.0`
     */
    "EngineVersion"?: string;
    /**
     * 实例规格，请参见[实例规格表](~~107984~~)。
     * @example `redis.master.small.default`
     */
    "InstanceClass"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId"?: string;
    /**
     * 实例列表的页码，起始值为**1**，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页最多可显示的行数，最大值为**50**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 实例类型，取值：
     * * **Tair**。
     * * **Redis**。
     * * **Memcache**。
     * @example `Redis`
     */
    "InstanceType"?: string;
    /**
     * 支持模糊搜索实例名称或实例ID。
     * @example `apitest`
     */
    "SearchKey"?: string;
    /**
     * 架构类型，取值：
     * * **cluster**：集群版。
     * * **standard**：标准版。
     * * **rwsplit**：读写分离版。
     * @example `standard`
     */
    "ArchitectureType"?: string;
    /**
     * 实例的过期状态，取值：
     * * **true**：已过期。
     * * **false**：未过期。
     * @example `false`
     */
    "Expired"?: string;
    /**
     * 可用区ID。
     * @example `cn-hongkong-b`
     */
    "ZoneId"?: string;
    /**
     * 资源组ID。
     * > 您可以通过调用[ListResourceGroups](~~158855~~)接口或通过控制台获取资源组ID列表。相关操作，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 返回的实例列表中，是否过滤分布式实例中的子实例，取值：
     * * **true**：只返回子实例信息。
     * * **false**：不返回子实例信息。
     * @example `true`
     */
    "GlobalInstance"?: boolean;
    /**
     * 实例类型，取值：
     * * **Community**：社区版。
     * * **Enterprise**：企业版。
     * @example `Enterprise`
     */
    "EditionType"?: string;
    /**
     * 专有网络IP地址。
     * @example `172.16.49.***`
     */
    "PrivateIp"?: string;
    /**
     * 实例的标签信息。
     */
    "Tag"?: {
        /**
         * 标签的键，与Tag Value组成标签的键值对。
         * > 单次最多支持传入5组标签的键值对。
         * @example `存储类型`
         */
        Key: string;
        /**
         * 标签键的值，与Tag Key组成标签的键值对。
         * @example `开发`
         */
        Value: string;
    }[];
}

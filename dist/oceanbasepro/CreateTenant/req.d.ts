export interface CreateTenantRequest {
    /**
     * 租户名称。<br>
     * 长度为 2~20 个字符，支持英文字母、数字和下划线，区分大小写，必须以字母或下划线开头。 不可设置为 sys。
     * @example `pay_online`
     */
    "TenantName": string;
    /**
     * 租户的 CPU 大小，单位：核数（Cores）。
     * > <br>单个租户的 CPU 不能超过所属集群的规格。<br>例如：集群为 14C70GB，则 CPU 不超过 14C。
     * @example `2`
     */
    "Cpu": number;
    /**
     * 租户内存大小，单位 GB。
     * > <br>单个租户的内存不能超过所属集群的规格。<br>例如：集群为 14C70GB，则内存不超过 70GB。
     * @example `10`
     */
    "Memory": number;
    /**
     * 租户所在时区。 详情参见 [DescribeTimeZones](~~410361~~)。
     * @example `Asia/Shanghai`
     */
    "TimeZone": string;
    /**
     * 租户模式。
     * 当前支持 Oracle 模式（Oracle）、MySQL 模式（MySQL）。
     * 详情参见 [DescribeInstanceTenantModes](~~410354~~)。
     * @example `Oracle`
     */
    "TenantMode": string;
    /**
     * 字符集。
     * 详情参见：DescribeCharset。
     * @example `utf8mb4`
     */
    "Charset": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 专有网络（VPC） ID。
     *  如无合适的 VPC，请根据页面提示创建一个 VPC。
     * 详情参见什么是专有网络。
     * @example `vpc-bp1d2q3mhg9i23ofi****`
     */
    "UserVpcId": string;
    /**
     * 虚拟交换机（VSwitch）ID。
     * 如无合适的 VSwitch，请根据页面提示创建一个。
     * 详情参见使用交换机。
     * @example `vsw-bp11k1aypnzu1l3whi****`
     */
    "UserVSwitchId": string;
    /**
     * 租户的主可用区。
     * 其为集群部署可用区中的一个。
     * @example `cn-hangzhou-h`
     */
    "PrimaryZone": string;
    /**
     * 数据库描述信息。
     * @example `this is a test database`
     */
    "Description"?: string;
    /**
     * 租户的资源分布节点数。
     * 其与集群的部署模式相耦合，如集群模式为 2-2-2，则最后分布节点数最多为 2 个。
     * @example `2`
     */
    "UnitNum"?: number;
    /**
     * 创建只读副本的可用区，当传入多个可用区的时候，以逗号分隔。
     * ><notice>此参数暂时不可用。></notice>
     * @example `cn-shanghai-g-ro,cn-shanghai-h-ro`
     */
    "ReadOnlyZoneList"?: string;
    /**
     * 租户的已分配日志盘大小，单位：GB。
     * @example `128`
     */
    "LogDisk"?: number;
    /**
     * 创建租户时，初始化参数
     */
    "CreateParams"?: any;
    /**
     * 用户vpc的ownerId
     */
    "UserVpcOwnerId"?: string;
}

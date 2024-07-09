export interface DescribeDBClustersRequest {
    /**
     *  地域ID。
     * > 您可以通过接口[DescribeRegions](~~98041~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  集群ID。多个集群ID间用英文逗号（,）隔开。
     * @example `pc-****************`
     */
    "DBClusterIds"?: string;
    /**
     * 集群描述，可模糊查询。
     * @example `pc-****************`
     */
    "DBClusterDescription"?: string;
    /**
     * 数据库连接地址。
     * @example `********.rwlb.polardb-pg-public.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
    /**
     * 集群状态，取值范围请参见[集群状态表](~~99286~~)。
     * @example `Running`
     */
    "DBClusterStatus"?: string;
    /**
     *  数据库类型，取值范围如下：
     * * **MySQL**
     * * **PostgreSQL**
     * * **Oracle**
     * @example `MySQL`
     */
    "DBType"?: string;
    /**
     * 列表查询方式。取值为Simple，表示简略模式，仅返回集群的基本元数据信息。
     * >如果未填写该参数，则默认为详细模式，返回集群的详细信息。
     * @example `Simple`
     */
    "DescribeType"?: string;
    /**
     * 数据库版本。
     * @example `5.6`
     */
    "DBVersion"?: string;
    /**
     * 筛选最近N天创建的集群。取值范围：0~15。
     * @example `7`
     */
    "RecentCreationInterval"?: number;
    /**
     * 筛选N天后过期的集群。取值范围：0~15。
     * @example `6`
     */
    "RecentExpirationInterval"?: number;
    /**
     * 是否集群已过期。取值范围如下：
     * - **true**
     * - **false**
     * @example `true`
     */
    "Expired"?: boolean;
    /**
     * 每页记录数，取值为**30**、**50**或**100**。
     *
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-**********`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键，可以根据标签过滤集群列表。最多20对标签，各个标签对的数字n必须不同，且必须是从1开始的连续整数。Tag.n.Key对应的值为Tag.n.Value。
         * > 最多支持64个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `MySQL`
         */
        Key: string;
        /**
         * 标签键对应的标签值。
         * > 最多支持64个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `5.6`
         */
        Value: string;
    }[];
    /**
     * 付费类型，取值范围如下：
     * - **Postpaid**：按量付费
     * - **Prepaid**：预付费（包年包月）
     * @example `Postpaid`
     */
    "PayType"?: string;
    /**
     * 节点ID。支持传入多个节点ID，多个ID间用英文逗号（,）分隔。
     * @example `pi-***************`
     */
    "DBNodeIds"?: string;
}

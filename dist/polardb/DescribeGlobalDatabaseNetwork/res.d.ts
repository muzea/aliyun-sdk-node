export interface DescribeGlobalDatabaseNetworkResponse {
    /**
     * GDN的状态。取值：
     * - **creating**：创建中
     * - **active**：运行中
     * - **deleting**：删除中
     * - **locked**：锁定中（此时无法对GDN下的任一集群执行任何操作）
     * - **removing_member**：从集群正在脱离GDN
     * @example `active`
     */
    GDNStatus: string;
    /**
     * 链接信息。
     */
    Connections: {
        /**
         * 链接地址。
         * @example `abc.polardb.rds.aliyuncs.com`
         */
        ConnectionString: string;
        /**
         * 网络类型。
         * @example `Private`
         */
        NetType: string;
        /**
         * 链接地址的端口号。
         * @example `3306`
         */
        Port: string;
    }[];
    /**
     * 数据库引擎版本。当前仅支持8.0版本。
     * @example `8.0`
     */
    DBVersion: string;
    /**
     * 请求ID。
     * @example `67F2E75F-AE67-4FB2-821F-A81237EACD15`
     */
    RequestId: string;
    /**
     * GDN ID。
     * @example `gdn-bp1fttxsrmv*****`
     */
    GDNId: string;
    /**
     * GDN的创建时间。
     * @example `2020-02-24T11:57:54Z`
     */
    CreateTime: string;
    /**
     * 数据库引擎类型。当前仅支持MySQL类型。
     * @example `MySQL`
     */
    DBType: string;
    /**
     * GDN备注描述。要求如下：
     * - 不能以http://或https://开头。
     * - 必须以大小写字母或中文开头。
     * - 可以包含大小写字母、中文、数字、下划线（_）或连字符（-）。
     * - 长度为2~126个字符。
     * @example `GDN-fortest`
     */
    GDNDescription: string;
    /**
     * GDN中包含的集群。
     */
    DBClusters: {
        /**
         * 主从集群间跨地域的复制延迟时间。单位为秒。
         * @example `1`
         */
        ReplicaLag: string;
        /**
         * 集群到期时间。
         * > 仅付费方式为**Prepaid**（包年包月）的集群会返回具体参数值，**Postpaid**（按量付费）集群则返回空值。
         * @example `2020-11-14T16:00:00Z`
         */
        ExpireTime: string;
        /**
         * 集群是否到期。
         * - **true**：是
         * - **false**：否
         * > 仅付费方式为**Prepaid**（包年包月）的集群支持返回该参数。
         * @example `false`
         */
        Expired: string;
        /**
         * 数据库节点规格。
         * @example `polar.mysql.x4.large`
         */
        DBNodeClass: string;
        /**
         * 付费类型：
         * - **Postpaid**：按量付费。
         * - **Prepaid**：预付费（包年包月）。
         * @example `Prepaid`
         */
        PayType: string;
        /**
         * 数据库引擎类型。当前仅支持MySQL类型。
         * @example `MySQL`
         */
        DBType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 数据库引擎版本。当前仅支持8.0版本。
         * @example `8.0`
         */
        DBVersion: string;
        /**
         * GDN中的集群ID。
         * @example `pc-wz9fb5nn44u1d****`
         */
        DBClusterId: string;
        /**
         * GDN中的集群状态。具体请参见[集群状态表](~~99286~~)。
         * @example `Running`
         */
        DBClusterStatus: string;
        /**
         * 存储空间的使用量，单位为Byte。
         * @example `3012558848`
         */
        StorageUsed: string;
        /**
         * 集群描述。
         * @example `test`
         */
        DBClusterDescription: string;
        /**
         * 集群角色。取值：
         * - **primary**：主集群
         * - **standby**：从集群
         * > 一个GDN中包含一个主集群和最多四个从集群。
         * @example `primary`
         */
        Role: string;
        /**
         * Serverless类型。当前取值固定为AgileServerless（敏态）。
         * >仅Serverless集群支持该参数。
         * @example `AgileServerless`
         */
        ServerlessType: string;
        /**
         * 数据库节点的信息详情。
         */
        DBNodes: {
            /**
             * 数据库节点规格。
             * @example `polar.mysql.x4.large`
             */
            DBNodeClass: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            /**
             * 数据库节点的创建时间。
             * @example `2020-03-23T21:35:43Z`
             */
            CreationTime: string;
            /**
             * 数据库节点的角色。取值：
             * - **Writer**：主节点
             * - **Reader**：只读节点
             * @example `Reader`
             */
            DBNodeRole: string;
            /**
             * 节点状态。取值：
             * - **Creating**：创建中
             * - **Running**：运行中
             * - **Deleting**：删除中
             * - **Rebooting**：重启中
             * - **ClassChanging**：正在变更节点规格
             * - **NetAddressCreating**：正在创建网络连接
             * - **NetAddressDeleting**：正在删除网络连接
             * - **NetAddressModifying**：正在修改网络连接
             * - **MinorVersionUpgrading**：小版本升级中
             * - **Maintaining**：集群维护中
             * - **Switching**：切换中
             * @example `Running`
             */
            DBNodeStatus: string;
            /**
             * Failover优先级。每个节点都有一个Failover优先级，决定了当故障切换时，该节点被选举为主节点的概率高低。数值越大，优先级越高，取值范围为1~15。
             * @example `1`
             */
            FailoverPriority: number;
            /**
             * 集群最大的并发连接数。
             * @example `8000`
             */
            MaxConnections: number;
            /**
             * 最大I/O请求次数，即IOPS。
             * @example `32000`
             */
            MaxIOPS: number;
            /**
             * 数据库节点ID。
             * @example `pi-****************`
             */
            DBNodeId: string;
        }[];
    }[];
    /**
     * 集群ID
     * @example `pc-bp1s826a1up******`
     */
    DBClusterId: string;
    /**
     * 资源组ID
     * @example `rg-************`
     */
    ResourceGroupId: string;
}

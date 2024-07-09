export interface DescribeGlobalDatabaseNetworksResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 本页记录数量。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `69A85BAF-1089-4CDF-A82F-0A140F******`
     */
    RequestId: string;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * GDN详情。
     */
    Items: {
        /**
         * 数据库引擎版本号，当前仅支持**8.0**版本。
         * @example `8.0`
         */
        DBVersion: string;
        /**
         * GDN ID。
         * @example `gdn-****************`
         */
        GDNId: string;
        /**
         * GDN创建时间，格式为`YYYY-MM-DDThh:mm:ssZ`（UTC时间）。
         * @example `2020-03-23T05:46:54Z`
         */
        CreateTime: string;
        /**
         * GDN状态，取值范围如下：
         * * **creating**：创建中
         * * **active**：运行中
         * * **deleting**：删除中
         * * **locked**：锁定中（此时无法对GDN下的任一集群执行任何操作）
         * * **removing_member**：从集群正在脱离GDN
         * @example `active`
         */
        GDNStatus: string;
        /**
         * GDN包含的各集群详情。
         */
        DBClusters: {
            /**
             * 集群ID。
             * @example `pc-****************`
             */
            DBClusterId: string;
            /**
             * 集群角色，取值范围如下：
             * * **primary**：主集群
             * * **standby**：从集群
             * > 一个GDN中包含一个主集群和最多四个从集群。更多信息，请参见[全球数据库网络（GDN）](~~160381~~)。
             * @example `primary`
             */
            Role: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
        /**
         * 数据库引擎类型，当前仅支持**MySQL**类型。
         * @example `MySQL`
         */
        DBType: string;
        /**
         * GDN描述。要求如下：
         * - 不能以http://或https://开头。
         * - 必须以大小写字母或中文开头。
         * - 可以包含大小写字母、中文、数字、下划线（_）或连字符（-）。
         * - 长度为2~126个字符。
         * @example `test`
         */
        GDNDescription: string;
    }[];
}

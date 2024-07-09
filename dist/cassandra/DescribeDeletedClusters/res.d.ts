export interface DescribeDeletedClustersResponse {
    /**
     * 每页记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `018F3C6E-2F9F-4181-8602-4AB4FB86F4ED`
     */
    RequestId: string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询集群总记录数。
     * @example `3`
     */
    TotalCount: number;
    Clusters: {
        /**
         * 已删除集群列表。
         */
        Cluster: {
            /**
             * 集群运行状态，可取值部分示例：
             * - Creating：创建中
             * - CreateFailed：创建失败
             * - Running：运行中
             * - Deleting：删除中
             * - DeleteFailed：删除失败
             * - Deleted：已删除
             * @example `Deleted`
             */
            Status: string;
            /**
             * 集群数据中心个数。
             * @example `1`
             */
            DataCenterCount: number;
            /**
             * 集群到期时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * @example `2019-10-09T20:29:27Z`
             */
            ExpireTime: string;
            /**
             * 付费类型，可取值：
             * - Subscription：包年包月
             * - PayAsYouGo：按量付费
             * > 按量付费实例无到期时间
             * @example `PayAsYouGo`
             */
            PayType: string;
            /**
             * 集群名称。
             * @example `Cassandra-test-wjk`
             */
            ClusterName: string;
            /**
             * 集群主版本号。
             * @example `3.11`
             */
            MajorVersion: string;
            /**
             * 集群创建时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * @example `2019-10-09T14:59:31Z`
             */
            CreatedTime: string;
            /**
             * 集群小版本号。
             * @example `3.11.5`
             */
            MinorVersion: string;
            /**
             * 集群ID。
             * @example `cds-bp1hy2ip****z46g`
             */
            ClusterId: string;
        }[];
    };
}

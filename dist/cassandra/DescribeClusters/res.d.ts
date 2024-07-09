export interface DescribeClustersResponse {
    /**
     * 每页记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `4EA95B55-58AB-469E-BD8E-5B1F9EEB1683`
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
         * 集群查询结果列表。
         */
        Cluster: {
            /**
             * 集群运行状态，取值示例：
             * - Creating：创建中
             * - CreateFailed：创建失败
             * - Running：运行中
             * - Deleting：删除中
             * - DeleteFailed：删除失败
             * - Deleted：已删除
             * @example `Running`
             */
            Status: string;
            /**
             * 集群到期时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * > 按量付费实例无到期时间
             * @example `2019-10-20T16:02:34Z`
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
             * 锁定模式。
             * - None：未锁定
             * - Expired：集群订阅到期锁定
             * - DiskFull：磁盘已满锁定
             * @example `None`
             */
            LockMode: string;
            /**
             * 小版本号。
             * @example `3.11.5`
             */
            MinorVersion: string;
            /**
             * 自动续费周期。
             * - 按月购买：则自动续费周期为 1 个月。
             * - 按年购买：则自动续费周期为 1 年（12个月）。
             * > 按量付费实例无此返回值
             * @example `12`
             */
            AutoRenewPeriod: number;
            /**
             * 数据中心个数。
             * @example `1`
             */
            DataCenterCount: number;
            /**
             * 是否自动续费，可取值：true/false
             * > 按量付费实例无此返回值
             * @example `true`
             */
            AutoRenewal: boolean;
            /**
             * 资源所在的资源组id。
             * @example `rg-xxxxxxxxxxx`
             */
            ResourceGroupId: string;
            /**
             * 集群名称。
             * @example `Cassandra-test`
             */
            ClusterName: string;
            /**
             * 主版本号。
             * @example `3.11`
             */
            MajorVersion: string;
            /**
             * 集群创建时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
             * @example `2019-09-20T16:02:34Z`
             */
            CreatedTime: string;
            /**
             * 集群ID。
             * @example `cds-bp1e4e32****z75c`
             */
            ClusterId: string;
            Tags: {
                /**
                 * 标签
                 */
                Tag: {
                    /**
                     * 标签键
                     * @example `test-key`
                     */
                    Key: string;
                    /**
                     * 标签值
                     * @example `test-value`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}

export interface DescribeClusterResponse {
    /**
     * 请求ID。
     * @example `17E2B462-5FD3-4A0C-AF13-225C66E47BD5`
     */
    RequestId: string;
    /**
     * 集群信息列表。
     */
    Cluster: {
        /**
         * 集群运行状态，可取值示例：
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
         * @example `2019-10-20T16:02:34Z`
         */
        ExpireTime: string;
        /**
         * 实例运维开始时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
         * @example `2:00Z`
         */
        MaintainStartTime: string;
        /**
         * 付费类型，可取值：
         * - Subscription：包年包月
         * - PayAsYouGo：按量付费
         * > 按量付费实例无到期时间
         * @example `PayAsYouGo`
         */
        PayType: string;
        /**
         * 实例运维结束时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
         * @example `4:00Z`
         */
        MaintainEndTime: string;
        /**
         * 锁定模式：
         * - None：未锁定
         * - Expired：集群订阅到期锁定
         * - DiskFull：磁盘已满锁定
         * @example `None`
         */
        LockMode: string;
        /**
         * 自动续费周期。
         * - 按月购买：则自动续费周期为 1 个月。
         * - 按年购买：则自动续费周期为 1 年（12个月）。
         * > 按量付费实例无到期时间
         * @example `12`
         */
        AutoRenewPeriod: number;
        /**
         * 集群小版本号。
         * @example `3.11.7`
         */
        MinorVersion: string;
        /**
         * 数据中心个数。
         * @example `1`
         */
        DataCenterCount: number;
        /**
         * 当前小版本是否为最新版本。
         * @example `true`
         */
        IsLatestVersion: boolean;
        /**
         * 是否自动续费，可取值：true/false
         * > 按量付费实例无到期时间
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
         * 长度为2-128个字符，以大小写字母或中文开头，可包含数字，‘.’，‘_’或‘-’。
         * @example `Cassandra-test`
         */
        ClusterName: string;
        ConfirmProductOffline: boolean;
        /**
         * 集群主版本号。
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
         * @example `cds-bp1b136j****5d56`
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
    };
}

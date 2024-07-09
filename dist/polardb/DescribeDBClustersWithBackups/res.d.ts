export interface DescribeDBClustersWithBackupsResponse {
    /**
     * 请求ID。
     * @example `F8529AA2-522F-4B30-B80B-8F7D39******`
     */
    RequestId: string;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页集群数量。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 集群详情。
         */
        DBCluster: {
            /**
             * 集群删除时间。
             * @example `2022-05-12T03:25:37Z`
             */
            DeletedTime: string;
            /**
             * 专有网络ID。
             * @example `vpc-******************`
             */
            VpcId: string;
            /**
             * 到期时间。
             * > 仅付费方式为Prepaid（包年包月）的集群会返回具体参数值，Postpaid（按量付费）集群则返回空值。
             * @example `2022-09-14T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 集群是否过期。
             * >仅付费方式为Prepaid（包年包月）的集群支持返该参数。
             * @example `false`
             */
            Expired: string;
            /**
             * 集群创建时间。
             * @example `2022-05-09T09:33:51Z`
             */
            CreateTime: string;
            /**
             * 节点规格。
             * @example `polar.mysql.x4.medium`
             */
            DBNodeClass: string;
            /**
             * 付费类型，取值范围如下：
             * * **Postpaid**：按量付费。
             * * **Prepaid**：预付费（包年包月）。
             * @example `Postpaid`
             */
            PayType: string;
            /**
             * 数据库引擎类型。
             * @example `MySQL`
             */
            DBType: string;
            /**
             * 集群的锁定状态，取值范围如下：
             * * **Unlock**：正常
             * * **ManualLock**：手动触发锁定
             * * **LockByExpiration**：集群过期自动锁定
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 集群删除的锁定状态，取值范围如下：
             * * **0**：未锁定，可删除集群。
             * * **1**：锁定，不可删除集群。
             * @example `0`
             */
            DeletionLock: number;
            /**
             * 数据库引擎版本。
             * @example `8.0`
             */
            DBVersion: string;
            /**
             * 集群ID。
             * @example `pc-****************`
             */
            DBClusterId: string;
            /**
             * 集群状态，取值范围如下：
             * * Creating：创建中
             * * Running：运行中
             * * Deleting：释放中
             * * Rebooting：重启中
             * * DBNodeCreating：正在增加节点
             * * DBNodeDeleting：正在删除节点
             * * ClassChanging：正在变更节点规格
             * * NetAddressCreating：正在创建网络连接
             * * NetAddressDeleting：正在删除网络连接
             * * NetAddressModifying：正在修改网络连接
             * * Deleted：已释放
             * @example `Running`
             */
            DBClusterStatus: string;
            /**
             * 集群是否已释放，取值范围如下：
             * * 1：已释放。
             * * 0：未释放。
             * @example `1`
             */
            IsDeleted: number;
            /**
             * 集群的网络类型。
             * @example `VPC`
             */
            DBClusterNetworkType: string;
            /**
             * 集群名称。
             * @example `test`
             */
            DBClusterDescription: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 集群引擎。
             * @example `POLARDB`
             */
            Engine: string;
        }[];
    };
}

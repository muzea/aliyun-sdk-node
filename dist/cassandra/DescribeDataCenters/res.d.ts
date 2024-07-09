export interface DescribeDataCentersResponse {
    /**
     * 请求ID。
     * @example `C8CA4D25-47FE-47D9-A34F-69B554A3A069`
     */
    RequestId: string;
    DataCenters: {
        /**
         * 数据中心信息列表。
         */
        DataCenter: {
            /**
             * VPC网络的ID。
             * @example `vpc-bp1qitxqe1m5r****4mng`
             */
            VpcId: string;
            /**
             * 集群运行状态，可取值部分示例：
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
             * 集群订阅到期时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
             * @example `2020-03-22T00:00:00Z`
             */
            ExpireTime: string;
            /**
             * 虚拟交换机的ID。
             * @example `vsw-bp13e9ynz3jpy****hqlm`
             */
            VswitchId: string;
            /**
             * 付费类型：
             * - Subscription：包年包月
             * - PayAsYouGo：按量付费
             * <note>按量付费实例无到期时间</note>
             * @example `Subscription`
             */
            PayType: string;
            /**
             * 磁盘存储大小（每节点，单位GB）。
             * @example `22000`
             */
            DiskSize: number;
            /**
             * 磁盘存储类型。可取值示例：
             * - cloud_ssd：SSD云盘
             * - cloud_essd：ESSD云盘
             * - cloud_efficiency：高效云盘
             * - local_ssd_pro：本地SSD盘
             * @example `local_ssd_pro`
             */
            DiskType: string;
            /**
             * 集群实例类型。可取值部分示例：
             * - cassandra.c.large：2核 4G
             * - cassandra.c.xlarge：4核 8G
             * - cassandra.c.2xlarge：8核 16G
             * @example `cassandra.c5.xlarge`
             */
            InstanceType: string;
            /**
             * 锁定模式。可取值：
             * - None：未锁定
             * - Expired：集群订阅到期锁定
             * - DiskFull：磁盘已满锁定
             * @example `None`
             */
            LockMode: string;
            /**
             * 自动续费周期
             * @example `12`
             */
            AutoRenewPeriod: number;
            /**
             * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 是否开启自动续费
             * @example `false`
             */
            AutoRenewal: boolean;
            /**
             * 集群商业ID。
             * @example `cds-bp1syjlt****q976`
             */
            CommodityInstance: string;
            /**
             * 节点数。
             * @example `2`
             */
            NodeCount: number;
            /**
             * 集群数据中心名称。
             * @example `test`
             */
            DataCenterName: string;
            /**
             * 可用区ID，可调用DescribeRegions查询，使用此参数指定要创建实例的可用区。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 集群创建时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
             * @example `2019-09-20T16:02:34Z`
             */
            CreatedTime: string;
            /**
             * 集群ID。
             * @example `cds-bp1syjlt****q976`
             */
            ClusterId: string;
            /**
             * 集群数据中心ID。
             * @example `cn-hangzhou-g`
             */
            DataCenterId: string;
        }[];
    };
}

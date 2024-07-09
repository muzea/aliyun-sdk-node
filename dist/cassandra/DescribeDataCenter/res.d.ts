export interface DescribeDataCenterResponse {
    /**
     * VPC网络的ID。
     * @example `vpc-bp1qitxqe1m5r****4mng`
     */
    VpcId: string;
    /**
     * 集群运行状态，可取值部分示例：
     * Creating：创建中
     * CreateFailed：创建失败
     * Running：运行中
     * Deleting：删除中
     * DeleteFailed：删除失败
     * Deleted：已删除
     * @example `Running`
     */
    Status: string;
    /**
     * 集群订阅到期时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
     * @example `2020-11-17T00:00:00Z`
     */
    ExpireTime: string;
    /**
     * 虚拟交换机的ID。
     * @example `vsw-bp13e9ynz3jpy****hqlm`
     */
    VswitchId: string;
    /**
     * 付费类型：
     * Subscription：包年包月
     * PayAsYouGo：按量付费
     * <note>按量付费实例无到期时间</note>
     * @example `Subscription`
     */
    PayType: string;
    /**
     * 磁盘存储大小（每节点，单位GB）。
     * @example `160`
     */
    DiskSize: number;
    /**
     * 磁盘存储类型。可取值示例：
     * cloud_ssd：SSD云盘
     * cloud_essd：ESSD云盘
     * cloud_efficiency：高效云盘
     * local_ssd_pro：本地SSD盘
     * @example `cloud_ssd`
     */
    DiskType: string;
    /**
     * 集群实例类型。可取值部分示例：
     * cassandra.c.large：2核 4G
     * cassandra.c.xlarge：4核 8G
     * cassandra.c.2xlarge：8核 16G
     * @example `cassandra.c.large`
     */
    InstanceType: string;
    /**
     * 锁定模式。可取值：
     * None：未锁定
     * Expired：集群订阅到期锁定
     * DiskFull：磁盘已满锁定
     * @example `None`
     */
    LockMode: string;
    /**
     * 付费周期，PayType（付费类型）为Subscription并且AutoRenewal（自动续费）为true时会有此结果，单位为月，取值：1-9，12，24，36 。
     * @example `1`
     */
    AutoRenewPeriod: number;
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `ap-southeast-1`
     */
    RegionId: string;
    /**
     * 是否要自动续费。当参数PayType取值Subscription时才会有此值。取值：
     * true：自动续费。
     * false：不自动续费。
     * @example `true`
     */
    AutoRenewal: boolean;
    /**
     * 请求Id。
     * @example `A4C83BDF-1DE0-41CD-9D6C-8D9FE5EB5504`
     */
    RequestId: string;
    /**
     * 集群商业ID。
     * @example `cds-t4n98w89z77*****`
     */
    CommodityInstance: string;
    /**
     * 节点数。
     * @example `2`
     */
    NodeCount: number;
    /**
     * 集群数据中心名称。
     * @example `test_name`
     */
    DataCenterName: string;
    /**
     * 可用区ID，可调用DescribeRegions查询，使用此参数指定要创建实例的可用区。
     * @example `ap-southeast-1a`
     */
    ZoneId: string;
    /**
     * 集群创建时间。格式：HH:mmZ（UTC 通用标准时，以Z来标识）。
     * @example `2020-10-16T11:27:20Z`
     */
    CreatedTime: string;
    /**
     * 集群ID。
     * @example `cds-t4n98w89z77*****`
     */
    ClusterId: string;
    /**
     * 集群数据中心ID。
     * @example `ap-southeast-1a`
     */
    DataCenterId: string;
}

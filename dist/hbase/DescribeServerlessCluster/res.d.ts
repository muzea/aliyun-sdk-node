export interface DescribeServerlessClusterResponse {
    /**
     * 实例所属的专有网络ID。
     * @example `vpc-bp120k6ixs4eoghz****`
     */
    VpcId: string;
    /**
     * 当前状态：
     * - **CREATING**：创建中。
     * - **ACTIVATION**：运行中
     * - **DELETING**：删除中。
     * - **RESTARTING**：重启中。
     * @example `ACTIVATION`
     */
    Status: string;
    /**
     * 内部地址。
     * @example `https://sh-wz91452kg946i****-lindorm-serverless-in.lindorm.rds.aliyuncs.com:443`
     */
    InnerEndpoint: string;
    /**
     * 集群创建时间。
     * @example `2019-10-12T14:40:46`
     */
    CreateTime: string;
    /**
     * 付费类型：
     * - **Prepaid**：预付费。
     * - **Postpaid**：后付费。
     * @example `Postpaid`
     */
    PayType: string;
    /**
     * 主版本。
     * @example `2.0.8`
     */
    MainVersion: string;
    /**
     * 集群锁定类型。
     * > 该参数无返回值。
     * @example `过期`
     */
    LockMode: string;
    /**
     * 是否有用户。
     * - **true**：有用户。
     * - **false**：无用户。
     * @example `false`
     */
    HasUser: string;
    /**
     * 是否高可用：
     * - **true**：高可用。
     * - **false**：非高可用。
     * @example `false`
     */
    HaType: string;
    /**
     * 请求ID。
     * @example `89F81C30-320B-4550-91DB-C37C81D2358F`
     */
    RequestId: string;
    /**
     * 小版本升级的状态：
     * - **YES**：可以升级。
     * - **NO**：不可以升级。
     * - **PENDING**：升级中。
     * @example `NO`
     */
    UpdateStatus: string;
    /**
     *  预留最大QPS大小。
     * @example `100`
     */
    ReserverMaxQpsNum: string;
    /**
     * 集群名称。
     * @example `test`
     */
    InstanceName: string;
    /**
     * 外部地址。
     * @example `https://sh-wz91452kg946i****-lindorm-serverless.lindorm.rds.aliyuncs.com:443`
     */
    OuterEndpoint: string;
    /**
     * CU大小。
     * @example `150`
     */
    CuSize: string;
    /**
     * 失效时间。
     * @example `2019-10-12T14:40:46`
     */
    ExpireTime: string;
    /**
     *  预留最小QPS大小。
     * @example `50`
     */
    ReserverMinQpsNum: string;
    /**
     * 是否续费：
     * - **true**：续费。
     * - **false**：不续费。
     * @example `false`
     */
    AutoRenew: string;
    /**
     * 节点磁盘大小，单位为G。
     * @example `200`
     */
    DiskSize: string;
    /**
     * 集群ID。
     * @example `hb-bp16f1441y6p2****`
     */
    InstanceId: string;
    /**
     * 是否开启保护。
     * @example `true`
     */
    IsDeletionProtection: string;
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp191ipotqf****`
     */
    VSwitchId: string;
    /**
     * 集群类型。
     * - **Cluster**：集群版。
     * - **Single**：单节点。
     * @example `single`
     */
    ClusterType: string;
    /**
     * 资源所在的资源组ID。
     * @example `rg-fjm2d4v7sf****`
     */
    ResourceGroupId: string;
    /**
     * 实例所属可用区ID。
     * @example `cn-hangzhou-f`
     */
    ZoneId: string;
}

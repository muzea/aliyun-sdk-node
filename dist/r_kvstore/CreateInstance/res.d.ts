export interface CreateInstanceResponse {
    /**
     * 专有网络（VPC）的ID。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    VpcId: string;
    /**
     * 每秒访问次数，此处为当前规格实例的理论值。
     * @example `100000`
     */
    QPS: number;
    /**
     * 实例的存储容量，单位：MB。
     * @example `16384`
     */
    Capacity: number;
    /**
     * Redis实例的内网连接地址。
     * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
     */
    ConnectionDomain: string;
    /**
     * 付费类型，返回值：
     * * **PrePaid**：预付费。
     * * **PostPaid**：按量付费。
     * @example `PostPaid`
     */
    ChargeType: string;
    /**
     * 网络类型，返回值：
     * * **CLASSIC**：经典网络。
     * * **VPC**：专有网络。
     * @example `VPC`
     */
    NetworkType: string;
    /**
     * 实例ID（全局唯一）。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceId: string;
    /**
     * Redis服务端口。
     * @example `6379`
     */
    Port: number;
    /**
     * 实例的详细配置。
     * @example `{\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64}`
     */
    Config: string;
    /**
     * 实例所在地域。
     * @example `cn-hongkong`
     */
    RegionId: string;
    /**
     * 预付费实例到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-01-18T16:00:00Z`
     */
    EndTime: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `5DEA3CC9-F81D-4387-8E97-CEA40F09****`
     */
    RequestId: string;
    /**
     * 节点类型，返回值：
     * * **STAND_ALONE**：单副本。
     * * **MASTER_SLAVE**：双副本。
     * @example `MASTER_SLAVE`
     */
    NodeType: string;
    /**
     * 实例连接数限制。
     * @example `10000`
     */
    Connections: number;
    /**
     * 实例带宽限制，单位：MB/s。
     * @example `32`
     */
    Bandwidth: number;
    /**
     * 实例名称。
     * @example `apitest`
     */
    InstanceName: string;
    /**
     * 实例所属的可用区的ID。
     * @example `cn-hangzhou-b`
     */
    ZoneId: string;
    /**
     * 实例的当前状态，返回值固定为Creating（创建中）。
     * @example `Creating`
     */
    InstanceStatus: string;
    /**
     * 实例的内网IP地址。
     * @example `172.16.0.10`
     */
    PrivateIpAddr: string;
    /**
     * 连接Redis的账号，默认包含一个以实例ID命名的账号。
     * @example `r-bp1zxszhcgatnx****`
     */
    UserName: string;
    /**
     * 订单id。
     * @example `2084452111111`
     */
    OrderId: number;
}

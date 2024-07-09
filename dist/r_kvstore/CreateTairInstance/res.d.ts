export interface CreateTairInstanceResponse {
    /**
     * 每秒处理的最大读写操作数，单位为次/秒，此处为当前实例规格的理论值。
     * @example `100000`
     */
    QPS: number;
    /**
     * 实例的内网连接地址。
     * @example `r-bp13ac3d047b****.tairpena.rds.aliyuncs.com`
     */
    ConnectionDomain: string;
    /**
     * 实例的付费类型，返回值：
     * - **PrePaid**：预付费。
     * - **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    ChargeType: string;
    /**
     * 实例ID。
     * @example `r-bp13ac3d047b****`
     */
    InstanceId: string;
    /**
     * 实例的端口号。
     * @example `6379`
     */
    Port: number;
    /**
     * 实例的详细配置，格式为JSON字符串。关于各参数的详细解释，请参见[参数配置说明](~~43885~~)。
     * @example `{\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"list-max-ziplist-entries\":512,\"list-max-ziplist-value\":64,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64}`
     */
    Config: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `12123216-4B00-4378-BE4B-08005BFC****`
     */
    RequestId: string;
    /**
     * 实例的最大带宽，单位：MB/s。
     * @example `96`
     */
    Bandwidth: number;
    /**
     * 实例的最大连接数。
     * @example `10000`
     */
    Connections: number;
    /**
     * 实例名称。
     * > 当传入了请求参数**InstanceName**时，本参数才会返回。
     * @example `redistest`
     */
    InstanceName: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-h`
     */
    ZoneId: string;
    /**
     * 实例当前的状态，返回值固定为**Creating**（创建中）。
     * @example `Creating`
     */
    InstanceStatus: string;
    /**
     * 任务ID。
     * @example `10****`
     */
    TaskId: string;
    /**
     * 订单ID。
     * @example `2084452111111`
     */
    OrderId: number;
}

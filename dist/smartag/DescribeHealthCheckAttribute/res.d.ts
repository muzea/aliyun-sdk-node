export interface DescribeHealthCheckAttributeResponse {
    /**
     * 健康检查的源端口。
     * > 该功能目前不支持。
     * @example `2334`
     */
    SrcPort: number;
    /**
     * 健康检查实例描述。
     * @example `hc-123`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `DDA08B78-5634-4A83-94E4-5C58FD7EBA19`
     */
    RequestId: string;
    /**
     * 健康检查的源地址。
     * @example `10.XX.XX.1`
     */
    SrcIpAddr: string;
    /**
     * 健康检查实例创建时间戳。
     * 单位：毫秒。
     * @example `1586759657000`
     */
    CreateTime: number;
    /**
     * 连续探测失败次数阈值。
     * 取值范围：**1**~**15**。
     * 默认值：**3**。
     * @example `3`
     */
    FailCountThreshold: number;
    /**
     * 健康检查的目的端口。
     * > 该功能目前不支持。
     * @example `1223`
     */
    DstPort: number;
    /**
     * 健康检查实例名称。
     * @example `bvt-test-03****`
     */
    Name: string;
    /**
     * 每次健康检查探测次数。
     * 取值范围：**1**~**20**。
     * 默认值：**1**。
     * @example `3`
     */
    ProbeCount: number;
    /**
     * 健康检查报文类型。
     * 目前仅支持**ICMP_ECHO**。
     * @example `ICMP_ECHO`
     */
    Type: string;
    /**
     * 健康检查一次探测的超时时间。
     * 取值范围：**10**~**30000**。
     * 默认值：**1000**。
     * 单位：毫秒。
     * @example `1000`
     */
    ProbeTimeout: number;
    /**
     * 健康检查实例ID。
     * @example `hc-1k4ucuq77b56x4****`
     */
    HcInstanceId: string;
    /**
     * 双向时延阈值。
     * 取值：**-1**或**1**~**5000**。
     * 默认值：**-1**，表示不配置双向时延阈值。
     * @example `300`
     */
    RttThreshold: number;
    /**
     * 健康检查配置探测间隔，一次探测未完成情况下，不会发起下一次探测。
     * 取值范围：**1000**~**60000**。
     * 默认值：**2000**。
     * 单位：毫秒。
     * @example `2000`
     */
    ProbeInterval: number;
    /**
     * 智能接入网关实例ID。
     * @example `sag-1um5x5nwhilymw****`
     */
    SmartAGId: string;
    /**
     * 时延阈值触发次数。
     * 取值范围：**1**~**15**。
     * 默认值：**3**。
     * @example `3`
     */
    RttFailThreshold: number;
    /**
     * 健康检查的目的地址。
     * @example `192.XX.XX.1`
     */
    DstIpAddr: string;
}

export interface CreateHealthCheckRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-1um5x5nwhilymw****`
     */
    "SmartAGId": string;
    /**
     * 健康检查实例名称。
     * 名称长度为2~100个字符，以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。
     * @example `hc-123`
     */
    "Name": string;
    /**
     * 健康检查实例描述。
     * 描述长度为2~256个字符，以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-)。
     * @example `hc_123`
     */
    "Description"?: string;
    /**
     * 健康检查报文类型。
     * > 目前仅支持**ICMP_ECHO**。
     * @example `ICMP_ECHO`
     */
    "Type": string;
    /**
     * 健康检查的目的地址。
     * @example `192.XX.XX.1`
     */
    "DstIpAddr": string;
    /**
     * 健康检查的目的端口。
     * >该功能目前不支持。
     * @example `1333`
     */
    "DstPort"?: number;
    /**
     * 健康检查实例的源地址。
     * @example `10.XX.XX.1`
     */
    "SrcIpAddr": string;
    /**
     * 健康检查的源端口。
     * >该功能目前不支持。
     * @example `1344`
     */
    "SrcPort"?: number;
    /**
     * 健康检查探测间隔，一次探测未完成情况下，不会发起下一次探测。
     * 取值范围：**1000**~**60000**。
     * 默认值：**2000**。
     * 单位：毫秒。
     * @example `2000`
     */
    "ProbeInterval"?: number;
    /**
     * 每次健康检查探测次数。
     * 取值范围：**1**~**20**。
     * 默认值：**1**。
     * @example `1`
     */
    "ProbeCount"?: number;
    /**
     * 一次探测的超时时间。
     * 取值范围：**10**~**30000**。
     * 默认值：**1000**。
     * 单位：毫秒。
     * @example `1000`
     */
    "ProbeTimeout"?: number;
    /**
     * 双向时延阈值。
     * 取值范围：**-1**或**1**~**5000**。
     * 默认值：**-1**，表示不设置双向时延阈值。
     * 单位：毫秒。
     * @example `1000`
     */
    "RttThreshold"?: number;
    /**
     * 时延阈值触发次数。
     * 取值范围：**1**~**15**。
     * 默认值：**3**。
     * @example `3`
     */
    "RttFailThreshold"?: number;
    /**
     * 连续探测失败次数阈值。
     * 取值范围：**1~15**。
     * 默认值：**3**。
     * @example `3`
     */
    "FailCountThreshold"?: number;
}

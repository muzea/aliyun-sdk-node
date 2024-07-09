export interface ModifyHealthCheckRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 健康检查实例ID。
     * @example `hc-k9id4loo3lup57****`
     */
    "HcInstanceId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-i0e85k06v1mzpo****`
     */
    "SmartAGId": string;
    /**
     * 健康检查实例名称。
     * 长度为2~100个字符，以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。
     * @example `sss333`
     */
    "Name"?: string;
    /**
     * 健康检查实例描述。
     * 描述长度为2~256个字符，以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-)。
     * @example `健康检查实例1`
     */
    "Description"?: string;
    /**
     * 健康检查的报文类型，目前仅支持**ICMP_ECHO**。
     * @example `ICMP_ECHO`
     */
    "Type"?: string;
    /**
     * 健康检查的目的地址。
     * @example `192.XX.XX.1`
     */
    "DstIpAddr"?: string;
    /**
     * 健康检查的目的端口。
     * >该功能目前不支持。
     * @example `2233`
     */
    "DstPort"?: number;
    /**
     * 健康检查的源地址。
     * @example `192.XX.XX.1`
     */
    "SrcIpAddr"?: string;
    /**
     * 健康检查的源端口。
     * >该功能目前不支持。
     * @example `3333`
     */
    "SrcPort"?: number;
    /**
     * 健康检查配置探测间隔，一次探测未完成情况下，不会发起下一次探测。
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
     * 健康检查一次探测的超时时间。
     * 取值范围：**10**~**30000**。
     * 默认值：**3000**。
     * 单位：毫秒。
     * @example `3000`
     */
    "ProbeTimeout"?: number;
    /**
     * 时延告警阈值。
     * 取值范围：**-1**或**1**~**5000**。
     * 默认值：**-1**，表示不设置时延告警阈值。
     * 单位：毫秒。
     * @example `3`
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
     * 连续探测失败数阈值。
     * 取值范围：**1**~**15**。
     * 默认值：**3**。
     * @example `3`
     */
    "FailCountThreshold"?: number;
}

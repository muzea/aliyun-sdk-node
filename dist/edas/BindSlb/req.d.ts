export interface BindSlbRequest {
    /**
     * EDAS应用ID。
     * @example `3616cdca-*********`
     */
    "AppId": string;
    /**
     * SLB实例ID。
     * @example `lb-wz96ph63r************`
     */
    "SlbId": string;
    /**
     * SLB IP地址。
     * @example `192.16*.*.*`
     */
    "SlbIp": string;
    /**
     * SLB网络类型，取值如下：
     * * internet：外网实例。
     * * intranet：内网实例。
     * @example `intranet`
     */
    "Type": string;
    /**
     * 监听端口。
     * @example `80`
     */
    "ListenerPort"?: number;
    /**
     * 内网 SLB 虚拟服务器组 ID
     * @example `rsp-cige6******`
     */
    "VServerGroupId"?: string;
}

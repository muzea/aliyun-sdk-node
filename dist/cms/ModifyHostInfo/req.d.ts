export interface ModifyHostInfoRequest {
    /**
     * 实例ID。仅支持非阿里云主机。
     * @example `host-R_NSWNV****`
     */
    "InstanceId": string;
    /**
     * 主机名称。
     * @example `portalHost`
     */
    "HostName"?: string;
}

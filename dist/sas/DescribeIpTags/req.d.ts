export interface DescribeIpTagsRequest {
    /**
     * 告警事件中的 IP 地址。
     * @example `192.168.XX.XX`
     */
    "Ip": string;
    /**
     * 告警事件的ID。
     * @example `11`
     */
    "SecurityEventId": string;
}

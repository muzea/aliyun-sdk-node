export interface DescribeSecurityIpsRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 是否展示DAS白名单信息。
     * @example `true`
     */
    "ShowHDMIps"?: boolean;
}

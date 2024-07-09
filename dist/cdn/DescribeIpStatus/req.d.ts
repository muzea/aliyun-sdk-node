export interface DescribeIpStatusRequest {
    /**
     * 需要查询的IP地址列表，最多支持批量查询20个IP地址，IP地址之间使用下划线_分隔，如：ip1_ip2_ip3。
     * @example `192.168.0.1_10.10.10.1`
     */
    "Ips": string;
}

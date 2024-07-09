export interface DescribeInstanceIdsResponse {
    /**
     * 本次请求的ID。
     * @example `310A41FD-0990-5610-92E0-A6A55D7C6444`
     */
    RequestId: string;
    /**
     * DDoS高防实例的ID、版本、备注、IP类型信息。
     */
    InstanceIds: {
        /**
         * 实例的IP转发模式。取值：
         * - **fnat**：表示源站和客户端的IP版本一致，即IPv4地址客户端请求转发到IPv4地址源站、IPv6地址客户端请求转发到IPv6地址源站。
         * - **v6tov4**：表示IPv6和IPv4地址客户端请求都转发到IPv4地址源站。
         * @example `fnat`
         */
        IpMode: string;
        /**
         * 实例的类型。取值：
         * - **0**：表示DDoS高防（非中国内地）保险版。
         * - **1**：表示DDoS高防（非中国内地）无忧版。
         * - **2**：表示DDoS高防（非中国内地）加速线路。
         * - **3**：表示DDoS高防（非中国内地）安全加速线路。
         * - **9**：表示DDoS高防（中国内地）专业版。
         * @example `9`
         */
        Edition: number;
        /**
         * 实例ID。
         * @example `ddoscoo-cn-zvp2eibz****`
         */
        InstanceId: string;
        /**
         * 实例的IP协议版本。取值：
         * - **Ipv4**：表示 IPv4版本。
         * - **Ipv6**：表示 IPv6版本。
         * @example `Ipv4`
         */
        IpVersion: string;
        /**
         * 实例的备注。
         * @example `test`
         */
        Remark: string;
    }[];
}

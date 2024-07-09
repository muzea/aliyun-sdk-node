export interface DescribeMonitoringAgentHostsResponse {
    /**
     * 请求ID。
     * @example `63EEBB2A-9E51-41E4-9E83-5DE7F3B292E0`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 分页页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页数。
     * @example `50`
     */
    PageTotal: number;
    /**
     * 总记录条数。
     * @example `10`
     */
    Total: number;
    Hosts: {
        /**
         * 主机列表。
         */
        Host: {
            /**
             * 主机序列号。非阿里云主机无实例ID，有SerialNumber。
             * >该参数可用于精准查找监控的任何一台主机。
             * @example `x12335-6cc8-4a22-9f21-1a00a719****`
             */
            SerialNumber: string;
            /**
             * NAT IP地址。
             * @example `192.168.XX.XX`
             */
            NatIp: string;
            /**
             * 主机名称。
             * @example `hostIP`
             */
            HostName: string;
            /**
             * 阿里云账号ID。
             * @example `103201326074****`
             */
            AliUid: number;
            /**
             * 网络类型。
             * @example `vpc`
             */
            NetworkType: string;
            /**
             * 实例ID。
             * @example `i-a2d5q7pm3f9yr212****`
             */
            InstanceId: string;
            /**
             * 是否为阿里云主机。取值：
             * - true：是。
             * - false：否。
             * @example `true`
             */
            isAliyunHost: boolean;
            /**
             * EIP的IP地址。
             * @example `192.168.XX.XX`
             */
            EipAddress: string;
            /**
             * 插件版本。
             * @example `3.4.6`
             */
            AgentVersion: string;
            /**
             * 主机IP地址。
             * >多个IP地址之前用半角逗号（,）分隔。
             * @example `192.168.XX.XX`
             */
            IpGroup: string;
            /**
             * EIP的ID。
             * @example `eip-bp16i16k9gcezyfrp****`
             */
            EipId: string;
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * ECS实例规格。
             * @example `ecs.n4`
             */
            InstanceTypeFamily: string;
            /**
             * 操作系统。
             * @example `Linux`
             */
            OperatingSystem: string;
        }[];
    };
}

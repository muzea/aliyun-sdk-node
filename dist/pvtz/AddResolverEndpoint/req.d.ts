export interface AddResolverEndpointRequest {
    /**
     * 终端节点名称，最长20个字符，超过限制会报错。
     * @example `endpoint-test-name`
     */
    "Name": string;
    /**
     * 出站VPC所在regionID
     * @example `cn-hangzhou`
     */
    "VpcRegionId": string;
    /**
     * 出站VPC ID
     * @example `vpc-129343jslslsks`
     */
    "VpcId": string;
    /**
     * 安全组ID
     * @example `kqlqlqjqqkq`
     */
    "SecurityGroupId": string;
    /**
     * 出站流量源IP地址（为了保证高可用，至少添加2个，最多可添加6个）
     */
    "IpConfig": {
        /**
         * 交换机ID
         * @example `sjqkql`
         */
        VSwitchId: string;
        /**
         * 子网掩码；交换机的IPv4网段
         * @example `172.16.0.0/24`
         */
        CidrBlock: string;
        /**
         * 可用区ID
         * @example `cn-hangzhou-a`
         */
        AzId: string;
        /**
         * 子网掩码参数范围内的IP地址。
         * @example `172.16.xx.xx`
         */
        Ip: string;
    }[];
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
}

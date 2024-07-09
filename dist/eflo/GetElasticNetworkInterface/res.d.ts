export interface GetElasticNetworkInterfaceResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 可用区ID
         * @example `cn-wulanchabu-b`
         */
        ZoneId: string;
        /**
         * 灵骏弹性网卡ID
         * @example `leni-1234****`
         */
        ElasticNetworkInterfaceId: string;
        /**
         * 灵骏节点ID
         * @example `e01-cn-lbj3aej****`
         */
        NodeId: string;
        /**
         * 状态
         * @example `Available`
         */
        Status: string;
        /**
         * 弹性网卡IP
         * @example `203.107.****`
         */
        Ip: string;
        /**
         * 云上VPC ID
         * @example `vpc-j6ctp4n75306****`
         */
        VpcId: string;
        /**
         * 交换机ID
         * @example `vsw-uf6u8473r84e9****`
         */
        VSwitchId: string;
        /**
         * 错误信息
         * @example `成功`
         */
        Message: string;
        /**
         * mac地址
         * @example `00:22:6D:97:**:**`
         */
        Mac: string;
        /**
         * 网卡类型
         * @example `DEFAULT`
         */
        Type: string;
        /**
         * vswitch网关地址
         * @example `172.16.****`
         */
        Gateway: string;
        /**
         * vswitch掩码位
         * @example `24`
         */
        Mask: string;
        /**
         * 创建时间
         * @example `1672971789000`
         */
        CreateTime: string;
        /**
         * 修改时间
         * @example `1672971789000`
         */
        GmtModified: string;
        /**
         * 描述信息
         * @example `描述`
         */
        Description: string;
        /**
         * 辅助私网IP
         */
        PrivateIpAddresses: {
            /**
             * 灵骏弹性网卡ID
             * @example `leni-1234****`
             */
            ElasticNetworkInterfaceId: string;
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 创建时间
             * @example `1672971789000`
             */
            GmtCreate: string;
            /**
             * 更新时间
             * @example `1672971789000`
             */
            GmtModified: string;
            /**
             * 灵骏弹性网卡辅助私网IP唯一标识
             * @example `sip-ywz****`
             */
            IpName: string;
            /**
             * 灵骏弹性网卡辅助私网IP地址
             * @example `172.16.****`
             */
            PrivateIpAddress: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * 描述信息
             * @example `描述`
             */
            Description: string;
            /**
             * 返回信息
             * @example `成功`
             */
            Message: string;
        }[];
        /**
         * 安全组ID
         * @example `sg-0jl5s4p4laalruk7****`
         */
        SecurityGroupId: string;
    };
}

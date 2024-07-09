export interface ListElasticNetworkInterfacesResponse {
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
     * 当次请求的Request ID
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总记录数
         * @example `100`
         */
        Total: number;
        /**
         * 灵骏弹性网卡信息列表
         */
        Data: {
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
             * 节点ID
             * @example `e01-cn-uax37m1****`
             */
            NodeId: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * IP地址
             * @example `10.0.0.13`
             */
            Ip: string;
            /**
             * 专有网络ID
             * @example `vpc-f8ziirfl9k25h2qn7****`
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
             * @example `E0:01:A6:4A:6A:D0`
             */
            Mac: string;
            /**
             * 网卡类型，默认类型 DEFAULT 不可手动释放
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
             * @example `1601176751000`
             */
            CreateTime: string;
            /**
             * 修改时间
             * @example `1640187007000`
             */
            GmtModified: string;
            /**
             * 描述信息
             * @example `描述`
             */
            Description: string;
            /**
             * 安全组ID
             */
            SecurityGroupId: string;
        }[];
    };
}

export interface ListGatewayIntranetLinkedVpcResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 私有网关ID。
     * @example `gw-1uhcqmsc7x22******`
     */
    GatewayId: string;
    /**
     * 内网访问端点列表。
     */
    IntranetLinkedVpcList: {
        /**
         * IP地址。
         * @example `192.168.10.11
        `
         */
        Ip: string;
        /**
         * 状态。可能值为：
         * - Creating：创建中。
         * - Running：运行中。
         * @example `Running`
         */
        Status: string;
        /**
         * 专有网络的ID。
         * @example `vpc-2zetuli9ws0qgjd******`
         */
        VpcId: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-8vb2qjoiio6m9pg******`
         */
        VSwitchId: string;
        /**
         * 安全组ID。
         * @example `sg-2ze4pgstgszvgq******`
         */
        SecurityGroupId: string;
    }[];
}

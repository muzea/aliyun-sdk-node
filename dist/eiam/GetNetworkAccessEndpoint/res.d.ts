export interface GetNetworkAccessEndpointResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 网络端点信息。
     */
    NetworkAccessEndpoint: {
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 专属网络端点ID。
         * @example `nae_examplexxx`
         */
        NetworkAccessEndpointId: string;
        /**
         * 专属网络端点名称。
         * @example `xx业务VPC访问端点`
         */
        NetworkAccessEndpointName: string;
        /**
         * 专属网络端点连接的VPC ID。
         * @example `vpc-examplexxx`
         */
        VpcId: string;
        /**
         * 专属网络端点连接的VPC所属地域。
         * @example `cn-hangzhou`
         */
        VpcRegionId: string;
        /**
         * 专属网络端点连接的指定vSwitch列表。
         * @example `vsw-examplexxx`
         */
        VSwitchIds: string[];
        /**
         * 专属网络端点使用的安全组ID。
         * @example `sg-examplexxx`
         */
        SecurityGroupId: string;
        /**
         * 网络端点的状态，取值可选范围：
         * - pending：待初始化。
         * - creating：创建中。
         * - running：运行中。
         * - deleting：删除中。
         * @example `running`
         */
        Status: string;
        /**
         * 网络端点的类型，取值可选范围：
         * - shared：共享网络端点。
         * - private：专属网络端点。
         * @example `private`
         */
        NetworkAccessEndpointType: string;
        /**
         * 共享网络端点公网出口IP地址段，当且仅当NetworkEndpointType为共享网络端点（shared）时有返回值。
         * @example `8.xx.xx.xxx/27`
         */
        EgressPublicIpAddresses: string[];
        /**
         * 专属网络端点公网出口IP地址段，当且仅当NetworkEndpointType为专属网络端点（private）时有返回值。
         * @example `172.168.x.x`
         */
        EgressPrivateIpAddresses: string[];
        /**
         * 网络端点创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        CreateTime: number;
        /**
         * 专属网络端点最近更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        UpdateTime: number;
    };
}

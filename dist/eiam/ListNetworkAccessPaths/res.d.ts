export interface ListNetworkAccessPathsResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 网络端点访问路径列表。
     */
    NetworkAccessPaths: {
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
         * 专属网络端点访问路径ID。
         * @example `nap_examplexxx`
         */
        NetworkAccessPathId: string;
        /**
         * 专属网络端点访问路径使用的ENI ID。
         * @example `eni-examplexxx`
         */
        NetworkInterfaceId: string;
        /**
         * 专属网络端点访问路径的ENI归属的交换机ID。
         * @example `vsw-examplexxx`
         */
        VSwitchId: string;
        /**
         * 专属网络端点访问路径使用的ENI私网地址。
         * @example `cn-hangzhou`
         */
        PrivateIpAddress: string;
        /**
         * 专属网络端点访问路径状态，取值可选范围：
         *
         * - pending：待初始化。
         * - creating：创建中。
         * - running：运行中。
         * - deleting：删除中。
         * @example `running`
         */
        Status: string;
        /**
         * 专属网络端点访问路径创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        CreateTime: number;
        /**
         * 专属网络端点访问路径最近更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        UpdateTime: number;
    }[];
}

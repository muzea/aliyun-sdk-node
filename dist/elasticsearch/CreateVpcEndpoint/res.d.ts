export interface CreateVpcEndpointResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 返回结果详情。
     */
    Result: {
        /**
         * 终端节点关联的用户终端节点服务的ID。
         * @example `epsrv-bp1w0p3jdirbfmt6****`
         */
        serviceId: string;
        /**
         * 终端节点域名，用于连接配置。
         * @example `ep-bp1tah7zbrwmkjef****.epsrv-bp1w0p3jdirbfmt6****.cn-hangzhou.privatelink.aliyuncs.com`
         */
        endpointDomain: string;
        /**
         * 服务VPC侧终端节点ID。
         * @example `ep-bp1tah7zbrwmkjef****`
         */
        endpointId: string;
        /**
         * 服务VPC侧终端节点名称。
         * @example `vpcElasticSearchABC`
         */
        endpointName: string;
    };
}

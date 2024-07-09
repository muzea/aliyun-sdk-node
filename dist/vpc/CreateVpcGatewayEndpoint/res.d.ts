export interface CreateVpcGatewayEndpointResponse {
    /**
     * 请求ID。
     * @example `62CFC815-E08A-5CF4-92D1-54273EC9E406`
     */
    RequestId: string;
    /**
     * 网关终端节点实例ID。
     * @example `vpce-bp1w1dmdqjpwul0v3****`
     */
    EndpointId: string;
    /**
     * 终端节点服务名称。
     * @example `com.aliyun.cn-hangzhou.oss`
     */
    ServiceName: string;
    /**
     * 网关终端节点的名称。
     * @example `test`
     */
    EndpointName: string;
    /**
     * 网关终端节点的创建时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-08-27T01:58:37Z`
     */
    CreationTime: string;
    /**
     * 网关终端节点所属的资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    ResourceGroupId: string;
}

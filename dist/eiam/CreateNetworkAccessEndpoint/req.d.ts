export interface CreateNetworkAccessEndpointRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 专属网络端点名称。
     * @example `xx业务VPC访问端点`
     */
    "NetworkAccessEndpointName": string;
    /**
     * 专属网络端点连接的VPC ID。
     * @example `vpc-examplexxx`
     */
    "VpcId": string;
    /**
     * 专属网络端点连接的VPC ID所属地域。
     * @example `cn-hangzhou`
     */
    "VpcRegionId": string;
    /**
     * 专属网络端点连接的指定vSwitch列表。
     * @example `vsw-examplexxx`
     */
    "VSwitchIds"?: string[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参考文档《[如何保证幂等性](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence)》。
     * @example `client-token-example`
     */
    "ClientToken"?: string;
}

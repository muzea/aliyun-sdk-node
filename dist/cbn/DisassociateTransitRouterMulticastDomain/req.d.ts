export interface DisassociateTransitRouterMulticastDomainRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 组播域ID。
     * @example `tr-mcast-domain-91wpg6wbhchjeq****`
     */
    "TransitRouterMulticastDomainId": string;
    /**
     * VPC连接ID。
     * 本参数为交换机所属的专有网络VPC（Virtual Private Cloud）被连接至转发路由器实例后生成的VPC连接的ID。
     * @example `tr-attach-g3kz2k3u76amsk****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会解除交换机和组播域的关联关系。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接解除交换机和组播域的关联关系。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 交换机ID列表。
     */
    "VSwitchIds"?: string[];
}

export interface ListTransitRouterMulticastDomainAssociationsRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
    /**
     * 组播域ID。
     * @example `tr-mcast-domain-91wpg6wbhchjeq****`
     */
    "TransitRouterMulticastDomainId"?: string;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-p90y3ymbbwuvy5****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 交换机ID列表。
     */
    "VSwitchIds"?: string[];
    /**
     * 组播域关联的资源类型。
     * 仅取值：**VPC**。
     * @example `VPC`
     */
    "ResourceType"?: string;
    /**
     * 组播域关联的资源的ID。
     * @example `vpc-p0w9alkte4w2htrqe****`
     */
    "ResourceId"?: string;
    /**
     * 分批次查询时每次显示的条目数。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
}

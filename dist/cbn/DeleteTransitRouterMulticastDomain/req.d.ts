export interface DeleteTransitRouterMulticastDomainRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
    /**
     * 组播域ID。
     * @example `tr-mcast-domain-40cwj0rgzgdtam****`
     */
    "TransitRouterMulticastDomainId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除组播域。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接删除组播域。
     * @example `false`
     */
    "DryRun"?: boolean;
}

export interface UpdateTransitRouterVpnAttachmentAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改VPN连接的配置。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改VPN连接的配置。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * VPN连接ID。
     * @example `tr-attach-a6p8voaodog5c0****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * VPN连接的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * VPN连接新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * 是否允许转发路由器实例自动向IPsec连接发布路由条目。取值：
     * - **true**：允许。
     * - **false**：不允许。
     * @example `true`
     */
    "AutoPublishRouteEnabled"?: boolean;
}

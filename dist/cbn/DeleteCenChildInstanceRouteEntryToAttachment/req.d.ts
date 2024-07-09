export interface DeleteCenChildInstanceRouteEntryToAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接删除网络实例的路由条目。
     * - **true**：发送检查请求，只进行校验，不会删除网络实例的路由条目。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * > 当前参数暂不生效。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云企业网实例ID。
     * @example `cen-wgcl0ik5o8jakq****`
     */
    "CenId": string;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-r1qhupkc19iadz****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 网络实例的路由表ID。
     * @example `vtb-bp1osd9opvegfpowc****`
     */
    "RouteTableId": string;
    /**
     * 路由条目的目标网段。
     * @example `10.0.1.0/24`
     */
    "DestinationCidrBlock": string;
}

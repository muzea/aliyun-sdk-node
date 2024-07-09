export interface DeleteTransitRouteTableAggregationRequest {
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-6ehgc262hr170qgyc****`
     */
    "TransitRouteTableId": string;
    /**
     * 聚合路由的目标网段。
     * @example `192.168.10.0/24`
     */
    "TransitRouteTableAggregationCidr": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次删除请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，通过检查后直接删除聚合路由。
     * - **true**：发送检查请求，只进行校验，不会删除聚合路由。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
}

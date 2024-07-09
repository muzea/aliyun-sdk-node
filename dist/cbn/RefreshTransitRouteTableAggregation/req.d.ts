export interface RefreshTransitRouteTableAggregationRequest {
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-iq8qgruq1ry8jc7vt****`
     */
    "TransitRouteTableId": string;
    /**
     * 聚合路由的目标网段。
     * @example `192.168.53.0/24`
     */
    "TransitRouteTableAggregationCidr": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
}

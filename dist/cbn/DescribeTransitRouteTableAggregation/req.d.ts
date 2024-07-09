export interface DescribeTransitRouteTableAggregationRequest {
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-6ehgc262hr170qgyc****`
     */
    "TransitRouteTableId": string;
    /**
     * 聚合路由的目标网段。
     * @example `192.168.10.0/24`
     */
    "TransitRouteTableAggregationCidr"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
}

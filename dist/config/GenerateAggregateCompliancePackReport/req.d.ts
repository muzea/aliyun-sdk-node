export interface GenerateAggregateCompliancePackReportRequest {
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListAggregateCompliancePacks](~~262059~~)。
     * @example `cp-fdc8626622af00f9****`
     */
    "CompliancePackId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-f632626622af0079****`
     */
    "AggregatorId": string;
}

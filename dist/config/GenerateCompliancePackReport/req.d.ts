export interface GenerateCompliancePackReportRequest {
    /**
     * 合规包ID。
     * 关于如何获取合规包ID，请参见[ListCompliancePacks](~~263332~~)。
     * @example `cp-a8a8626622af0082****`
     */
    "CompliancePackId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `AAAAAdDWBF2****`
     */
    "ClientToken"?: string;
}

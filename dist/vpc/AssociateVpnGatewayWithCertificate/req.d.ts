export interface AssociateVpnGatewayWithCertificateRequest {
    /**
     * VPN网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VPN网关实例ID。
     * >仅国密型VPN网关支持绑定证书。
     * @example `vpn-bp1q8bgx4xnkm2ogj****`
     */
    "VpnGatewayId": string;
    /**
     * 证书类型。取值：
     * - **Encryption**：表示指定SSL证书为加密证书。
     * - **Signature**：表示指定SSL证书为签名证书。
     * @example `Signature`
     */
    "CertificateType": string;
    /**
     * 证书ID。
     * @example `6bfe4218-ea1d****`
     */
    "CertificateId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：表示只预检此次请求合法性，不会进行绑定操作。检查项包括是否填写了必需参数、请求格式、实例状态等。如果检查不通过，则返回对应错误；如果检查通过，则返回对应请求ID。
     * - **false**（默认值）：表示发送正常请求，通过检查后直接将VPN网关和证书进行绑定。
     * @example `false`
     */
    "DryRun"?: boolean;
}

export interface DescribeCdnCertificateDetailByIdRequest {
    /**
     * 证书ID。
     * @example `12345`
     */
    "CertId": string;
    /**
     * 证书Region。取值：
     * - **ap-southeast-1**（新加坡）
     * -  **cn-hangzhou**（杭州）
     * 默认值为**cn-hangzhou**。
     * @example `cn-hangzhou
    `
     */
    "CertRegion"?: string;
}

export interface SetDcdnDomainSSLCertificateRequest {
    /**
     * 证书所属的服务域名，需属于HTTPS加速类型。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 证书名称，目前只支持单个证书名称，只有**CertType**=**upload**时生效。
     * **CertType**=**upload**时选填，给新证书的名称。
     * @example `yourCertName`
     */
    "CertName"?: string;
    /**
     * 证书ID，只有**CertType**=**cas**时生效。
     * **CertType**=**cas**时必填，表示选择已有证书。
     * @example `8089870`
     */
    "CertId"?: number;
    /**
     * 证书类型。
     * - **upload**：上传证书。
     * - **cas**：证书中心证书。
     * @example `upload`
     */
    "CertType"?: string;
    /**
     * HTTPS证书是否启用。
     * - **on**：启用。
     * - **off**：不启用。
     * @example `off`
     */
    "SSLProtocol": string;
    /**
     * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
     * @example `xxx`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
     * @example `y****`
     */
    "SSLPri"?: string;
    /**
     * 证书所在地域，只有**CertType**=**cas**时生效。支持**cn-hangzhou**和**ap-southeast-1**，默认**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "CertRegion"?: string;
    /**
     * 是否灰度下发证书。
     * 取值：**staging**：灰度下发证书。
     * 不传或者传任何其他值，都是正式下发证书。
     * @example `staging`
     */
    "Env"?: string;
}

export interface SetLiveDomainCertificateRequest {
    /**
     * 指定证书所属加速域名。属于`https`加速类型。
     * @example `developer.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 证书名称。
     * @example `Cert-****`
     */
    "CertName"?: string;
    /**
     * 证书类型。取值：
     * - **upload**：上传证书。
     * - **cas**：证书中心证书。
     * - **free**：免费证书。
     * @example `free`
     */
    "CertType"?: string;
    /**
     * HTTPS证书是否启用。取值：
     * - **on**：启用。如果取值为**on**，则必须同时设置请求参数SSLPub和SSLPri。
     * - **off**（默认值）：不启用。
     * @example `off`
     */
    "SSLProtocol": string;
    /**
     * 公钥内容。
     * > 当SSLProtocol取值为on时，本参数才必填。
     * @example `****`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容。
     * > 当SSLProtocol取值为on时，本参数才必填。
     * @example `****`
     */
    "SSLPri"?: string;
    /**
     * 忽略证书名称重复的校验，覆盖原有同名证书信息。固定取值：**1**。
     * @example `1`
     */
    "ForceSet"?: string;
}

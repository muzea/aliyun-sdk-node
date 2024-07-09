export interface SetDomainCertificateRequest {
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    "DomainName": string;
    /**
     * SSL证书名称
     * @example `test_cert`
     */
    "CertificateName": string;
    /**
     * 证书内容
     * @example `请参见如下请求示例
    -----BEGIN RSA PRIVATE KEY-----
    MIIEpAIBAAKCAQEA8GjIleJ7rlo86mtbwcDnUfqzTQAm4b3zZEo1aKsfAuwcvCud
    ....
    -----END RSA PRIVATE KEY-----`
     */
    "CertificateBody"?: string;
    /**
     * 证书私钥
     * @example `请参见如下请求示例
    -----BEGIN RSA PRIVATE KEY-----
    MIIEpAIBAAKCAQEA8GjIleJ7rlo86mtbwcDnUfqzTQAm4b3zZEo1aKsfAuwcvCud
    ....
    -----END RSA PRIVATE KEY-----`
     */
    "CertificatePrivateKey"?: string;
    /**
     * CA 证书内容
     * @example `CA证书的编码内容`
     */
    "CaCertificateBody"?: string;
    /**
     * 证书验证深度
     * @example `2`
     */
    "SslVerifyDepth"?: string;
}

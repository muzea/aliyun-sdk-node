export interface AttachWebHostingCertificateRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 自定义域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 证书类型，可取值为：
     * - upload：上传证书。
     * - cas：已有证书。
     * @example `upload`
     */
    "CertType": string;
    /**
     * 证书名称。
     * @example `testCert`
     */
    "CertName"?: string;
    /**
     * 证书内容。
     * @example `-----BEGIN CERTIFICATE-----  ...... -----END CERTIFICATE-----`
     */
    "ServerCertificate": string;
    /**
     * 证书私钥。
     * @example `-----BEGIN RSA PRIVATE KEY----- ...... -----END RSA PRIVATE KEY-----`
     */
    "PrivateKey": string;
}

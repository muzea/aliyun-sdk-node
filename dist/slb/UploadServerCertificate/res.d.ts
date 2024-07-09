export interface UploadServerCertificateResponse {
    /**
     * 阿里云签发证书名称。
     * @example `cloudcertificate****`
     */
    AliCloudCertificateName: string;
    /**
     * 证书创建的时间戳。
     * @example `1504147745000`
     */
    CreateTimeStamp: number;
    /**
     * 证书过期时间。
     * @example `2022-10-18T23:59:59Z`
     */
    ExpireTime: string;
    /**
     * 证书创建时间。
     * @example `2022-02-21T02:49:05Z`
     */
    CreateTime: string;
    /**
     * 服务器证书ID。
     * @example `1321932713******_17f1b4b696b_1114720822_-1671******`
     */
    ServerCertificateId: string;
    /**
     * 证书过期的时间戳。
     * @example `1504147745000`
     */
    ExpireTimeStamp: number;
    /**
     * 服务器证书部署的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 服务器证书的指纹。
     * @example `8f:7d:cb:e5:f8:c8:33:9c:17:65:c1:92:30:9e:45:55:9c:3a:85:60`
     */
    Fingerprint: string;
    /**
     * 非阿里云签发的服务器证书的名称。
     * @example `mycert01`
     */
    ServerCertificateName: string;
    /**
     * 域名，对应证书的`Common Name`字段。
     * @example `example.com`
     */
    CommonName: string;
    /**
     * 资源组ID。
     * @example `rg-atstuj3rt****`
     */
    ResourceGroupId: string;
    /**
     * 阿里云签发证书ID。
     * @example `775****`
     */
    AliCloudCertificateId: string;
    /**
     * 是否为阿里云证书服务中的证书。
     * - **0**：不是阿里云证书。
     * - **1**：是阿里云证书。
     * @example `0`
     */
    IsAliCloudCertificate: number;
    SubjectAlternativeNames: {
        /**
         * 返回证书的备用域名列表。
         */
        SubjectAlternativeName: string[];
    };
}

export interface DescribeCertificateResponse {
    /**
     * 证书的状态信息，取值：
     * - PENDING：等待导入。
     * - ACTIVE：已启用。
     * - INACTIVE：已禁用。
     * - REVOKED：已吊销。
     * @example `ACTIVE`
     */
    Status: string;
    /**
     * 证书序列号。
     * @example `12345678`
     */
    Serial: string;
    /**
     * 证书的创建时间。
     * @example `2020-10-13T03:05:03Z`
     */
    CreatedAt: string;
    /**
     * 证书对应的标签。
     * @example `[{\"TagKey\":\"S1key1\",\"TagValue\":\"S1val1\"},{\"TagKey\":\"S1key2\",\"TagValue\":\"S2val2\"}]`
     */
    Tags: any;
    /**
     * 主体公钥识别符。
     * @example `79 36 26 DE 9F F5 15 E3 56 DC ****`
     */
    SubjectKeyIdentifier: string;
    /**
     * 证书密钥是否支持导出。取值：
     * - true（默认值）：支持导出。
     * - false：不支持导出。
     * @example `true`
     */
    ExportablePrivateKey: boolean;
    /**
     * 证书的签发者信息，使用限定名DN（Distinguished Names）形式标识。
     * @example `CN=testCA,OU=kms,O=aliyun,C=CN`
     */
    Issuer: string;
    /**
     * 证书签名算法，取值：
     * - RSA2048-SHA256
     * - ECDSA-SHA256
     * - SM2-SM3
     * @example `ECDSA-SHA256`
     */
    SignatureAlgorithm: string;
    /**
     * 证书有效期的截止时间。
     * @example `2022-10-13T03:09:00Z`
     */
    NotAfter: string;
    /**
     * 证书ARN。
     * @example `acs:kms:cn-hangzhou:159498693826****:certificate/9a28de48-8d8b-484d-a766-dec4****"`
     */
    Arn: string;
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `9a28de48-8d8b-484d-a766-dec4****`
     */
    CertificateId: string;
    /**
     * 请求ID。
     * @example `edb671a3-c5a1-4ebe-a1de-d748b640bdf2`
     */
    RequestId: string;
    /**
     * 密钥类型。
     * @example `RSA_2048`
     */
    KeySpec: string;
    /**
     * 证书中的公钥。
     * @example `-----BEGIN PUBLIC KEY----- MIIBIjA -----END PUBLIC KEY-----`
     */
    SubjectPublicKey: string;
    /**
     * 证书主体（拥有者） ，采用DN标识。
     *
     * @example `CN=userName,OU=aliyun,O=aliyun,C=CN`
     */
    Subject: string;
    /**
     * 证书有效期的开始时间。
     * @example `2020-10-13T03:09:00Z`
     */
    NotBefore: string;
    /**
     * 证书的更新时间。
     * @example `2020-12-23T06:10:13Z`
     */
    UpdatedAt: string;
    /**
     * 支持域名列表，最多支持10个域名。
     */
    SubjectAlternativeNames: string[];
}

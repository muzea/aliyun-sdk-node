export interface GetUserCertificateDetailResponse {
    /**
     * 非国密算法的证书内容，入参certFilter为false时展示，true时不展示。
     * @example `---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----`
     */
    Cert: string;
    /**
     * 非国密算法的私钥，入参certFilter为false时展示，true时不展示。
     * @example `-----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----`
     */
    Key: string;
    /**
     * PEM格式的国密算法的加密证书内容，入参certFilter为false时展示，true时不展示。
     * @example `-----BEGIN CERTIFICATE-----
    MIICDzCCA***
    -----END CERTIFICATE-----`
     */
    EncryptCert: string;
    /**
     * PEM格式的国密算法的加密证书私钥内容，入参certFilter为false时展示，true时不展示。
     * @example `-----BEGIN EC PRIVATE KEY-----
    MHcCAQEEI****
    -----END EC PRIVATE KEY-----`
     */
    EncryptPrivateKey: string;
    /**
     * PEM格式的国密算法的签名证书内容，入参certFilter为false时展示，true时不展示。
     * @example `-----BEGIN CERTIFICATE-----
    MIICDzCCAbagAw****
    -----END CERTIFICATE-----
    `
     */
    SignCert: string;
    /**
     * PEM格式的国密算法的签名证书私钥内容，入参certFilter为false时展示，true时不展示。
     * @example `-----BEGIN EC PRIVATE KEY-----
    MHcCAQEEILR****
    -----END EC PRIVATE KEY-----
    `
     */
    SignPrivateKey: string;
    /**
     * 证书ID。
     * @example `121345`
     */
    Id: number;
    /**
     * 证书名称。
     * @example `cert_name`
     */
    Name: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
    /**
     * 证书绑定的主域名。
     * @example `*.com`
     */
    Common: string;
    /**
     * 证书指纹。
     * @example `1D7801BBE772D5DE55CBF1F88AEB41A42402DA07`
     */
    Fingerprint: string;
    /**
     * 证书颁发机构。
     * @example `Digicert`
     */
    Issuer: string;
    /**
     * 购买证书的用户所属的公司或组织名称。
     * @example `Alibaba`
     */
    OrgName: string;
    /**
     * 购买证书的用户所属的公司或组织所在的省份。
     * @example `zhejiang`
     */
    Province: string;
    /**
     * 购买证书的用户所属的公司或组织所在的城市。
     * @example `hangzhou`
     */
    City: string;
    /**
     * 购买证书的用户所属的公司或组织所在的国家。
     * @example `CN`
     */
    Country: string;
    /**
     * 证书签发日期。
     * @example `2018-07-13`
     */
    StartDate: string;
    /**
     * 证书到期日期。
     * @example `2023-10-25`
     */
    EndDate: string;
    /**
     * 证书绑定的所有域名。
     * @example `*.com`
     */
    Sans: string;
    /**
     * 证书是否过期。取值：
     * - **true**：证书已过期
     * - **false**：证书未过期
     * @example `true`
     */
    Expired: boolean;
    /**
     * 是否在阿里云购买了证书。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    BuyInAliyun: boolean;
    /**
     * 证书申请订单的ID。
     * @example `123456`
     */
    OrderId: number;
    /**
     * 资源分组ID。
     * @example `rg-aek****wia`
     */
    ResourceGroupId: string;
    /**
     * 算法。
     * @example `RSA`
     */
    Algorithm: string;
}

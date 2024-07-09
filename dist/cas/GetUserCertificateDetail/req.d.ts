export interface GetUserCertificateDetailRequest {
    /**
     * 证书ID。
     * > 此ID可通过调用[ListUserCertificateOrder](~~455804~~)获取。
     * @example `6055048`
     */
    "CertId": number;
    /**
     * 值为**true**时，Cert、Key、EncryptCert、EncryptPrivateKey、SignCert、SignPrivateKey信息不返回，**false**时则返回，默认是false。
     * @example `false`
     */
    "CertFilter"?: boolean;
}

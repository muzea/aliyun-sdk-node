export interface UploadPCACertRequest {
    /**
     * 仓库ID。
     * > 此ID可通过调用[ListCertWarehouse ](~~455805~~)获取。
     * @example `1`
     */
    "WarehouseId": number;
    /**
     * 证书。
     * @example `-----BEGIN CERTIFICATE----- MIIEJDCCAwygAwIBAgIQITRHItTLTQizTyd3K7AMRTANBgkqhkiG9w0BAQsFADBe **************** 5/akmr2GK/Y= -----END CERTIFICATE----- -----BEGIN CERTIFICATE----- MIIDuzCCAqOgAwIBAgIQSEIWDPfWTDKZcWNyL2O+fjANBgkqhkiG9w0BAQsFADBf **************** URUHyMW5Qd5Q9g6Y4sDOIm6It9TF7EjpwMs42R30agcRYzuUsN72ZFBYFJwnBX8= -----END CERTIFICATE----- -----BEGIN CERTIFICATE----- MIIDizCCAnOgAwIBAgIRAMfjPkDKfELTo07l3A3cUSYwDQYJKoZIhvcNAQELBQAw ********* CjWTnYPhCcO2uIcnqMt7zCVs5LXBK/XSwlAXKMvKT0uuzw9VxeMfEabflKu0By8= -----END CERTIFICATE-----`
     */
    "Cert": string;
    /**
     * 证书私钥。
     * @example `-----BEGIN RSA PRIVATE KEY----- MIIEowIBAAKCAQEA5SIfpNCBoiDrZhX1H39CHwQMVD0kBNeBTWfP9xkeesvfzbOz ******* POVNFfDf9h7pJtQ5fRZNTYTDs/d+cH62Z3+nS74mNnEfff0nkvne -----END RSA PRIVATE KEY-----`
     */
    "PrivateKey"?: string;
    /**
     * 证书名称。
     * @example `cert_name`
     */
    "Name"?: string;
}

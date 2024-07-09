export interface RemoveExternalSAMLIdPCertificateRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 证书ID。
     * 您可以通过[ListExternalSAMLIdPCertificates](~~341629~~)获取证书ID。
     * @example `idp-c-00dt9gnl7fmjaw9c****`
     */
    "CertificateId": string;
}

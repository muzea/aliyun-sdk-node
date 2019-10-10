interface SetDomainCertificateRequest {
    "RegionId"?: string;
    "DomainName": string;
    "CertificateName": string;
    "GroupId": string;
    "CertificateBody"?: string;
    "CertificatePrivateKey"?: string;
}
export { SetDomainCertificateRequest };
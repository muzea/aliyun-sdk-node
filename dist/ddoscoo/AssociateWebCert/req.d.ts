export interface AssociateWebCertRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    "Domain": string;
    "CertId"?: number;
    "CertName"?: string;
    "Cert"?: string;
    "Key"?: string;
    "CertIdentifier"?: string;
    "CertRegion"?: string;
}

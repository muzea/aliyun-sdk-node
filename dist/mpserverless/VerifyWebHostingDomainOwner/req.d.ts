export interface VerifyWebHostingDomainOwnerRequest {
    /**
     * 服务空间ID。
     * @example `226e5213-697c-****-b4ff-35a09f8a52de`
     */
    "SpaceId": string;
    /**
     * 域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * DNS校验方式。
     * @example `dnsCheck`
     */
    "VerifyType": string;
}

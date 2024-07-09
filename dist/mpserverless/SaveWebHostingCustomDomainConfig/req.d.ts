export interface SaveWebHostingCustomDomainConfigRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 强制跳转选项。
     * - HTTPS_FORCE：强制跳转。
     * - OFF：不跳转（默认）。
     * @example `HTTPS_FORCE`
     */
    "ForceRedirectType": string;
    /**
     * 域名。
     * @example `www.example.com`
     */
    "DomainName": string;
}

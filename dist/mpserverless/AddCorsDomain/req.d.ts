export interface AddCorsDomainRequest {
    /**
     * 域名。支持前缀和端口通配。
     * @example `*.example.com:*`
     */
    "Domain": string;
    /**
     * 服务空间ID。
     * @example `mp-0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
}

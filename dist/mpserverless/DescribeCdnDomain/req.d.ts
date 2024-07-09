export interface DescribeCdnDomainRequest {
    /**
     * 租户 ID。
     * @example `UNIGTXQTAO`
     */
    "TenantId"?: string;
    /**
     * 服务空间 ID。
     * @example `mp-05c3aa1c-****-43ae-a03d-61eff91c592e`
     */
    "SpaceId": string;
    /**
     * 支持对云存储和静态网站自定义域名进行管理：
     * - FILE 云存储CDN
     * - WEB 静态网站托管CDN（前提是已经绑定自定义CDN）
     * @example `FILE`
     */
    "Type": string;
}

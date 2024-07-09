export interface ListCloudResourcesRequest {
    /**
     * 云厂商。
     * @example `Tencent`
     */
    "CloudName"?: string;
    /**
     * 云产品。
     * 目前Tencent仅支持CDN。
     * @example `SLB`
     */
    "CloudProduct"?: string;
    /**
     * 云资源访问密钥ID。
     * @example `21`
     */
    "SecretId"?: string;
    /**
     * 云资源绑定域名。
     * @example `cert-instanceId`
     */
    "Keyword"?: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，设置每页包含已被吊销证书的数量。默认值为**20**。
     * @example `20`
     */
    "ShowSize"?: number;
}

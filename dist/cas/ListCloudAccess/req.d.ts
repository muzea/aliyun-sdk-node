export interface ListCloudAccessRequest {
    /**
     * 云资源集访问的密钥ID。
     * @example `276`
     */
    "SecretId"?: string;
    /**
     * 云服务供应商。目前仅支持腾讯云（**Tencent**）
     * @example `Tencent`
     */
    "CloudName"?: string;
    /**
     * 分页，当前页，默认1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，设置每页显示证书的数量。可选**10**、**20**、**50**。
     * @example `20`
     */
    "ShowSize"?: number;
}

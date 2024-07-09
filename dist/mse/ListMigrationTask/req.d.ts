export interface ListMigrationTaskRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 源实例名称。
     * @example `whdc`
     */
    "OriginInstanceName"?: string;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}

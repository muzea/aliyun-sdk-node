export interface GetZookeeperDataImportUrlRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-zvp2xzzkk06`
     */
    "InstanceId"?: string;
    /**
     * 文件类型。
     * @example `zip`
     */
    "ContentType"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}

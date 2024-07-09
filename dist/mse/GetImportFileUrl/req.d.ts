export interface GetImportFileUrlRequest {
    /**
     * 文件类型。
     * @example `application/zip`
     */
    "ContentType"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-7pp2b****`
     */
    "InstanceId": string;
    /**
     * 命名空间ID。
     * @example `12788f73-9848-4388-98f1-507778f2****`
     */
    "NamespaceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}

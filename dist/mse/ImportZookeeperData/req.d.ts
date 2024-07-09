export interface ImportZookeeperDataRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-u0t2xzvxa06`
     */
    "InstanceId"?: string;
    /**
     * 源数据链接。
     * > 需要使用通过GetZookeeperDataImportUrl接口生成的URL
     * @example `http://xxxxxxxxxx`
     */
    "FileUrl"?: string;
    /**
     * 需导入的文件名称。
     * @example `snapshot.5`
     */
    "FileName"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}

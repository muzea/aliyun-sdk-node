export interface ImportNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-****`
     */
    "InstanceId": string;
    /**
     * 命名空间ID。
     * @example `f5cdc80a-****-8094-282f5650fc00`
     */
    "NamespaceId"?: string;
    /**
     * 策略。
     * @example `OVERWRITE`
     */
    "Policy"?: string;
    /**
     * 导入文件地址必须为MSE生成的地址（否则提示无权限）。
     * 获取步骤：
     * 1.GetImportFileUrl API获取到地址。
     * 2.通过标准的HTTP PUT方法将文件上传到上述API返回的HTTP地址。
     * 3.调用ImportNacosConfig API导入。
     * @example `http://mse-shared.oss-xxx.aliyuncs.com/cfg/import/xxxx/2021/01/11/xxxx.zip`
     */
    "FileUrl": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}

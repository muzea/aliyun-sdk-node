export interface ListListenersByConfigRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{\"appGroup\":\"emas-zfive_prehost\",\"appName\":\"emas-zfive\",\"appStage\":\"PRE_PUBLISH\",\"appUnit\":\"\",\"bucId\":\"225902\",\"bucName\":\"无线\",\"provider\":\"aliyun\"}`
     */
    "RequestPars"?: string;
    /**
     * 实例的ID。
     * @example `mse-cn-m7r1yurp00e`
     */
    "InstanceId": string;
    /**
     * 数据ID。
     * @example `zeekr-clueboss.yml`
     */
    "DataId": string;
    /**
     * 分组。
     * @example `prod`
     */
    "Group": string;
    /**
     * 命名空间ID。
     * @example `aaeb4d28-c9eb-4fa2-85f5-d03ce7ee8df1`
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

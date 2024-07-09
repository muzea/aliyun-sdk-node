export interface DetachPluginRequest {
    /**
     * 绑定的API网关插件ID
     * @example `05df2b52a3644a3a8b1935ab8ab59e9d`
     */
    "PluginId": string;
    /**
     * 指定要操作API所属分组ID
     * @example `93b87279e54c4c0baeb7113cdf9c67f5`
     */
    "GroupId"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * API的ID。
     * @example `19a2846d8e8541c788c6be740035eb68`
     */
    "ApiId"?: string;
}

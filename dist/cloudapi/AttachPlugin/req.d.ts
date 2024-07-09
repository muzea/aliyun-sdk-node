export interface AttachPluginRequest {
    /**
     * 绑定的API网关插件ID
     * @example `9a3f1a5279434f2ba74ccd91c295af9f `
     */
    "PluginId": string;
    /**
     * 要绑定的API分组ID
     * @example `285bb759342649a1b70c2093a772e087`
     */
    "GroupId"?: string;
    /**
     * 指定要操作的API编号，支持输入多个，“,”分隔，最多支持100个
     * @example `xxx`
     */
    "ApiIds"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `TEST`
     */
    "StageName": string;
    /**
     * 要绑定的API编号
     * @example `8afff6c8c4c6447abb035812e4d66b65 `
     */
    "ApiId"?: string;
}

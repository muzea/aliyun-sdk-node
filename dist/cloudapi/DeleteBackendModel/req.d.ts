export interface DeleteBackendModelRequest {
    /**
     * 后端模型 ID
     * @example `4be6b110b7aa40b0bf0c83cc00b3bd86`
     */
    "BackendModelId": string;
    /**
     * 后端 ID
     * @example `20bcdc9453524b78a8beb1f6de21edb7`
     */
    "BackendId"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `TEST`
     */
    "StageName"?: string;
}

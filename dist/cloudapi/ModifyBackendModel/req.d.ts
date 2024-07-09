export interface ModifyBackendModelRequest {
    /**
     * 后端 ID
     * @example `20bcdc9453524b78a8beb1f6de21edb7`
     */
    "BackendId"?: string;
    /**
     * 后端类型
     * @example `OSS`
     */
    "BackendType"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `TEST`
     */
    "StageName"?: string;
    /**
     * 后端模型 ID
     * @example `3bb6375bc71c4e4c95ce05b4e7a55a9d`
     */
    "BackendModelId"?: string;
    /**
     * 后端模型数据。
     * @example `{\"ServiceAddress\":\"http://121.40.XX.XX\"}`
     */
    "BackendModelData"?: string;
    /**
     * 后端模型定义的描述
     * @example `modify plugin first`
     */
    "Description"?: string;
}

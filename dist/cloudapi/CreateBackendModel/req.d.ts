export interface CreateBackendModelRequest {
    /**
     * 后端 ID
     * @example `34e94fcd3e2e47a49824a89b8f92cb5e`
     */
    "BackendId"?: string;
    /**
     * 后端类型
     * @example `HTTP`
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
     * 后端模型数据。
     * @example `{\"ServiceAddress\":\"http://apigateway.alicloudapi.com:8080\"}`
     */
    "BackendModelData"?: string;
    /**
     * 后端模型描述
     * @example `model description`
     */
    "Description"?: string;
}

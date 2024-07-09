export interface CloneNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-i7m25igg403`
     */
    "InstanceId": string;
    /**
     * 源命名空间ID。
     * @example `be821963-6d48-4ea5-9910-6057d****`
     */
    "OriginNamespaceId"?: string;
    /**
     * 目标命名空间ID。
     * @example `08be4b5d-2d1c-4e6e-aa85-83b9****`
     */
    "TargetNamespaceId"?: string;
    /**
     * 当写入冲突时，使用的策略。
     * - ABORT
     * - SKIP
     * - OVERWRITE
     * @example `OVERWRITE`
     */
    "Policy": string;
    /**
     * 配置ID列表。
     * @example `253661,253662`
     */
    "Ids": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}

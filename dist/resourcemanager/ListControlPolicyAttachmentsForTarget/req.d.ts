export interface ListControlPolicyAttachmentsForTargetRequest {
    /**
     * 目标节点。取值：
     * - Root ID：查询Root节点绑定的管控策略。
     * - 资源夹ID：查询资源夹绑定的管控策略。
     * - 成员ID：查询成员绑定的管控策略。
     * @example `fd-ZDNPiT****`
     */
    "TargetId": string;
    /**
     * 指定返回结果中管控策略描述的语言。取值：
     * - zh-CN（默认值）：中文。
     * - en：英文。
     * - ja：日文。
     * > 该参数仅在系统管控策略时有效。
     * @example `zh-CN`
     */
    "Language"?: string;
}

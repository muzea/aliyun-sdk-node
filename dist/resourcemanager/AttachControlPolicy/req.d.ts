export interface AttachControlPolicyRequest {
    /**
     * 管控策略ID。
     * @example `cp-jExXAqIYkwHN****`
     */
    "PolicyId": string;
    /**
     * 目标节点。取值：
     * - Root ID：为Root资源夹绑定管控策略。
     * - 资源夹ID：为资源夹绑定管控策略。
     * - 成员ID：为成员绑定管控策略。
     * @example `fd-ZDNPiT****`
     */
    "TargetId": string;
}

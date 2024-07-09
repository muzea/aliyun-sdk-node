export interface DetachPolicyRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 目标节点ID。
     * > 该参数在单账号模式下为可选，多账号模式下为必选。
     * @example `151266687691****`
     */
    "TargetId"?: string;
    /**
     * 目标节点类型。取值：
     * - USER：为当前登录账号解绑指定标签策略。适用单账号模式。
     * - ROOT：为资源目录中的Root资源夹解绑指定标签策略。适用多账号模式。
     * - FOLDER：为资源目录中的资源夹解绑指定标签策略。适用多账号模式。
     * - ACCOUNT：为资源目录中的成员解绑指定标签策略。适用多账号模式。
     * > 该参数在单账号模式下为可选，多账号模式下为必选。且参数取值不区分大小写。
     * @example `ACCOUNT`
     */
    "TargetType"?: string;
    /**
     * 标签策略ID。
     * @example `p-a3381efe2fe34a75****`
     */
    "PolicyId": string;
}

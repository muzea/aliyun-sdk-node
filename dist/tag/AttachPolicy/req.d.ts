export interface AttachPolicyRequest {
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
     * - USER：将标签策略绑定到当前登录账号。适用单账号模式。
     * - ROOT：将标签策略绑定到资源目录中的Root资源夹。适用多账号模式。
     * - FOLDER：将标签策略绑定到资源目录中的资源夹。适用多账号模式。
     * - ACCOUNT：将标签策略绑定到资源目录中的成员。适用多账号模式。
     * > 该参数在单账号模式下为可选，多账号模式下为必选。且参数取值不区分大小写。
     * @example `ACCOUNT`
     */
    "TargetType"?: string;
    /**
     * 标签策略ID。
     * @example `p-de62a0bf400e4b69****`
     */
    "PolicyId": string;
}

export interface GetEffectivePolicyRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 目标节点ID。
     * > 该参数在单账号模式下为可选，多账号模式下为必选。
     * @example `154950938137****`
     */
    "TargetId"?: string;
    /**
     * 目标节点类型。取值：
     * - USER：查询当前登录账号已绑定的有效策略。适用单账号模式。
     * - ROOT：查询资源目录中的Root资源夹已绑定的有效策略。适用多账号模式。
     * - FOLDER：查询资源目录中的资源夹已绑定的有效策略。适用多账号模式。
     * - ACCOUNT：查询资源目录中的成员已绑定的有效策略。适用多账号模式。
     * > 该参数在单账号模式下为可选，多账号模式下为必选。且参数取值不区分大小写。
     * @example `ACCOUNT`
     */
    "TargetType"?: string;
}

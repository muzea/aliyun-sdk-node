export interface ListPoliciesForTargetRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 分页时每页显示的数据条数。
     * 默认值：50。最大值：1000。
     * @example `50`
     */
    "MaxResult"?: number;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 目标节点ID。用于查询的过滤条件。
     * @example `154950938137****`
     */
    "TargetId"?: string;
    /**
     * 目标节点类型。用于查询的过滤条件。取值：
     * - USER：查询当前登录账号已绑定的标签策略。适用单账号模式。
     * - ROOT：查询资源目录中的Root资源夹已绑定的标签策略。适用多账号模式。
     * - FOLDER：查询资源目录中的资源夹已绑定的标签策略。适用多账号模式。
     * - ACCOUNT：查询资源目录中的成员已绑定的标签策略。适用多账号模式。
     * > 参数取值不区分大小写。
     * @example `ACCOUNT`
     */
    "TargetType"?: string;
}

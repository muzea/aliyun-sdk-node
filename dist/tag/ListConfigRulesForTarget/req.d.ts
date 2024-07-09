export interface ListConfigRulesForTargetRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 目标节点ID。用于查询的过滤条件。
     * @example `134254031178****`
     */
    "TargetId"?: string;
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
     * 标签键。用于查询的过滤条件。
     * @example `CostCenter`
     */
    "TagKey"?: string;
    /**
     * 目标节点类型。用于查询的过滤条件。取值：
     * - USER：查询当前登录账号的标签检测任务列表。适用单账号模式。
     * - ROOT：查询资源目录中的Root资源夹的标签检测任务列表。适用多账号模式。
     * - FOLDER：查询资源目录中的资源夹的标签检测任务列表。适用多账号模式。
     * - ACCOUNT：查询资源目录中的成员的标签检测任务列表。适用多账号模式。
     * > 参数取值不区分大小写。
     * @example `ACCOUNT`
     */
    "TargetType"?: string;
    /**
     * 标签策略场景。用于查询的过滤条件。取值：
     * - tags：资源绑定指定标签值场景下的标签策略。
     * - rg_inherit：资源自动继承资源组标签场景下的标签策略。
     * @example `tags`
     */
    "PolicyType"?: string;
    /**
     * 标签策略模式。用于查询的过滤条件。取值：
     * - USER：单账号模式。
     * - RD：多账号模式。
     * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
     * > 参数取值不区分大小写。
     * @example `USER`
     */
    "UserType"?: string;
}

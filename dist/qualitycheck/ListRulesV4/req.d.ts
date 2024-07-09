export interface ListRulesV4Request {
    /**
     * 按规则ID搜索。
     * @example `895EAD5312634F5AA708E3B3FA79662E`
     */
    "Rid"?: number;
    /**
     * 按规则ID或者规则名称搜索。
     * @example `xx`
     */
    "RuleIdOrRuleName"?: string;
    /**
     * 规则所属业务名称。
     * @example `所有业务`
     */
    "BusinessName"?: string;
    /**
     * 规则所属的规则类型的type值。
     * @example `1`
     */
    "Type"?: number;
    /**
     * 规则所属的规则类型的名称。
     * @example `所有类型`
     */
    "TypeName"?: string;
    /**
     * 大的业务分类。
     * @example `无`
     */
    "BusinessRange"?: number;
    /**
     * 规则创建者ID，同CreateUserId。二选一即可。
     * @example `1`
     */
    "CreateEmpid"?: string;
    /**
     * 规则创建者ID，同CreateEmpId。二选一即可。
     * @example `1`
     */
    "CreateUserId"?: number;
    /**
     * 规则更新者ID，同LastUpdateEmpId。二选一即可。
     * @example `1`
     */
    "UpdateUserId"?: number;
    /**
     * 规则更新者ID，同UpdateUserId。二选一即可。
     * @example `1`
     */
    "LastUpdateEmpid"?: string;
    /**
     * 规则状态。
     * @example `2`
     */
    "Status"?: number;
    /**
     * 分类名称。
     * @example `分类名称A`
     */
    "CategoryName"?: string;
    /**
     * 来源类型
     * @example `0`
     */
    "SourceType"?: number;
    /**
     * 规则类别
     * @example `1`
     */
    "RuleType"?: number;
    /**
     * 按照更新时间筛选（左区间）。
     * @example `2021-11-29 16:11:09`
     */
    "UpdateStartTime"?: string;
    /**
     * 按照更新时间筛选（右区间）。
     * @example `2021-11-29 18:11:09`
     */
    "UpdateEndTime"?: string;
    /**
     * 质检方案ID。
     * @example `1000000090`
     */
    "SchemeId"?: number;
    /**
     * 需要字段
     */
    "RequireInfos"?: string[];
    /**
     * 评分类型。
     * @example `1`
     */
    "RuleScoreSingleType"?: number;
    /**
     * 当前页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否统计总数
     * @example `false`
     */
    "CountTotal"?: boolean;
    /**
     * 按照创建时间筛选（左区间）。
     * @example `2021-11-29 18:11:09`
     */
    "StartTime"?: string;
    /**
     * 按照创建时间筛选（右区间）。
     * @example `2021-11-29 19:11:09`
     */
    "EndTime"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}

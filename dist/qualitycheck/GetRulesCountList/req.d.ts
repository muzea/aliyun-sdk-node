export interface GetRulesCountListRequest {
    /**
     * 按规则ID搜索。
     * @example `123`
     */
    "Rid"?: number;
    /**
     * 按规则ID或者规则名称搜索
     * @example `123`
     */
    "RuleIdOrRuleName"?: string;
    /**
     * 规则所属业务名称
     * @example `电话业务`
     */
    "BusinessName"?: string;
    /**
     * 规则所属的规则类型的type值。
     * @example `1`
     */
    "Type"?: number;
    /**
     * 规则所属的规则类型的名称。
     * @example `全部类别`
     */
    "TypeName"?: string;
    /**
     * 大的业务分类
     * @example `1`
     */
    "BusinessRange"?: number;
    /**
     * 规则创建者ID，同CreateUserId。二选一即可。
     * @example `63`
     */
    "CreateEmpid"?: string;
    /**
     * 规则创建者ID，同CreateEmpid。二选一即可。
     * @example `63`
     */
    "CreateUserId"?: number;
    /**
     * 规则更新者ID，同LastUpdateEmpid。二选一即可。
     * @example `63`
     */
    "UpdateUserId"?: number;
    /**
     * 规则更新者ID，同UpdateUserId。二选一即可。
     * @example `63`
     */
    "LastUpdateEmpid"?: string;
    /**
     * 规则状态：
     * @example `1`
     */
    "Status"?: number;
    /**
     * 分类名称
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
     * @example `2022-10-07 00:00:00`
     */
    "UpdateStartTime"?: string;
    /**
     * 按照更新时间筛选（右区间）。
     * @example `2022-10-08 23:59:59`
     */
    "UpdateEndTime"?: string;
    /**
     * 质检方案ID。
     * @example `123`
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
     * 规则列表页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否统计总数
     * @example `true`
     */
    "CountTotal"?: boolean;
    /**
     * 按照创建时间筛选（右区间）。
     * @example `2022-10-07 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 按照创建时间筛选（左区间）。
     * @example `2022-10-08 23:59:59`
     */
    "EndTime"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}

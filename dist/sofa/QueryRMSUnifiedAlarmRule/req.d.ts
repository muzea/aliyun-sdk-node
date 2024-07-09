export interface QueryRMSUnifiedAlarmRuleRequest {
    /**
     * 告警规则名称模糊搜索
     */
    "Keyword"?: string;
    /**
     * 告警等级
     */
    "Level"?: number;
    /**
     * 告警对象搜索 json格式 包含字段如下 ：
     * rule_status	NUMBER	否	1：打开 0:闭合
     * 启停状态
     * alarm_status	NUMBER	否	0
     * 告警状态
     * only_me	BOOLEAN	否	true, false
     * 只看我
     * current_page	NUMBER	否	1
     * 当前页
     * page_size	NUMBER	否	3
     * 页面尺寸
     * workspace_name	STRING	是	工作区名
     * 工作区名
     * rule_id	NUMBER	否
     * 告警规则id
     * rule_unique_identity	STRING	否	1234_asdf
     * 告警唯一标识
     * category	STRING	是	"自定义"、"pql"
     * 标识符 区分规则是自定义规则还是pql规则
     * ref_datasource_type	STRING	否	datasource
     *
     * filter_user_group	NUMBER	否	1
     * 根据用户组过滤
     * filter_webhook	NUMBER	否	1
     * 根据webhook过滤
     * filter_ding_robot	NUMBER	否	1
     * 钉钉机器人过滤
     */
    "AlarmTargetJsonStr"?: string;
    /**
     * 启停状态 1：打开 0:闭合
     */
    "RuleStatus"?: number;
    /**
     * 告警状态
     */
    "AlarmStatus"?: number;
    /**
     * 只看我
     */
    "OnlyMe"?: boolean;
    /**
     * 当前页
     */
    "CurrentPage"?: number;
    /**
     * 每页大小
     */
    "PageSize"?: number;
    /**
     * 工作空间名称
     */
    "WorkspaceName": string;
    /**
     * 报警规则id
     */
    "RuleId"?: number;
    /**
     * 告警唯一标识
     */
    "RuleUniqueIdentity"?: string;
    /**
     * 规则类型
     */
    "Category": string;
    /**
     * datasource
     */
    "RefDatasourceType"?: string;
}

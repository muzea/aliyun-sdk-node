export interface PostAutomateResponseConfigRequest {
    /**
     * 自动化响应配置规则ID。
     * @example `123`
     */
    "Id"?: number;
    /**
     * 规则创建用户ID。
     * @example `17108579417****`
     */
    "SubUserId"?: number;
    /**
     * 自动化响应配置规则名称。
     * @example `cfw kill quara book`
     */
    "RuleName"?: string;
    /**
     * 自动化响应类型。取值：
     * - **event**：事件
     * - **alert**：告警
     * @example `event`
     */
    "AutoResponseType"?: string;
    /**
     * 自动化响应规则触发条件，JSON格式。
     * @example `[{"left":{"value":"alert_name"},"operator":"containsString","right":{"value":"webshell_online"}}]`
     */
    "ExecutionCondition"?: string;
    /**
     * 处置动作类型，多个值以逗号分隔。取值：
     * - **doPlaybook**：执行剧本
     * - **changeEventStatus**：更改事件状态
     * - **changeThreatLevel**：更改事件威胁等级
     * @example `doPlaybook,changeEventStatus`
     */
    "ActionType"?: string;
    /**
     * 自动化响应规则动作配置，JSON数组格式。
     * @example `[
          {
                "actionType": "doPlaybook",
                "playbookName": "WafBlockIP",
                "playbookUuid": "bdad6220-6584-41b2-9704-fc6584568758"
          }
    ]`
     */
    "ActionConfig"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - **cn-hangzhou**：资产属于中国内地与中国香港
     * - **ap-southeast-1**：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}

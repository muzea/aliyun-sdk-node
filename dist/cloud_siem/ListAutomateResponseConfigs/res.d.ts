export interface ListAutomateResponseConfigsResponse {
    /**
     * 请求是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 分页记录。
         */
        PageInfo: {
            /**
             * 列表当前页号。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数。
             * @example `100`
             */
            TotalCount: number;
        };
        /**
         * 详细数据。
         */
        ResponseData: {
            /**
             * 自动化响应配置规则ID。
             * @example `123`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 规则关联SIEM主账号ID。
             * @example `127608589417****`
             */
            Aliuid: number;
            /**
             * 规则创建用户ID。
             * @example `17108579417****`
             */
            SubUserId: number;
            /**
             * 自动化响应配置规则名称。
             * @example `cfw kill quara book`
             */
            RuleName: string;
            /**
             * 自动化响应类型。取值：
             * - **event**：事件
             * - **alert**：告警
             * @example `event`
             */
            AutoResponseType: string;
            /**
             * 自动化响应规则触发条件，JSON格式。
             * @example `[{"left":{"value":"alert_name"},"operator":"containsString","right":{"value":"webshell_online"}}]`
             */
            ExecutionCondition: string;
            /**
             * 处置动作类型，多个值以逗号分隔。取值：
             * - **doPlaybook**：执行剧本
             * - **changeEventStatus**：更改事件状态
             * - **changeThreatLevel**：更改事件威胁等级
             * @example `doPlaybook,changeEventStatus`
             */
            ActionType: string;
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
            ActionConfig: string;
            /**
             * 规则状态。取值：
             * - **0**：未启用
             * - **100**：启用
             * @example `0`
             */
            Status: number;
            /**
             * 自动化响应规则条件字段数据类型。
             * @example `varchar`
             */
            DataType: number;
        }[];
    };
}

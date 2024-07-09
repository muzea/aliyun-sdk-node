export interface ListCloudSiemPredefinedRulesResponse {
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
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
             * 预定义规则ID。
             * @example `123456789`
             */
            Id: number;
            /**
             * 规则创建时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 规则修改时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 规则名称。
             * @example `siem_base64-command-exec_aegis-proc`
             */
            RuleName: string;
            /**
             * 规则中文名称。
             * @example `siem_base64-command-exec_aegis-proc`
             */
            RuleNameCn: string;
            /**
             * 规则英文名称。
             * @example `siem_base64-command-exec_aegis-proc`
             */
            RuleNameEn: string;
            /**
             * 规则名称美杜莎Code。
             * @example `${siem_rule_name_siem_cfw-attack-count-level-up_cfw-attack}`
             */
            RuleNameMds: string;
            /**
             * 规则描述美杜莎Code。
             * @example `${siem_rule_description_siem_cfw-attack-count-level-up_cfw-attack}`
             */
            RuleDescMds: string;
            /**
             * 威胁等级。取值：
             * - serious：高危
             * - suspicious：中危
             * - remind：低危
             * @example `remind`
             */
            ThreatLevel: string;
            /**
             * 威胁类型。
             * @example `WEBSHELL`
             */
            AlertType: string;
            /**
             * 规则对应的日志源。
             * @example `cloud_siem_aegis_proc`
             */
            Source: string;
            /**
             * 事件生成方式。 取值：
             * - default:默认内置方式
             * - singleToSingle：每个告警生成一个事件
             * - allToSingle：周期内告警生成一个事件
             * @example `allToSingle`
             */
            EventTransferType: string;
            /**
             * 告警附加字段attck
             * @example `T1595.002 Vulnerability Scanning`
             */
            AttCk: string;
            /**
             * 预定义规则启用状态。 取值：
             * - 0：初始状态
             * - 100：规则上线
             * @example `0`
             */
            Status: number;
        }[];
    };
}

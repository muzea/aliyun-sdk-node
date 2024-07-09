export interface ListCloudSiemCustomizeRulesResponse {
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
             * 自定义规则ID。
             * @example `123456789`
             */
            Id: number;
            /**
             * 自定义规则创建时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 自定义规则最后更新时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * SIEM主账号ID。
             * @example `127608589417****`
             */
            Aliuid: number;
            /**
             * 规则名称。
             * @example `waf_scan`
             */
            RuleName: string;
            /**
             * 规则描述。
             * @example `this rule is for waf scan`
             */
            RuleDesc: string;
            /**
             * 规则类型。取值：
             * - **predefine**：预定义
             * - **customize**：自定义
             * @example `customize`
             */
            RuleType: string;
            /**
             * 威胁等级。取值：
             * - **serious**：高危
             * - **suspicious**：中危
             * - **remind**：低危
             * @example `remind`
             */
            ThreatLevel: string;
            /**
             * 威胁类型。
             * @example `WEBSHELL`
             */
            AlertType: string;
            /**
             * 威胁类型美杜莎Code。
             * @example `${siem_rule_type_process_abnormal_command}`
             */
            AlertTypeMds: string;
            /**
             * 规则对应的日志类型。
             * @example `ALERT_ACTIVITY`
             */
            LogType: string;
            /**
             * 规则对应的日志类型美杜莎Code。
             * @example `${sas.cloudsiem.prod.alert_activity}`
             */
            LogTypeMds: string;
            /**
             * 规则对应的日志源。
             * @example `cloud_siem_aegis_sas_alert`
             */
            LogSource: string;
            /**
             * 规则对应的日志源美杜莎Code。
             * @example `${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}`
             */
            LogSourceMds: string;
            /**
             * 规则查询条件，JSON数组格式（需要对HTML转义字符进行反向转义）。
             * @example `[[{&quot;not&quot;:false,&quot;left&quot;:&quot;alert_name&quot;,&quot;operator&quot;:&quot;=&quot;,&quot;right&quot;:&quot;WEBSHELL&quot;}]]`
             */
            RuleCondition: string;
            /**
             * 日志聚合字段，JSON数组格式（需要对HTML转义字符进行反向转义）。
             * @example `[&quot;asset_id&quot;]`
             */
            RuleGroup: string;
            /**
             * 规则阈值配置json（需要对html转义字符进行反向转义）。
             * @example `{&quot;aggregateFunction&quot;:&quot;count&quot;,&quot;aggregateFunctionName&quot;:&quot;count&quot;,&quot;field&quot;:&quot;activity_name&quot;,&quot;operator&quot;:&quot;&lt;=&quot;,&quot;value&quot;:1}`
             */
            RuleThreshold: string;
            /**
             * 规则窗口长度（需要对html转义字符进行反向转义）。
             * @example `{&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;HOUR&quot;}`
             */
            QueryCycle: string;
            /**
             * 告警附加字段attck。
             * @example `T1595.002 Vulnerability Scanning`
             */
            AttCk: string;
            /**
             * 告警是否转换事件开关。取值：
             * - **0**：不转换
             * - **1**：转换
             * @example `1`
             */
            EventTransferSwitch: number;
            /**
             * 事件生成方式。取值：
             * - **default**：默认内置方式
             * - **singleToSingle**：每个告警生成一个事件
             * - **allToSingle**：周期内告警生成一个事件
             * @example `allToSingle`
             */
            EventTransferType: string;
            /**
             * 事件生成扩展信息。当**eventTransferType**值为**allToSingle**，该字段有值，表示告警聚合窗口的周期长度以及周期单位（需要对html转义字符进行反向转义）。
             * @example `{&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;MINUTE&quot;}`
             */
            EventTransferExt: string;
            /**
             * 规则状态。取值：
             * - **0**：初始状态
             * - **10**：模拟数据测试
             * - **15**：业务数据测试中
             * - **20**：业务数据测试结束
             * - **100**：规则上线
             * @example `0`
             */
            Status: number;
            /**
             * 视图类型。
             * 0：当前阿里云账号视图。
             * 1：企业下所有账号的视图。
             * @example `1`
             */
            DataType: number;
        }[];
    };
}

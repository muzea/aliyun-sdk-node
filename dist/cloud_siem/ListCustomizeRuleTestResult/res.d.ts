export interface ListCustomizeRuleTestResultResponse {
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
             * 告警UUID。
             * @example `sas_71e24437d2797ce8fc59692905a4****`
             */
            Uuid: string;
            /**
             * 告警关联SIEM主账号ID。
             * @example `127608589417****`
             */
            MainUserId: string;
            /**
             * 告警关联阿里账号ID。
             * @example `176555323***`
             */
            SubUserId: string;
            /**
             * 规则对应的日志类型。
             * @example `ALERT_ACTIVITY`
             */
            LogType: string;
            /**
             * 规则对应的日志源。
             * @example `cloud_siem_aegis_sas_alert`
             */
            LogSource: string;
            /**
             * 事件关联告警来源产品。
             * @example `sas`
             */
            AlertSrcProd: string;
            /**
             * 事件关联告警来源产品子模块。
             * @example `waf`
             */
            AlertSrcProdModule: string;
            /**
             * ATTCT&攻击技术标签。
             * @example `T1595.002 Vulnerability Scanning`
             */
            AttCk: string;
            /**
             * 告警描述。
             * @example `The account you logged in this time is not in the legal account category defined by you. Please confirm the legality of the login behavior。`
             */
            AlertDesc: string;
            /**
             * 告警数据状态。 取值：
             * - test：业务测试
             * - online：上线
             * @example `test`
             */
            OnlineStatus: string;
            /**
             * 告警名称，对应自定义规则名称。
             * @example `waf_scan`
             */
            EventName: string;
            /**
             * 威胁等级。取值：
             * - serious：高危
             * - suspicious：中危
             * - remind：低危
             * @example `remind`
             */
            Level: string;
            /**
             * 威胁类型，即告警类型。
             * @example `WEBSHELL`
             */
            EventType: string;
            /**
             * 告警详情，JSON格式。
             * @example `{"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "218.92.XX.XX"}`
             */
            AlertDetail: string;
            /**
             * 告警记录时间。
             * @example `2023-01-06 16:37:29`
             */
            LogTime: string;
        }[];
    };
}

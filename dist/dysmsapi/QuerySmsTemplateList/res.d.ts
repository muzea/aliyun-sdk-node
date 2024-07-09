export interface QuerySmsTemplateListResponse {
    /**
     * 请求ID。
     * @example `819BE656-D2E0-4858-8B21-B2E47708****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 结果列表。
     */
    SmsTemplateList: {
        /**
         * 短信模板Code。
         * @example `SMS_1525***`
         */
        TemplateCode: string;
        /**
         * 短信模板名称。
         * @example `验证码模板`
         */
        TemplateName: string;
        /**
         * 模板类型（对外使用）。返回值：
         * - **0**：验证码短信。
         * - **1**：通知短信。
         * - **2**：推广短信。
         * - **3**：国际/港澳台短信。
         * - **7**：数字短信。
         * > 此处的模板类型必须与AddSmsTemplate、ModifySmsTemplate接口中填写的模板类型参数值保持一致。
         * @example `0`
         */
        OuterTemplateType: number;
        /**
         * 模板审核状态。返回值：
         * - **AUDIT_STATE_INIT**：审核中。
         * - **AUDIT_STATE_PASS**：通过审核。
         * - **AUDIT_STATE_NOT_PASS**：未通过审核，请在返回参数Reason中查看审核未通过原因。
         * - **AUDIT_STATE_CANCEL**：取消审核。
         * - **AUDIT_SATE_CANCEL**：取消审核。
         * @example `AUDIT_STATE_PASS`
         */
        AuditStatus: string;
        /**
         * 模板内容。
         * @example `验证码为：${code}，您正在注册成为平台会员，感谢您的支持！`
         */
        TemplateContent: string;
        /**
         * 创建模板的时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2020-06-04 11:42:17`
         */
        CreateDate: string;
        /**
         * 审核返回值。
         */
        Reason: {
            /**
             * 审核未通过的时间，格式为yyyy-MM-dd HH:mm:ss。
             * @example `2020-06-04 16:01:17`
             */
            RejectDate: string;
            /**
             * 审核未通过的原因。
             * @example `变量不符合规范`
             */
            RejectInfo: string;
            /**
             * 审核未通过的详细说明。
             * @example `变量属性选择错误。
            请根据业务使用场景选择合适的变量属性。`
             */
            RejectSubInfo: string;
        };
        /**
         * 工单号。
         * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
         * @example `2004983****`
         */
        OrderId: string;
        /**
         * 模板类型。返回值：
         * - **0**：短信通知。
         * - **1**：推广短信。
         * - **2**：验证码短信。
         * - **6**：国际/港澳台短信。
         * - **7**：数字短信。
         * @example `2`
         */
        TemplateType: number;
    }[];
    /**
     * 本次查询到的模板总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 当前页码。默认取值为**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 每页显示的模板个数。取值范围：**1~50**。
     * @example `10`
     */
    PageSize: number;
}

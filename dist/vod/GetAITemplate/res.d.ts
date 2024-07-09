export interface GetAITemplateResponse {
    /**
     * 请求ID。
     * @example `080DA371-8AC0-4CD4-4476-33E64282****`
     */
    RequestId: string;
    /**
     * AI模板信息。
     */
    TemplateInfo: {
        /**
         * AI模板的创建时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z。
         * @example `2020-07-08T06:50:45Z`
         */
        CreationTime: string;
        /**
         * 是否为默认AI模板。取值：
         * - **Default**：是。
         * - **NotDefault**：否。
         * @example `NotDefault`
         */
        IsDefault: string;
        /**
         * AI模板类型。取值：
         * - **AIMediaAudit**：智能审核。
         * - **AIImage**：智能封面。
         * @example `AIMediaAudit`
         */
        TemplateType: string;
        /**
         * AI模板详细配置，JSON字符串。具体配置，请参见[AITemplateConfig](~~89863#title-vd3-499-o36~~)。
         * @example `{"AuditRange":["text-title","video"],"AuditContent":["screen"],"AuditItem":["terrorism","porn"],"AuditAutoBlock":"yes"}`
         */
        TemplateConfig: string;
        /**
         * AI模板名称。
         * @example `DemoAITemplate`
         */
        TemplateName: string;
        /**
         * AI模板来源。取值：
         * - **System**：系统。
         * - **Custom**：自定义。
         * @example `Custom`
         */
        Source: string;
        /**
         * AI模板ID。
         * @example `1706a0063dd733f6a823ef32e0a5****`
         */
        TemplateId: string;
        /**
         * AI模板修改时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z。
         * @example `2020-07-08T06:58:45Z`
         */
        ModifyTime: string;
    };
}

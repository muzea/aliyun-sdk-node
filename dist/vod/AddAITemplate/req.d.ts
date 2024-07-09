export interface AddAITemplateRequest {
    /**
     * AI模板名称。最大128字节。
     * @example `AI-media-test`
     */
    "TemplateName": string;
    /**
     * AI模板类型。取值：
     * - **AIMediaAudit**：智能审核。
     * - **AIImage**：智能封面。
     * @example `AIMediaAudit`
     */
    "TemplateType": string;
    /**
     * AI模板详细配置，JSON字符串。
     * 具体配置，请参见[AITemplateConfig](~~89863#title-vd3-499-o36~~)。
     * @example `{"AuditItem":["terrorism","porn"],"AuditRange":["image-cover","text-title","video"],"AuditContent":["screen"],"AuditAutoBlock":"yes"}`
     */
    "TemplateConfig": string;
}

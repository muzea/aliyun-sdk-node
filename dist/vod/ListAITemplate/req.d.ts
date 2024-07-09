export interface ListAITemplateRequest {
    /**
     * AI模板类型。取值：
     * - **AIMediaAudit**：智能审核。
     * - **AIImage**：智能封面。
     * @example `AIMediaAudit`
     */
    "TemplateType": string;
}

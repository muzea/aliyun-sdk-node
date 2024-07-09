export interface DeleteAITemplateRequest {
    /**
     * AI模板ID。可通过以下方式获取：
     * - 调用[AddAITemplate](~~102930~~)接口添加AI模板时，AI模板ID为返回参数TemplateId的值。
     * - AI模板添加后，可调用[ListAITemplate](~~102936~~)接口查询AI模板ID，为请求后返回参数TemplateId的值。
     * @example `1706a0063dd733f6a823ef32e0a5****`
     */
    "TemplateId": string;
}

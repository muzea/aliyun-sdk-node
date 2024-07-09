export interface UpdateCustomTemplateRequest {
    /**
     * 模板ID
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId": string;
    /**
     * 模板名称
     * @example `test-template`
     */
    "Name"?: string;
    /**
     * [模板参数](~~448291~~)
     * @example `{"param": "sample"}`
     */
    "TemplateConfig"?: string;
}

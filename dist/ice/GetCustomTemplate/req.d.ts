export interface GetCustomTemplateRequest {
    /**
     * 模板ID
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 获取默认模板时的模板类型ID。TemplateId为空时该参数必填。
     * @example `1`
     */
    "Type"?: number;
    /**
     * 模板子类型。
     * @example `1`
     */
    "Subtype"?: number;
}

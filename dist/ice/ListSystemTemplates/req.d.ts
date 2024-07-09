export interface ListSystemTemplatesRequest {
    /**
     * 模板类型。逗号分隔
     * @example `1,2`
     */
    "Type": string;
    /**
     * 模板子类型ID
     * @example `1`
     */
    "Subtype"?: string;
    /**
     * 模板名称
     * @example `SampleTemplate`
     */
    "Name"?: string;
    /**
     * 模板ID
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 模板状态：Normal正常，Invisible不可见，ALL全部
     * @example `Normal`
     */
    "Status"?: string;
    /**
     * 分页数目
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。默认值20。最大值100。
     * @example `20`
     */
    "PageSize"?: number;
}

export interface QueryTemplateListRequest {
    /**
     * 需要查询的模板ID列表。最多一次查询10个，用半角逗号（,）分隔。
     * @example `16f01ad6175e4230ac42bb5182cd****,88c6ca184c0e424d5w5b665e2a12****`
     */
    "TemplateIds": string;
}

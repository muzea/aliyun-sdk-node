export interface QuerySmarttagTemplateListRequest {
    /**
     * 模板ID，可以从[添加模板](~~187759~~)的返回参数中获取。若指定该参数，则只返回该模板的信息；否则返回当前RAM⽤户所有模板的信息。
     * @example `05de22f255284c7a8d2aab535dde****`
     */
    "TemplateId"?: string;
}

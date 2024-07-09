export interface CreateCustomTemplateResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板信息。
     */
    CustomTemplate: {
        /**
         * 模板ID。
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `test-template`
         */
        TemplateName: string;
        /**
         * 模板类型ID。
         * @example `1`
         */
        Type: number;
        /**
         * 模板类型名称。
         * @example `TranscodeTemplate`
         */
        TypeName: string;
        /**
         * 模板子类型名称。
         * @example `Remux`
         */
        Subtype: string;
        /**
         * 模板状态。
         * @example `Normal`
         */
        Status: string;
        /**
         * 是否默认模板。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 模板配置。
         * @example `{"Container":{"Format":"flv"},"Video":{},"Audio":{}}`
         */
        TemplateConfig: string;
        /**
         * 模板创建时间。
         * @example `2022-04-19T02:04:31Z`
         */
        CreateTime: string;
        /**
         * 模板修改时间。
         * @example `2022-04-19T02:04:31Z`
         */
        ModifiedTime: string;
    };
}

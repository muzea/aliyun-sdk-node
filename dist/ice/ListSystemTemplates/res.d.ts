export interface ListSystemTemplatesResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板总数
     * @example `20`
     */
    Total: number;
    /**
     * 模板信息列表
     */
    SystemTemplateList: {
        /**
         * 模板Id
         * @example `S00000001-000000`
         */
        TemplateId: string;
        /**
         * 模板名称
         * @example `FLV-COPY`
         */
        TemplateName: string;
        /**
         * 模板类型ID
         * @example `1`
         */
        Type: number;
        /**
         * 模板类型名称
         * @example `TranscodeTemplate`
         */
        TypeName: string;
        /**
         * 模板子类型ID
         * @example `1`
         */
        Subtype: number;
        /**
         * 模板子类型名称
         * @example `Remux`
         */
        SubtypeName: string;
        /**
         * 模板状态
         * @example `Normal`
         */
        Status: string;
        /**
         * 模板参数
         * @example `{"Container":{"Format":"flv"},"Video":{},"Audio":{}}`
         */
        TemplateConfig: string;
    }[];
}

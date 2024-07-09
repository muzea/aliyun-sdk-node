export interface ListCustomTemplatesResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板总数。
     * @example `20`
     */
    Total: number;
    /**
     * 模板信息列表。
     */
    CustomTemplateList: {
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
         * 模板子类型ID。
         * @example `2`
         */
        Subtype: number;
        /**
         * 模板子类型名称。
         * @example `AudioTranscode`
         */
        SubtypeName: string;
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
         * 模板参数。
         * @example `{"Container":{"Format":"mp3"},"Audio":{"Codec":"mp3","Bitrate":"64","Samplerate":"22050","Channels":"2"}}`
         */
        TemplateConfig: string;
        /**
         * 模板创建时间。
         * @example `2022-07-12T16:17:54Z`
         */
        CreateTime: string;
        /**
         * 模板修改时间。
         * @example `2022-07-12T16:17:54Z`
         */
        ModifiedTime: string;
    }[];
}

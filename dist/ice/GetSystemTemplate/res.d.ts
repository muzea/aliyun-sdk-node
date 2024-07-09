export interface GetSystemTemplateResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板信息
     */
    SystemTemplate: {
        /**
         * 模板ID
         * @example `S00000001-100060`
         */
        TemplateId: string;
        /**
         * 模板名称
         * @example `M3U8-2K`
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
         * @example `Normal`
         */
        SubtypeName: string;
        /**
         * 模板状态
         * @example `Normal`
         */
        Status: string;
        /**
         * 模板参数
         * @example `{"Container":{"Format":"m3u8"},"TransConfig":{"TransMode":"onepass"},"Video":{"Codec":"H.264","Maxrate":8000,"Preset":"medium","PixFmt":"yuv420p","Width":2048,"Bitrate":3500},"Audio":{"Codec":"aac","Bitrate":160,"Samplerate":44100,"Channels":2}}`
         */
        TemplateConfig: string;
    };
}

export interface ModifyAppStreamingOutTemplateRequest {
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `wv7N****`
     */
    "AppId": string;
    /**
     * 模板。
     */
    "StreamingOutTemplate": {
        /**
         * 模板名称。
         * @example `模板`
         */
        Name: string;
        /**
         * 布局列表。
         */
        LayoutIds: string[];
        /**
         * 编码选项。
         * @example `1`
         */
        MediaEncode: number;
        /**
         * 模板ID。
         * @example `ac7N****`
         */
        TemplateId: string;
    };
}

export interface CreateAppStreamingOutTemplateRequest {
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `ac7N****`
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
         * 布局ID列表。
         */
        LayoutIds: string[];
        /**
         * 编码选项。
         * @example `1`
         */
        MediaEncode: number;
    };
}

export interface DeleteAppStreamingOutTemplateRequest {
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `wv7N****`
     */
    "AppId": string;
    /**
     * 模板信息。
     */
    "StreamingOutTemplate": {
        /**
         * 模板ID。
         * @example `xd4c****`
         */
        TemplateId: string;
    };
}

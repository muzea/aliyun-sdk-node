export interface DescribePluginTemplatesResponse {
    /**
     * 请求ID。
     * @example `EF924FE4-2EDD-4CD3-89EC-34E4708574E7`
     */
    RequestId: string;
    Templates: {
        /**
         * 模板列表
         */
        Template: {
            /**
             * 插件模版标题
             * @example `template title`
             */
            Title: string;
            /**
             * 文档锚点。
             * @example `anchor`
             */
            DocumentAnchor: string;
            /**
             * 描述信息。
             * @example `balabala`
             */
            Description: string;
            /**
             * 文档ID
             * @example `41079`
             */
            DocumentId: string;
            /**
             * 样例。
             * @example `1`
             */
            Sample: string;
        }[];
    };
}

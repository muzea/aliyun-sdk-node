export interface DescribePluginSchemasResponse {
    /**
     * 本次请求的ID。
     * @example `2D39D1B3-8548-508A-9CE2-7F4A3F2A7989`
     */
    RequestId: string;
    PluginSchemas: {
        /**
         * 插件模式列表
         */
        PluginSchema: {
            /**
             * 插件标题
             * @example `plugin schema title`
             */
            Title: string;
            /**
             * 插件描述
             * @example `plugin scheme description`
             */
            Description: string;
            /**
             * 插件名称
             * @example `VPC_C`
             */
            Name: string;
            /**
             * 文档ID
             * @example `4107**`
             */
            DocumentId: string;
            /**
             * 是否支持分类
             * @example `true`
             */
            SupportClassic: boolean;
        }[];
    };
}

export interface DescribeRenderingInstanceConfigurationRequest {
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
    /**
     * 需要查询的配置内容，默认查全量模块
     */
    "Configuration"?: {
        /**
         * 模块名称
         * @example `location`
         */
        ModuleName: string;
        /**
         * 需要查询的属性名称列表，默认查全量
         */
        AttributeNames: string[];
    }[];
}

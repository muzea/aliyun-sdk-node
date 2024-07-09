export interface DeleteRenderingInstanceConfigurationRequest {
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
    /**
     * 配置内容，默认清理所有已配置模块
     */
    "Configuration"?: {
        /**
         * 模块名称
         * @example `location`
         */
        ModuleName: string;
        /**
         * 要清除配置的属性名列表，默认清理该模块所有已配置属性
         */
        AttributeNames: string[];
    }[];
}

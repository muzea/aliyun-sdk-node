export interface DescribeConfigTemplatesResponse {
    ConfigTemplates: {
        /**
         * 配置结果项数组
         */
        ConfigTemplate: {
            /**
             * 配置模板的描述信息
             * @example `this is a new description.`
             */
            TemplateDescription: string;
            /**
             * 应用名称，表示配置模板所在的应用
             * @example `testApplication`
             */
            AppName: string;
            /**
             * 配置模板更新时间
             * @example `1562298470970`
             */
            UpdateTime: number;
            /**
             * 技术栈ID
             * @example `ws-6c937c98a9c0296d0c48*****`
             */
            StackId: string;
            /**
             * 部署包版本标签
             * @example `1562226365`
             */
            PkgVersionLabel: string;
            /**
             * 配置模板的建立时间
             * @example `1562298470970`
             */
            CreateTime: number;
            /**
             * 应用ID，要查询此应用上的模板
             * @example `wa-5d1d9d8c85c7f86e2ef*****`
             */
            AppId: string;
            /**
             * 技术栈名称
             * @example `Tomcat 8.5 / Java 8 / Aliyun Linux 2.1903`
             */
            StackName: string;
            /**
             * 部署包版本ID
             * @example `wp-5d1daece08350d1dd94*****`
             */
            PkgVersionId: string;
            /**
             * 配置模板名称
             * @example `new-template-name`
             */
            TemplateName: string;
            /**
             * 配置模板ID
             * @example `wct-5d1eca8dd56beb722b7*****`
             */
            TemplateId: string;
        }[];
    };
    /**
     * 结果总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `5CD6AF45-920A-4F5C-BD00-B41D6AE*****`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 查询页面大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询页面数量
     * @example `1`
     */
    PageNumber: number;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}

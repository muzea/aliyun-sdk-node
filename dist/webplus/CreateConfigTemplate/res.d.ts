export interface CreateConfigTemplateResponse {
    /**
     * 配置模板信息
     */
    ConfigTemplate: {
        /**
         * 上次更新时间
         * @example `1562298470970`
         */
        UpdateTime: number;
        /**
         * 配置模板创建时间
         * @example `1562589211442`
         */
        CreateTime: number;
        /**
         * 配置模板类型
         * @example `web`
         */
        TemplateType: string;
        /**
         * 技术栈名称
         * @example `Java 8 / Aliyun Linux 2.1903`
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
         * 模板描述信息
         * @example `this is an new template`
         */
        TemplateDescription: string;
        /**
         * 应用名称
         * @example `app1`
         */
        AppName: string;
        /**
         * 技术栈ID
         * @example `ws-6c937c98a9c0296d0c48*****`
         */
        StackId: string;
        /**
         * 部署包版本标签
         * @example `20190726.135654`
         */
        PkgVersionLabel: string;
        /**
         * 应用ID
         * @example `wa-5d1d9d8c85c7f86e2ef*****`
         */
        AppId: string;
        /**
         * 配置模板ID
         * @example `wct-5d1ec866d56beb722b7*****`
         */
        TemplateId: string;
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `7C8AA286-14EA-4713-B81D-859BECF1****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}

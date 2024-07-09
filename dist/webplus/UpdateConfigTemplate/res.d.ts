export interface UpdateConfigTemplateResponse {
    /**
     * 配置模板信息
     */
    ConfigTemplate: {
        /**
         * 模板所在应用名称
         * @example `app1`
         */
        AppName: string;
        /**
         * 上次更新时间
         * @example `1562587235328`
         */
        UpdateTime: number;
        /**
         * 技术栈ID
         * @example `ws-6c937c98a9c0296d0c48*****`
         */
        StackId: string;
        /**
         * 模板创建时间
         * @example `1562299021581`
         */
        CreateTime: number;
        /**
         * 应用ID，模板所在应用ID
         * @example `wa-5d1d9d8c85c7f86e2ef*****`
         */
        AppId: string;
        /**
         * 技术栈名称
         * @example `Tomcat 8.5 / Java 8 / Aliyun Linux 2.1903`
         */
        StackName: string;
        /**
         * 模板名称
         * @example `new-template-name`
         */
        TemplateName: string;
        /**
         * 模板ID
         * @example `wct-5d1eca8dd56beb722b7*****`
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
     * @example `CE6E878B-DDB4-4563-9263-D75057C*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}

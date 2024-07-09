export interface CreateTemplateRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 模板名称。
         * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
         * @example `service-account-template`
         */
        name: string;
        /**
         * YAML格式的模板内容。
         * @example `apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: test-sa`
         */
        template: string;
        /**
         * 编排模板标签。
         * @example `test`
         */
        tags: string;
        /**
         * 编排模板描述。
         * @example `this is test`
         */
        description: string;
        /**
         * 模板类型，取值可以是任意值。
         * - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。
         * - 当取值是`compose`时将不在控制台展示。
         * 推荐设置为`kubernetes`。
         * 默认值：`compose`。
         * @example `kubernetes`
         */
        template_type: string;
    };
}

export interface CreateAliasRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 是否为新版本控制台页面
     * @example `true`
     */
    "newMode"?: boolean;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 别名
         * @example `test`
         */
        alias: string;
        /**
         * 关联索引
         * @example `index`
         */
        index: string;
    };
}

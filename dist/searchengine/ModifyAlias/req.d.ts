export interface ModifyAliasRequest {
    /**
     * 实例ID
     * @example `ha-cn-0ju2re****`
     */
    "instanceId": string;
    /**
     * 别名
     * @example `test`
     */
    "alias": string;
    /**
     * 请求结构。
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

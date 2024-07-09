export interface DeletePluginRequest {
    /**
     * 指定要删除的API网关插件的ID
     * @example `9a3f1a5279434f2ba74ccd91c295af9f`
     */
    "PluginId": string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签键。
         * n 的取值范围为 `[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`
         * @example `' '`
         */
        Value: string;
    }[];
}

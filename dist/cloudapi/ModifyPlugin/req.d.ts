export interface ModifyPluginRequest {
    /**
     * 指定要修改的API网关插件的ID
     * @example `a96926e82f994915a8da40a119374537 `
     */
    "PluginId": string;
    /**
     * 插件名称。支持大小写英文字母、中文、数字、下划线（_）、长度为[4,50]个字符, 且不能以下划线开头。
     * @example `modifyCors`
     */
    "PluginName"?: string;
    /**
     * 修改插件定义语句
     * @example `Plugin definition`
     */
    "PluginData"?: string;
    /**
     * 描述，限200字以内
     * @example `modify plugin first`
     */
    "Description"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
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

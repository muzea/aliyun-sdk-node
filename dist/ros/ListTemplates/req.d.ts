export interface ListTemplatesRequest {
    /**
     * 模板列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围：1~50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 模板名称。仅在ShareType为Private时生效。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyTemplate`
     */
    "TemplateName"?: string;
    /**
     * 模板的共享类型。
     * 取值：
     * - Private（默认值）：模板为用户自己所拥有。
     * - Shared：模板由其他用户所共享。
     * - Official：官方共享模板。
     * @example `Private`
     */
    "ShareType"?: string;
    /**
     * 标签。最多支持指定20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。仅在ShareType为Private时生效。
         * 最多支持指定20个标签键。
         * @example `usage`
         */
        Key: string;
        /**
         * 标签值。仅在ShareType为Private时生效。
         * 最多支持指定20个标签值。
         * @example `deploy`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否查询标签信息。取值：
     * - Enabled：查询。
     * - Disabled（默认值）：不查询。
     * @example `Enabled`
     */
    "IncludeTags"?: string;
}

export interface AddFaceEntityRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * 实体ID，可以包含数字、字母和下划线。
     * @example `mm2`
     */
    "EntityId": string;
    /**
     * 输入标签，最多可以添加10个标签，具体格式要求如下：
     * - 标签中仅支持下划线（_）和连字符（-），不支持其他特殊字符。
     * - 标签之间使用英文逗号（,）分隔。
     * @example `鹿班`
     */
    "Labels"?: string;
}

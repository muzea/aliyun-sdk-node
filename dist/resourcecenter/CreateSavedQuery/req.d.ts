export interface CreateSavedQueryRequest {
    /**
     * 模板名称。
     * - 长度范围：1~64个字符或汉字。
     * - 格式：允许输入汉字、英文字母、数字、下划线（_）和短划线（-）。
     * - 模板名称必须唯一。
     * @example `查询我的所有资源。`
     */
    "Name": string;
    /**
     * 模板表达式。
     * @example `SELECT * FROM resources;`
     */
    "Expression": string;
    /**
     * 模板描述。
     * 长度范围：1~256个字符或汉字。
     * @example `查询所有资源。`
     */
    "Description"?: string;
}

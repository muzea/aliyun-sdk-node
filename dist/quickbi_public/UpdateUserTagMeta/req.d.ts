export interface UpdateUserTagMetaRequest {
    /**
     * 指定的TagID。
     * - 格式检查：最大长度64个字符。
     * @example `e82f6c6c0333431bad0225b2f85e****`
     */
    "TagId": string;
    /**
     * 标签名称。
     * - 格式检查：最大长度50个字符。
     * - 只允许输入中英文数字和/\|[]()符号。
     * @example `职位`
     */
    "TagName": string;
    /**
     * 标签描述。
     * - 格式检查：最大长度255个字符。
     * @example `部门内的工作职位`
     */
    "TagDescription"?: string;
}

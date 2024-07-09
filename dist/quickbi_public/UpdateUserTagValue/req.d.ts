export interface UpdateUserTagValueRequest {
    /**
     * 待修改标签值的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `fe67f61a35a94b7da1a34ba174a7****`
     */
    "UserId": string;
    /**
     * 待修改的标签ID。
     * @example `pop_001`
     */
    "TagId": string;
    /**
     * 待修改的标签值。
     * - 如果需要清除该标签，则设置标签值为（$NULL$）。
     * - 多值请用英文逗号分割。
     * - 格式校验，最大长度：3000字符
     * @example `产品总监`
     */
    "TagValue": string;
}

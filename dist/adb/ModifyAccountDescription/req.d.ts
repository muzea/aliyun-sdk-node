export interface ModifyAccountDescriptionRequest {
    /**
     * 集群ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 账号名。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 修改账号备注：
     * - 以中文、英文字母开头。
     * - 可以包含中文、英文字符、数字、”_”、” -”。
     * - 不能以`http://`、`https:// `开头。
     * - 长度为2-256个字符。
     * @example `AccDesc`
     */
    "AccountDescription": string;
}

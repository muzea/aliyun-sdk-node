export interface ModifyAccountDescriptionRequest {
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 账号名称。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 账号备注信息，备注信息需满足如下要求：
     * * 不能以`http://`或`https://`开头。
     * * 长度为2~256个字符。
     * @example `test`
     */
    "AccountDescription": string;
}

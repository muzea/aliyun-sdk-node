export interface ListOpenAccountsRequest {
    /**
     * 返回列表最大长度
     * @example `20`
     */
    "Length"?: number;
    /**
     * 返回列表起始位置
     * @example `1`
     */
    "Start"?: number;
    /**
     * 手机号
     * @example `1390000****`
     */
    "Mobile"?: string;
    /**
     * 电子邮箱
     * @example `test@alibaba.com`
     */
    "Email"?: string;
    /**
     * 显示名
     * @example `displaynametest`
     */
    "DisplayName"?: string;
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
}

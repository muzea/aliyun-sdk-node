export interface QueryMsConfigClientsRequest {
    /**
     * 属性自增长 ID，通过查询属性方式获取 ID
     * @example `1`
     */
    "AttributeId": number;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 分页参数，页数
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页参数，分页大小
     * @example `10`
     */
    "PageSize"?: string;
}

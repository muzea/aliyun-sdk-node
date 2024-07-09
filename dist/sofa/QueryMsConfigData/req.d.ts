export interface QueryMsConfigDataRequest {
    /**
     * 属性自增长 ID，可以通过查询属性接口获取 ID
     * @example `1`
     */
    "AttributeId": number;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
}

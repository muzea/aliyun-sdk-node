export interface QueryMsConfigClientValuesRequest {
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
    /**
     * 查询的 IP 列表，英文逗号隔开
     * @example `127.0.0.1,127.0.0.2`
     */
    "Ips": string;
}

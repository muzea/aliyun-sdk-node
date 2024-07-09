export interface GrayPushMsConfigDataRequest {
    /**
     * 属性自增长 ID，可以通过查询属性接口获取 ID
     * @example `1`
     */
    "AttributeId": number;
    /**
     * 属性推送值
     * @example `hello world`
     */
    "Data"?: string;
    /**
     * 灰度推送的机器列表，多个 IP 之间英文逗号隔开
     * @example `127.0.0.1,127.0.0.2`
     */
    "Hosts": string;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 操作人
     * @example `wang.li`
     */
    "Operator"?: string;
}

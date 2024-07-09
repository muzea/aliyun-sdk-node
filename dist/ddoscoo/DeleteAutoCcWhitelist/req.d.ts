export interface DeleteAutoCcWhitelistRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 白名单IP的详细信息，使用JSON格式的字符串表述，具体结构如下。
     * - **src：String**类型，必选，白名单IP。
     * @example `[{"src":"1.1.1.1"},{"src":"2.2.2.2"}]`
     */
    "Whitelist": string;
}

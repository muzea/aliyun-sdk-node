export interface ListDateSourceGenerationsRequest {
    /**
     * 实例id。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据源名称。
     * @example `ha-cn-pl32rf0****_test_api`
     */
    "dataSourceName": string;
    /**
     * 有效状态（默认为true）
     * 1. true 返回Task执行完成且未过期的generation
     * 2. false 返回所有generation
     * @example `true`
     */
    "validStatus"?: boolean;
    /**
     * 数据源部署机房
     * @example `bj_vpc_domain_1`
     */
    "domainName": string;
}

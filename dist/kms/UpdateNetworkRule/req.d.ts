export interface UpdateNetworkRuleRequest {
    /**
     * 要更新的网络控制规则名称。
     * @example `networkrule_test`
     */
    "Name": string;
    /**
     * 更新后的描述信息。
     * @example `Create by kst-hzz62ee817bvyyr5****`
     */
    "Description"?: string;
    /**
     * 更新后的私网IP地址或者私网网段，各个IP地址间用半角逗号（,）分隔。
     * @example `["192.10.XX.XX","192.168.XX.XX/24"]`
     */
    "SourcePrivateIp"?: string;
}

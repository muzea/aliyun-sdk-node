export interface CreateNetworkRuleRequest {
    /**
     * 网络控制规则名称。
     * @example `networkrule_test`
     */
    "Name": string;
    /**
     * 网络类型。
     * 取值仅支持Private，即仅支持私网IP。
     * @example `Private`
     */
    "Type": string;
    /**
     * 描述信息。
     * @example `networkrule description`
     */
    "Description"?: string;
    /**
     * 私网IP地址或者私网网段，各个IP地址间用半角逗号（,）分隔。
     * @example `["192.10.XX.XX","192.168.XX.XX/24"]`
     */
    "SourcePrivateIp"?: string;
}

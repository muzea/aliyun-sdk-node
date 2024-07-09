export interface RemoveAccessControlListEntryRequest {
    /**
     * 访问控制策略ID。
     * @example `acl-bp12ag0xxcfhq1ll68wp9`
     */
    "AclId": string;
    /**
     *
     * 设置访问控制策略组。
     * * entry：访问控制策略组中的IP条目，可以指定IP地址或IP地址段（CIDR block），多个IP地址/地址段之间用逗号隔开。。
     * * comment：访问控制策略组备注说明。
     * >如果访问控制策略组关联了监听，不允许删除组内的所有IP条目。
     * @example `[{\"entry\":\"192.168.1.0/24\",\"comment\":\"WhiteIp\"}]`
     */
    "AclEntrys"?: string;
}

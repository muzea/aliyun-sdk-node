export interface AddAccessControlListEntryRequest {
    /**
     * 访问控制策略组ID。
     * @example `acl-bp1ohqkonqybecf4llbrc`
     */
    "AclId": string;
    /**
     * 设置访问控制策略组。
     * * entry：访问控制策略组中要添加的IP条目，可以指定IP地址段（CIDR block），多个IP地址段之间用逗号隔开。
     * * comment：访问控制策略组备注说明。
     * >每次最多可添加50个条目，如果添加的IP条目重复，则只会添加一条，其余重复条目会被忽略。IP条目必须是IP地址段。
     * @example `[{'entry': '192.168.1.0/24', 'comment': 'test'}]`
     */
    "AclEntrys"?: string;
}

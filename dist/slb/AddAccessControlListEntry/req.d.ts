export interface AddAccessControlListEntryRequest {
    /**
     * 访问控制策略组的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组ID。
     * @example `acl-bp1l0kk4gxce43kze*****`
     */
    "AclId"?: string;
    /**
     * 设置访问控制策略组。取值：
     * * **entry**：访问控制策略组中要添加的IP条目，可以指定IP地址段（CIDR block），多个IP地址段之间用半角逗号（,）隔开。
     * * **comment**：访问控制策略组备注说明。
     * >每次最多可添加50个条目，如果添加的IP条目重复，则只会添加一条，其余重复条目会被忽略。IP条目必须是IP地址段。
     * @example `[{"entry":"10.0.**.**​/24","comment":"privaterule1"},{"entry":"192.168.**.**​/16","comment":"privaterule2"}]`
     */
    "AclEntrys"?: string;
}

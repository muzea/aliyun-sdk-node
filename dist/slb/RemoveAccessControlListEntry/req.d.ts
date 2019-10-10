interface RemoveAccessControlListEntryRequest {
    /**
    * 访问控制策略组的地域ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制策略组ID。
    * @example `acl-bp1l0kk4gxce43kzet04s`
    */ "AclId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    *
    * 访问控制策略组中要添加的IP条目，可以指定IP地址或IP地址段（CIDR block），多个IP地址/地址段之间用逗号隔开。
    * **注意**：如果访问控制策略组关联了监听，不允许删除组内的所有IP条目。
    * @example `[{"entry":"10.0.0.0/24","comment":"privaterule1"}]`
    */ "AclEntrys"?: string;
}
export { RemoveAccessControlListEntryRequest };
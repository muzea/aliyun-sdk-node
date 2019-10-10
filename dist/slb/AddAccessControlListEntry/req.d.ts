interface AddAccessControlListEntryRequest {
    /**
    * 访问控制策略组的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制策略组ID。
    * @example `acl-bp1l0kk4gxce43kze*****`
    */ "AclId"?: string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 访问控制策略组中要添加的IP条目，可以指定IP地址或IP地址段（CIDR block），多个IP地址/地址段之间用逗号隔开。
    * > 每次最多可添加50个条目。
    * @example `[{"entry":"10.0.0.0/24","comment":"privaterule1"},{"entry":"192.168.0.0/16","comment":"privaterule2"}]`
    */ "AclEntrys"?: string;
}
export { AddAccessControlListEntryRequest };
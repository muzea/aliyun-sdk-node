interface CreateAccessControlListRequest {
    /**
    * 访问控制策略组的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制策略组名称，需要保证Region内唯一。
    * @example `rule1`
    */ "AclName": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * IP版本，可以设置为ipv4或者ipv6。
    * > 目前支持创建IPv6实例且实例类型必须为性能保障型实例的可用区如下：华东1地域的E、F两个可用区、华北2地域的F、G两个可用区、华东2地域的所有可用区和华南1地域的D、E两个可用区。
    * @example `ipv4`
    */ "AddressIPVersion"?: string;
    "ResourceGroupId"?: string;
}
export { CreateAccessControlListRequest };
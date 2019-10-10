interface AddListenerWhiteListItemRequest {
    /**
    * 实例所在地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例前端使用的端口。
    * @example `80`
    */ "ListenerPort": number;
    /**
    * 访问控制列表。
    * 监听的**AccessControlStatus**为**open_white_list**时有效。
    * 支持输入IP地址或IP地址段（CIDR block形式），多个IP地址或地址段用逗号（,）分割。
    * 不允许输入0.0.0.0或0.0.0.0/0。您可以通过调用[SetListenerAccessControlStatus](~~27599~~)接口将AccessControlStatus的值设置为close，关闭访问控制。
    * @example `1.1.1.1,1.1.1.0/21`
    */ "SourceItems": string;
    /**
    * 负载均衡实例的ID。
    * @example `139a00604ad-cn-east-hangzhou-01`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "ListenerProtocol"?: string;
    "Tags"?: string;
}
export { AddListenerWhiteListItemRequest };
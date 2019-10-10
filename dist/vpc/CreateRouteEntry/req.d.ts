interface CreateRouteEntryRequest {
    /**
    * 路由表所属地域的ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 自定义路由条目的目标网段，支持IPv4和IPv6的目标网段。需满足以下要求：
    *
    * - 目标网段不能指向100.64.0.0/10或被100.64.0.0/10包含。
    *
    * - 同一张路由表内的不同路由条目的目标网段不能相同。
    *
    * - 如果提供的目标网段是一个IP地址，掩码将按照32位处理。
    * - 如果提供的目标网段是一个IPv6地址，掩码将按照128位处理。
    * @example `192.168.0.1/24`
    */ "DestinationCidrBlock": string;
    "OwnerId"?: number;
    /**
    *  路由表ID。
    * @example `vtb-bp145q7glnuzd****`
    */ "RouteTableId": string;
    /**
    * 下一跳实例的ID。
    * @example `ri-2zeo3xzyf38r4****`
    */ "NextHopId"?: string;
    "PrivateIpAddress"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-001****`
    */ "ClientToken"?: string;
    "RouteEntryName"?: string;
    /**
    * 下一跳的类型，取值：
    * - ** Instance**：ECS实例（默认值）
    * - **HaVip**：高可用虚拟IP
    * - **RouterInterface**：路由器接口
    * - **NetworkInterface**：弹性网卡
    * - **VpnGateway**：VPN网关
    * - **IPv6Gateway**：IPv6网关
    * @example `RouterInterface`
    */ "NextHopType"?: string;
    "NextHopList"?: string[];
}
export { CreateRouteEntryRequest };
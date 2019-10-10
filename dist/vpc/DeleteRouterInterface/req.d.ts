interface DeleteRouterInterfaceRequest {
    /**
    *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  路由器接口的ID。
    * @example `ri-2zeo3xzyf38r4urz****`
    */ "RouterInterfaceId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `qwefcc12123333334f`
    */ "ClientToken"?: string;
}
export { DeleteRouterInterfaceRequest };
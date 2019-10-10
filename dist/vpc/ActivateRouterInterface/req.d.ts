interface ActivateRouterInterfaceRequest {
    /**
    *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  路由器接口的ID。
    * @example `ri-2zeo3xzyf38r4urz****`
    */ "RouterInterfaceId": string;
    "OwnerId"?: number;
}
export { ActivateRouterInterfaceRequest };
interface ModifyRouteEntryRequest {
    /**
    * 路由条目所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 自定义路由条目ID。
    * @example `rte-1234567890`
    */ "RouteEntryId": string;
    /**
    * 路由条目的名称。
    * 长度为2~128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `EntryName`
    */ "RouteEntryName"?: string;
    "OwnerId"?: number;
}
export { ModifyRouteEntryRequest };
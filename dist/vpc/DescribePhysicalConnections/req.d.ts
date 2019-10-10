interface DescribePhysicalConnectionsRequest {
    /**
    * 物理专线所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  列表的页码，默认值为1。
    * @example `10`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `1`
    */ "PageSize"?: number;
    "Filter"?: string[];
    /**
    * 是否返回未生效订单。
    * @example `false`
    */ "IncludeReservationData"?: boolean;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
    * @example `23243242rggyt`
    */ "ClientToken"?: string;
}
export { DescribePhysicalConnectionsRequest };
interface DescribeExpressCloudConnectionsRequest {
    /**
    * 高速上云服务实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    "Filter"?: string[];
}
export { DescribeExpressCloudConnectionsRequest };
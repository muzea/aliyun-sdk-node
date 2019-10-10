interface DescribeVpnSslServerLogsRequest {
    /**
    * SSL服务端所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * SSL服务端的ID。
    * @example `vss-bp155e9yclsg1xgq4****`
    */ "VpnSslServerId": string;
    "OwnerId"?: number;
    /**
    * 日志起始时间。
    * @example `2018020201`
    */ "From"?: number;
    /**
    * 日志结束时间。
    * @example `2018020206`
    */ "To"?: number;
    /**
    * 日志周期。
    * @example `10`
    */ "MinutePeriod"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeVpnSslServerLogsRequest };
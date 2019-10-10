interface DescribeStreamsRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 视频流列表的页码。起始值：1。
    * 默认值：1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 关联的计算工作组ID。
    * @example `51`
    */ "JobGroupId": string;
}
export { DescribeStreamsRequest };
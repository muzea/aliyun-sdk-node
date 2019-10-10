interface DescribeRtcUserCntDataRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 起始时间，UTC格式。
    * @example `2018-01-29T00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间，UTC格式。
    * @example `2018-01-29T00:00:00Z`
    */ "EndTime"?: string;
    /**
    * 应用ID，不填则返回所有应用的汇总数据。
    *
    * @example `AppId`
    */ "AppId"?: string;
    /**
    * 服务区域。
    * @example `cn`
    */ "ServiceArea"?: string;
    /**
    * 时间粒度参数，单位：秒。
    * 取值为**3600**（小时粒度） 或**86400**（天粒度），默认为**3600**。
    *
    * @example `3600`
    */ "Interval"?: string;
}
export { DescribeRtcUserCntDataRequest };
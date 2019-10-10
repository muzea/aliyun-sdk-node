interface DescribeHlsLiveStreamRealTimeBpsDataRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * DescribeHlsLiveStreamRealTimeBpsData
    * @example `2018-08-08T00:00:00Z`
    */ "Time": string;
    /**
    * 域名列列表，以逗号分割，注意必须是英文字符
    * @example `live.aiyun.com`
    */ "DomainName"?: string;
}
export { DescribeHlsLiveStreamRealTimeBpsDataRequest };
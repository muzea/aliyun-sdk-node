interface DescribePlayVideoStatisRequest {
    "RegionId"?: string;
    /**
    * 指定时间段的结束时间，UTC格式。
    * @example `2016-06-30T19:00:00Z`
    */ "EndTime": string;
    /**
    * 指定视频的视频ID。
    * @example `2a8d4cb9ecbb487681473a153aba8fda`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * 指定时间段的起始时间，UTC格式。
    * @example `2016-06-29T19:00:00`
    */ "StartTime": string;
}
export { DescribePlayVideoStatisRequest };
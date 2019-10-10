interface ListTranscodeTaskRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `ddddddddd`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * 开始时间，UTC时间：**yyyy-MM-ddTHH:mm:ssZ**。
    * @example `2019-01-23T12:35:12Z`
    */ "StartTime"?: string;
    /**
    * 结束时间，UTC时间：**yyyy-MM-ddTHH:mm:ssZ**。
    * @example `2019-01-23T12:35:12Z`
    */ "EndTime"?: string;
    /**
    * 查询页数据大小，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 查询数据的当前页码，默认值为**1**。
    * @example `1`
    */ "PageNo"?: number;
}
export { ListTranscodeTaskRequest };
interface GetVideoInfoRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `9ae2af63-6ca6-4835-b0c1-0412f44891fc`
    */ "VideoId": string;
    "OwnerId"?: number;
    "ResultTypes"?: string;
    /**
    * 参数暂不可用。
    * @example `custom`
    */ "AdditionType"?: string;
}
export { GetVideoInfoRequest };
interface GetTranscodeSummaryRequest {
    "RegionId"?: string;
    /**
    * 视频ID，多个用英文逗号分隔，最多支持10个。
    * @example `"ddddddddd,ggggggg,hhhhhhh"`
    */ "VideoIds": string;
    "OwnerId"?: number;
}
export { GetTranscodeSummaryRequest };
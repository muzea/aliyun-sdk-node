interface GetVideoInfosRequest {
    "RegionId"?: string;
    /**
    * 视频ID列表。多个用逗号分隔，最多支持20个。
    * @example `7753d144efd74dfd8e649c6c45fe0579,7753d144efd74dfd8e649c6c45fe0570`
    */ "VideoIds": string;
    "OwnerId"?: number;
    /**
    * 参数暂不可用。
    * @example `aaa`
    */ "AdditionType"?: string;
}
export { GetVideoInfosRequest };
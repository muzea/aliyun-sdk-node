interface DeleteVideoRequest {
    "RegionId"?: string;
    /**
    * 视频ID列表，多个用逗号分隔，最多支持10个。
    * @example `e44ebf114f4d429e9b2d2adbea8bf5b5,e44ebf114f4d429e9b2d2adbea8bf55`
    */ "VideoIds": string;
    "OwnerId"?: number;
}
export { DeleteVideoRequest };
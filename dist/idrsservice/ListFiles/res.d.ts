export interface ListFilesResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 数据
     * @example `['d0388a41-30c6-4c74-af83-a1f923ce1725/process/', 'd0388a41-30c6-4c74-af83-a1f923ce1725/video_12_14_09_05_41.mp4', 'd0388a41-30c6-4c74-af83-a1f923ce1725/video_12_14_09_05_41.mp4.meta']`
     */
    Data: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}

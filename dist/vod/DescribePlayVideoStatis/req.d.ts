export interface DescribePlayVideoStatisRequest {
    /**
     * 指定查询的起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T13:00:00Z`
     */
    "StartTime": string;
    /**
     * 指定查询的结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 结束时间需大于起始时间，且与起始时间的最大跨度为180天。
     * @example `2016-06-30T13:00:00Z`
     */
    "EndTime": string;
    /**
     * 要查询的视频的视频ID，仅支持传入一个视频ID。可通过以下方式获取：
     * - 可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看。
     * - 调用[CreateUploadVideo](~~CreateUploadVideo~~)接口获取上传地址和凭证时会返回。
     * - 音视频上传后，调用[SearchMedia ](~~SearchMedia~~)接口查询视频时会返回。
     * @example `2a8d4cb9ecbb487681473****aba8fda`
     */
    "VideoId": string;
}

export interface ListTranscodeTaskRequest {
    /**
     * 音/视频ID。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[SearchMedia](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `d4860fcc6a5*****bce9fed52e893824`
     */
    "VideoId": string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-01-23T12:35:12Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间（需晚于开始时间）。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-01-23T12:40:12Z`
     */
    "EndTime"?: string;
    /**
     * 查询页数据大小，传入此参数，立刻设置返回数据每页显示的条数。最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询数据的当前页码。传入此参数，可指定查询数据从第几页开始返回。默认值为**1**。
     * @example `1`
     */
    "PageNo"?: number;
}

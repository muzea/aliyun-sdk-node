export interface ListSnapshotsRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 调用[CreateUploadVideo](~~CreateUploadVideo~~)接口获取上传地址和凭证时会返回。
     * - 调用[SearchMedia](~~SearchMedia~~)接口查询视频时会返回。
     * @example `d3e680e618708fbf2cae7cc931****`
     */
    "VideoId": string;
    /**
     * 返回的截图类型。取值：
     * - **CoverSnapshot**（默认值）：封面截图。
     * - **NormalSnapshot**：普通截图。
     * - **SpriteSnapshot**：雪碧截图。
     * - **SpriteOriginSnapshot**：雪碧图原始图。
     * - **WebVttSnapshot**：WebVtt截图。
     * @example `CoverSnapshot`
     */
    "SnapshotType"?: string;
    /**
     * 截图访问地址的过期时间。默认值：**3600**，最小值：**3600**，单位：秒。
     * - 该参数只有开启了[URL鉴权](~~57007~~)才会生效。
     * - 当设置的时间小于**3600秒**时，默认为**3600秒**。
     * - 如果返回的是OSS地址，为降低源站安全风险，最大值为**2592000**（即30天）。
     * @example `3600`
     */
    "AuthTimeout"?: string;
    /**
     * 翻页大小，每页显示条数。默认值：**20**，最大值：**100**。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 翻页页号。默认值：**1**。
     * @example `1`
     */
    "PageNo"?: string;
}

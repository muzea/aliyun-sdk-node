export interface SubmitDigitalWatermarkExtractJobRequest {
    /**
     * 待提取水印的视频的视频ID，仅支持传入单个视频ID。可通过以下方式获取：
     * - 登录[视频点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[SearchMedia](~~SearchMedia~~)接口请求后会返回视频ID（VideoId）。
     * @example `0222e203cf80f9c22870a4d2c****`
     */
    "MediaId": string;
    /**
     * 水印提取类型。取值：
     * - **TraceMark**：溯源水印。
     * - **CopyrightMark**：版权水印。
     * @example `TraceMark`
     */
    "ExtractType": string;
}

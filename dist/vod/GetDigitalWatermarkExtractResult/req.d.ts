export interface GetDigitalWatermarkExtractResultRequest {
    /**
     * 待查询的视频ID，仅支持传入单个视频ID。可通过以下方式获取：
     * - 登录[视频点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[SearchMedia](~~SearchMedia~~)接口请求后会返回视频ID（VideoId）。
     * @example `93ab850b4f6f54b6e91d24d81d4****`
     */
    "MediaId": string;
    /**
     * 水印提取类型。取值：
     * - **TraceMark**：溯源水印
     * - **CopyrightMark**：版权水印
     * @example `TraceMark`
     */
    "ExtractType": string;
    /**
     * 水印提取作业ID。
     * - 调用[SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~)接口后会返回。
     * - 传入该参数，则可查询指定水印提取作业ID的结果；不传，则默认返回该视频下所有历史水印提取作业的结果。
     * @example `2bf4390af9e5491c09cc720ad****`
     */
    "JobId"?: string;
}

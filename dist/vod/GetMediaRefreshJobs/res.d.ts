export interface GetMediaRefreshJobsResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 音/视频刷新或预热任务信息列表。
     */
    MediaRefreshJobs: {
        /**
         * 音/视频刷新或预热的任务ID。
         * @example `41d465e31957****`
         */
        MediaRefreshJobId: string;
        /**
         * 音/视频ID。
         * @example `ca3a8f6e4957b658067095869****`
         */
        MediaId: string;
        /**
         * 任务类型。取值：
         * - **Refresh**：刷新
         * - **Preload**：预热
         * @example `Preload`
         */
        TaskType: string;
        /**
         * 播放流的筛选策略。JSON格式，内容为[提交音视频刷新或预热任务](~~431095~~)接口的请求参数。
         * @example `{"Formats":"mp4,m3u8", "Definitions":"HD,SD",  " StreamType":"video",  "ResultType":"Single",  " SliceFlag":false, "SliceCount": 3}`
         */
        FilterPolicy: string;
        /**
         * 任务状态。取值：
         * - **success**：成功
         * - **fail**：失败
         * @example `success`
         */
        Status: string;
        /**
         * 成功被刷新或预热的播放URL。
         * @example `https://shenzhen.****.aliyuncdn.com/74401a4f546007bf845cd8840****.m3u8,https://shenzhen.****.aliyuncdn.com/24041e7d13582d86604d8****.m3u8`
         */
        SuccessPlayUrls: string;
        /**
         * 播放URL的刷新或预热的任务ID，一个URL对应一个任务ID。该任务ID用于[DescribeVodRefreshTasks](~~69214~~)接口查询每个播放URL的刷新或预热状态。
         * @example `70422****,9524****`
         */
        TaskIds: string;
        /**
         * 错误码。
         * 当提交刷新或预热任务失败时会有该字段。
         * @example `PreloadQueueFull`
         */
        ErrorCode: string;
        /**
         * 错误信息。
         * 当提交刷新或预热任务失败时会有该字段。
         * @example `Preload queue is full, please try again later!`
         */
        ErrorMessage: string;
        /**
         * 提交刷新或预热任务时传入的UserData信息。
         * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}`
         */
        UserData: string;
        /**
         * 任务创建时间。
         * @example `2022-05-20T08:23:22Z`
         */
        GmtCreate: string;
        /**
         * 任务修改时间。
         * @example `2022-05-21T08:23:22Z`
         */
        GmtModified: string;
    }[];
}

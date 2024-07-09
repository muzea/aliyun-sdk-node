export interface SetLiveStreamPreloadTasksResponse {
    /**
     * 预热任务设置失败的URL条数。
     * @example `0`
     */
    FailedURL: number;
    PreloadTasksMessages: {
        /**
         * 直播预热详细信息。
         */
        PreloadTasksMessage: {
            /**
             * 预热任务是否成功。取值：
             * - Successfully：成功。
             * - InternalError：失败。
             * @example `Successfully`
             */
            Description: string;
            /**
             * 直播URL。
             * @example `rtmp://guide.aliyundoc.com/liveApp****​/liveStream****`
             */
            PlayUrl: string;
            /**
             * 任务ID。
             * @example `yourTaskId`
             */
            TaskId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `36E0E523-E0C6-5D95-A465-A8EA2DCBA2A5`
     */
    RequestId: string;
    /**
     * 任务状态。取值：
     * - Success：成功。
     * - Failed：失败。
     * > 只要有一条任务创建失败即为失败。
     * @example `Success`
     */
    Status: string;
    /**
     * 预热任务设置成功的URL条数。
     * @example `1`
     */
    SuccessURL: number;
    /**
     * 预热任务里URL总条数。
     * @example `1`
     */
    TotalURL: number;
}

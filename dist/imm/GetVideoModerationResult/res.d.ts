export interface GetVideoModerationResultResponse {
    /**
     * 请求ID。
     * @example `VideoModeration-d0f0df1d-531d-4ab4-b353-e7f475******`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `test-project`
     */
    ProjectName: string;
    /**
     * 事件ID。
     * @example `05C-1XBQvsG2Tn5kBx2dUWo43******`
     */
    EventId: string;
    /**
     * 任务运行状态。取值范围如下：
     * - Running：任务运行中。
     * - Succeeded：任务执行完成，成功。
     * - Failed：任务执行完成，失败。
     * @example `Succeeded`
     */
    Status: string;
    /**
     * 任务错误码。
     * @example `ResourceNotFound`
     */
    Code: string;
    /**
     * 任务错误消息。
     * @example `The specified resource TaskId is not found.`
     */
    Message: string;
    /**
     * 任务开始时间。
     * @example `2023-04-03T10:20:41.432Z`
     */
    StartTime: string;
    /**
     * 任务结束时间。
     * @example `2023-04-03T10:20:56.87Z`
     */
    EndTime: string;
    /**
     * 用户自定义信息。
     */
    UserData: string;
    /**
     * 任务类型。
     * @example `VideoModeration`
     */
    TaskType: string;
    /**
     * 任务ID。
     * @example `VideoModeration-d0f0df1d-531d-4ab4-b353-e7f4750******`
     */
    TaskId: string;
    /**
     * 合规检测详情。
     */
    ModerationResult: {
        /**
         * 文件URI。
         * OSS文件的存储地址。地址规则为`oss://${bucketname}/${objectname}`，其中`bucketname`为和当前项目处于同一地域的OSS Bucket名称，`objectname`为文件路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
        /**
         * 审核结果建议。取值：
         * - **block**：违规。
         * - **review**：疑似。
         * - **pass**：通过。
         * @example `block`
         */
        Suggestion: string;
        /**
         * 类⽬列表。
         */
        Categories: string[];
        /**
         * 视频、动图检测帧相关信息。
         */
        Frames: {
            /**
             * 检测的总帧数。
             * @example `12`
             */
            TotalCount: number;
            /**
             * 违规的帧。
             */
            BlockFrames: {
                /**
                 * 违规的置信度。
                 * @example `10`
                 */
                Rate: number;
                /**
                 * 帧的偏移量。
                 * @example `1`
                 */
                Offset: number;
                /**
                 * 违规的标签。
                 * @example `{"teat":"val"}`
                 */
                Label: string;
            }[];
        };
    };
}

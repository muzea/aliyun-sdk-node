export interface GetImageModerationResultResponse {
    /**
     * 请求ID。
     * @example `E6A120B1-BEB3-0F63-A7C2-0783B6******`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `test-project`
     */
    ProjectName: string;
    /**
     * 事件ID。
     * @example `1B6-1XBMX3BixLMILvXVGtlkr******`
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
     * @example `2023-04-03T09:44:31.029Z`
     */
    StartTime: string;
    /**
     * 任务结束时间。
     * @example `2023-04-03T09:44:32Z`
     */
    EndTime: string;
    /**
     * 用户自定义信息。
     * @example `{
          "fileId": "123"
    }`
     */
    UserData: string;
    /**
     * 任务类型。
     * @example `ImageModeration`
     */
    TaskType: string;
    /**
     * 任务ID。
     * @example `ImageModeration-ff207203-3f93-4645-a041-7b8f0f******`
     */
    TaskId: string;
    /**
     * 合规检测结果。
     */
    ModerationResult: {
        /**
         * OSS文件的存储位置。
         * 存储位置的地址规则为oss://${bucketname}/${objectname}，其中bucketname为和当前项目处于同一地域的OSS Bucket名称，objectname为文件路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
        /**
         * 建议您执行的操作，取值包括：
         * - pass：图片正常，无需进行其余操作。
         * - review：检测结果不确定，需要进行人工审核。
         * - block：图片违规，建议执行进一步操作（如直接删除或做限制处理）。
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
             * @example `30`
             */
            TotalCount: number;
            /**
             * 违规的帧。
             */
            BlockFrames: {
                /**
                 * 违规的置信度。
                 * @example `30`
                 */
                Rate: number;
                /**
                 * 帧的偏移量。
                 * @example `2`
                 */
                Offset: number;
                /**
                 * 违规的标签。
                 * @example `{
                      "test": "val"
                }`
                 */
                Label: string;
            }[];
        };
    };
}

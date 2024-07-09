export interface GetTranscodeSummaryResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 不存在的音/视频ID列表。
     */
    NonExistVideoIds: string[];
    /**
     * 音/视频转码基础信息列表。
     */
    TranscodeSummaryList: {
        /**
         * 转码任务创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-23T12:35:12Z`
         */
        CreationTime: string;
        /**
         * 音/视频ID。
         * @example `e1db68cc586644b83e562bcd94****`
         */
        VideoId: string;
        /**
         * 转码任务完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-23T12:40:12Z`
         */
        CompleteTime: string;
        /**
         * 转码处理状态。取值：
         * - **Processing**：处理中。
         * - **Partial**：部分转码完成。
         * - **CompleteAllSucc**：全部处理完成，且全部转码成功。
         * - **CompleteAllFail**：全部处理完成，且全部转码失败，如果源片有问题，则不会发起任何转码作业，整个转码任务失败。
         * - **CompletePartialSucc**：全部转码完成，但仅部分转码成功。
         * @example `Processing`
         */
        TranscodeStatus: string;
        /**
         * 转码使用的模板组ID。
         * @example `44f9e406bbb*****736a9abe876ecc0`
         */
        TranscodeTemplateGroupId: string;
        /**
         * 转码作业摘要信息列表。
         */
        TranscodeJobInfoSummaryList: {
            /**
             * 转码作业创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-27T03:34:46Z`
             */
            CreationTime: string;
            /**
             * 转码失败的错误信息。
             * @example `ErrorMessage`
             */
            ErrorMessage: string;
            /**
             * 转码输出视频的画面高。单位：px。
             * @example `960`
             */
            Height: string;
            /**
             * 转码进度。取值范围：`[0,100]`。
             * @example `100`
             */
            TranscodeProgress: number;
            /**
             * 使用的转码模板ID。
             * @example `57496724ae2*****0968d6e08acc8f6`
             */
            TranscodeTemplateId: string;
            /**
             * 转码输出视频的平均码率。单位：Kbps。
             * @example `749`
             */
            Bitrate: string;
            /**
             * 转码失败的错误码。
             * @example `200`
             */
            ErrorCode: string;
            /**
             * 转码作业完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-27T03:40:51Z`
             */
            CompleteTime: string;
            /**
             * 转码输出视频的画面宽。单位：px。
             * @example `544`
             */
            Width: string;
            /**
             * 转码输出视频时长。单位：秒。
             * @example `12`
             */
            Duration: string;
            /**
             * 转码输出视频的帧率。单位：帧/秒。
             * @example `30`
             */
            Fps: string;
            /**
             * 转码作业状态。取值：
             * - **Transcoding**：转码中。
             * - **TranscodeSuccess**：转码成功。
             * - **TranscodeFail**：转码失败。
             * @example `Transcoding`
             */
            TranscodeJobStatus: string;
            /**
             * 转码输出视频的文件大小。单位：Byte。
             * @example `1144259`
             */
            Filesize: number;
            /**
             * 转码输出视频的封装格式。
             * @example `mp4`
             */
            Format: string;
            /**
             * 转码使用的水印列表。
             */
            WatermarkIdList: string[];
        }[];
    }[];
}

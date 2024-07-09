export interface QueryVideoTaskInfoResponse {
    /**
     * Id of the request
     * @example `0A466686-8F3A-55A6-93D8-A0225DC965C0
    `
     */
    RequestId: string;
    /**
     * 调用接口是否成功
     * - false: 调用失败。
     * - true：调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `10010001`
     */
    Code: string;
    /**
     * 错误信息
     * @example `这是一个错误`
     */
    Message: string;
    /**
     * 调用返回数据
     */
    Data: {
        /**
         * 当前页码
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页数量
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数
         * @example `10`
         */
        TotalCount: number;
        /**
         * 视频合成任务列表
         */
        List: {
            /**
             * 任务UUID，提交对应视频生成任务时返回的TaskUuid。
             * @example `789c45a5-2dca-4cd2-8fa7-f70a77e335ad`
             */
            TaskUuid: string;
            /**
             * 提交的视频合成的任务标题
             * @example `测试`
             */
            Title: string;
            /**
             * 任务类型：
             * - 1:  3D数字人视频合成。
             * - 3:  2D数字人视频合成。
             * @example `1`
             */
            Type: number;
            /**
             * 任务业务状态：
             * - 1: 等待执行
             * - 2:  执行中
             * - 3:  成功
             * - 4：失败
             * @example `3`
             */
            Status: number;
            /**
             * 任务结果
             */
            TaskResult: {
                /**
                 * 视频URL
                 * @example `xxx/xxxx/xx.mp4
                `
                 */
                VideoUrl: string;
                /**
                 * 字幕URL
                 * @example `xxx/xxx/xxx.ass
                `
                 */
                SubtitlesUrl: string;
                /**
                 * 字粒度的时间戳文件，特定任务支持
                 * @example `xxx/xxx/xxx.ass
                `
                 */
                WordSubtitlesUrl: string;
                /**
                 * 生成视频时长，单位ms
                 * @example `1111`
                 */
                VideoDuration: number;
                /**
                 * 失败原因
                 * @example `这是一个失败原因
                `
                 */
                FailReason: string;
                /**
                 * 失败错误码
                 * @example `10001001`
                 */
                FailCode: string;
                /**
                 * mp4对应的alpha文件
                 * @example `xxx/xxx/xxx-alpha.mp4`
                 */
                AlphaUrl: string;
                /**
                 * 视频首帧预览图
                 * @example `xxxxx.png`
                 */
                PreviewPic: string;
                /**
                 * 视频附件地址，特定任务支持
                 * @example `xxx.ini
                `
                 */
                AttachmentUrl: string;
            };
        }[];
    };
}

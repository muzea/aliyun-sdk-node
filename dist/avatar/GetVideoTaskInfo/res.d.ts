export interface GetVideoTaskInfoResponse {
    /**
     * 请求ID
     * @example `xxx-xxx-xxx-xx`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `502`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这是一个错误`
     */
    Message: string;
    /**
     * 调用接口是否成功
     * - false: 调用失败。
     * - true：调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用接口结果数据
     */
    Data: {
        /**
         * 任务UUID
         * @example `xxxx-xxx-xx-xx`
         */
        TaskUuid: string;
        /**
         * 任务类型：
         * - 1:  3D数字人视频合成。
         * - 3:  2D数字人视频合成。
         * @example `1`
         */
        Type: string;
        /**
         * 任务业务状态：
         * - 1: 等待执行
         * - 2:  执行中
         * - 3:  成功
         * - 4：失败
         * - 5:  已取消
         * - 6:  已过期
         * @example `1`
         */
        Status: string;
        /**
         * 任务执行进度，暂不支持
         * @example `99`
         */
        Process: string;
        /**
         * 任务结果
         */
        TaskResult: {
            /**
             * 视频URL
             * ><notice>有效期7天，请尽快下载保存，过期URL将失效></warning>
             * @example `xxx/xxxx/xx.mp4`
             */
            VideoUrl: string;
            /**
             * 字幕URL
             * ><notice>有效期7天，请尽快下载保存，过期URL将失效></warning>
             * @example `xxx/xxx/xxx.ass`
             */
            SubtitlesUrl: string;
            /**
             * 字粒度的时间戳文件，特定任务支持
             * @example `xxx/xxx/xxx.ass`
             */
            WordSubtitlesUrl: string;
            /**
             * 失败原因
             * @example `这是一个失败原因`
             */
            FailReason: string;
            /**
             * 失败错误码
             * @example `20002`
             */
            FailCode: string;
            /**
             * 生成视频时长，单位ms
             * @example `60992`
             */
            VideoDuration: number;
            /**
             * mp4对应的蒙版视频文件
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
             * @example `xxx.ini`
             */
            AttachmentUrl: string;
        };
    };
}

export interface GetLiveTranscodeJobResponse {
    /**
     * 请求ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 转码任务信息。
     */
    Job: {
        /**
         * 转码任务名称。
         * @example `task1`
         */
        Name: string;
        /**
         * 转码任务ID。
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        JobId: string;
        /**
         * 模板类型
         * @example `normal`
         */
        TemplateType: string;
        /**
         * 模板ID
         * @example `b6491d5b3e514b7d895d14b5453ea119`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `basic`
         */
        TemplateName: string;
        /**
         * 启动模式。
         * @example `0`
         */
        StartMode: number;
        /**
         * 任务状态。
         * - 0 - 未启动
         * - 1 - 运行中
         * - 2 - 已停止
         * @example `1`
         */
        Status: number;
        /**
         * 输入流信息。
         */
        StreamInput: {
            /**
             * 流输入类型。
             * @example `rtmp`
             */
            Type: string;
            /**
             * 输入流地址。
             * @example `rtmp://mydomain/app/stream1`
             */
            InputUrl: string;
        };
        /**
         * 输出流信息。
         */
        OutputStream: {
            /**
             * 输出流信息。
             */
            StreamInfos: {
                /**
                 * 输出流协议类型。
                 * 目前只支持rtmp协议。
                 * @example `rtmp`
                 */
                Type: string;
                /**
                 * 输出流地址。
                 * @example `rtmp://mydomain/app/mytranscode1`
                 */
                OutputUrl: string;
            }[];
        };
        /**
         * 创建时间。
         * @example `2022-07-20T02:48:58Z`
         */
        CreateTime: string;
    };
}

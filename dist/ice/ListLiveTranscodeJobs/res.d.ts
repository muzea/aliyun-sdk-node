export interface ListLiveTranscodeJobsResponse {
    /**
     * 请求ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 转码任务列表。
     */
    JobList: {
        /**
         * 转码任务名称。
         * @example `mytask`
         */
        Name: string;
        /**
         * 任务ID。
         * @example `****a046-263c-3560-978a-fb287782****`
         */
        JobId: string;
        /**
         * 转码任务对应转码模版的类型。
         * @example `normal`
         */
        TemplateType: string;
        /**
         * 转码任务对应的模板ID。
         * @example `****a046-263c-3560-978a-fb287666****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `模板1`
         */
        TemplateName: string;
        /**
         * 启动模式。
         * @example `0`
         */
        StartMode: number;
        /**
         * 任务状态。
         * @example `1`
         */
        Status: number;
        /**
         * 输入流信息。
         */
        StreamInput: {
            /**
             * 输入流类型。
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
             * 播放地址列表。
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
    }[];
}

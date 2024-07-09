export interface ListEdgeTranscodeJobResponse {
    JobList: {
        /**
         * 边缘转码任务列表。
         */
        Job: {
            /**
             * 任务创建时间。
             * @example `2023-07-24T16:44:55Z`
             */
            CreateTime: string;
            /**
             * 任务ID。
             * @example `****20b48fb04483915d4f2cd8ac****`
             */
            JobId: string;
            /**
             * 任务上一次启动的时间。
             * @example `2023-07-25T02:48:58Z`
             */
            LastStartAt: string;
            /**
             * 任务上一次停止的时间。
             * @example `2023-07-25T05:48:58Z`
             */
            LastStopAt: string;
            /**
             * 任务名称。
             * @example `my_job`
             */
            Name: string;
            /**
             * 边缘转码任务状态，枚举：
             * - 0 未启动。
             * - 1 运行中。
             * @example `0`
             */
            Status: string;
            /**
             * 输入流地址。
             * @example `rtmp://mydomain/app/stream1`
             */
            StreamInput: string;
            /**
             * 输出流地址。
             * @example `rtmp://testdomain/app/stream2`
             */
            StreamOutput: string;
            /**
             * 任务使用的边缘转码模板ID。
             * @example `9b1571b513cb44f7a1ba6ae561ff****`
             */
            TemplateId: string;
            /**
             * 任务使用的边缘转码模板名。
             * @example `my_template`
             */
            TemplateName: string;
            /**
             * 边缘转码类型，枚举：
             * - common，通用(普通+窄带高清1.0)。
             * - nbhd-2，窄带高清2.0。
             * - ultra-hd，超高清。
             * @example `common`
             */
            Type: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
}

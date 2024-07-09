export interface QueryFpFileDeleteJobListResponse {
    /**
     * 请求ID。
     * @example `D127C68E-F1A1-4CE5-A874-8FF724881A12`
     */
    RequestId: string;
    FpFileDeleteJobList: {
        /**
         * 删除的DNA作业列表。更多信息请参见[数据类型FpFileDeleteJob](~~93555~~)。
         */
        FpFileDeleteJob: {
            /**
             * 创建时间。
             * @example `2020-06-30T00:33:18Z`
             */
            CreationTime: string;
            /**
             * 作业状态。可取值：
             * - **Queuing**：排队中。
             * - **Analysing**：分析中。
             * - **Success**：成功。
             * - **Fail**：失败。
             * @example `Success`
             */
            Status: string;
            /**
             * 完成时间。
             * @example `2020-06-30T00:34:02Z`
             */
            FinishTime: string;
            /**
             * 用户自定义数据。
             * @example `example data`
             */
            UserData: string;
            /**
             * 分析失败时错误码。如果执行成功则不返回。
             * @example `ServiceUnavailable`
             */
            Code: string;
            /**
             * 分析失败时错误信息。如果执行成功则不返回。
             * @example `The request has failed due to a temporary failure of the server.`
             */
            Message: string;
            /**
             * 管道ID。
             * @example `fb712a6890464059b1b2ea7c8647****`
             */
            PipelineId: string;
            /**
             * DNA库ID。
             * @example `88c6ca184c0e47098a5b665e2a12****`
             */
            FpDBId: string;
            /**
             * 作业ID。
             * @example `25bacf2824614bcf9273dc0744db****`
             */
            Id: string;
            /**
             * 文件ID。
             * @example `41e6536e4f2250e2e9bf26cdea19****`
             */
            FileIds: string;
        }[];
    };
    NonExistIds: {
        /**
         * 返回参数。
         */
        String: string[];
    };
}

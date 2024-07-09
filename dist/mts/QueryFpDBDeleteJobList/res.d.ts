export interface QueryFpDBDeleteJobListResponse {
    /**
     * 请求ID。
     * @example `4247B23C-26DE-529F-8D9F-FD6811AE979B`
     */
    RequestId: string;
    FpDBDeleteJobList: {
        /**
         * 删除DNA库作业列表。参见[数据类型FpDBDeleteJob](~~93555~~)。
         */
        FpDBDeleteJob: {
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
             * 操作类型。
             * @example `Purge`
             */
            DelType: string;
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
        }[];
    };
    NonExistIds: {
        /**
         * 不存在的ID列表。
         */
        String: string[];
    };
}

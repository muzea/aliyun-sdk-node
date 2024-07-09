export interface GetBaselineStatusResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 基线实例的详情。
     */
    Data: {
        /**
         * 基线的状态，包括ERROR（异常）、SAFE（安全）、DANGROUS（预警）和OVER（破线）。
         * @example `SAFE`
         */
        Status: string;
        /**
         * 基线责任人的阿里云UID。多个责任人之间使用英文逗号（,）分隔。
         * @example `9527952795****`
         */
        Owner: string;
        /**
         * 当FinishStatus（基线实例完成状态）为FINISH（已完成）时，返回基线实例的完成时间戳。
         * @example `1553443200000`
         */
        FinishTime: number;
        /**
         * 基线所在工作空间的ID。
         * @example `1234`
         */
        ProjectId: number;
        /**
         * 基线的优先级，取值范围为{1,2,5,7,8}。
         * @example `1`
         */
        Priority: number;
        /**
         * 基线实例的预计产出时间戳。
         * @example `1553443200000`
         */
        EndCast: number;
        /**
         * 基线实例的周期号。天基线为1，小时基线的取值范围为\[1,24\]。
         * @example `1`
         */
        InGroupId: number;
        /**
         * 基线的名称。
         * @example `基线名称`
         */
        BaselineName: string;
        /**
         * 基线的ID。
         * @example `1234`
         */
        BaselineId: number;
        /**
         * 基线实例是否完成，包括UNFINISH（未完成）和FINISH（已完成）。
         * @example `UNFINISH`
         */
        FinishStatus: string;
        /**
         * 业务日期时间戳。
         * @example `1553443200000`
         */
        Bizdate: number;
        /**
         * 基线实例的余量，单位为秒。
         * @example `1200`
         */
        Buffer: number;
        /**
         * 基线实例的承诺时间戳。
         * @example `1553443200000`
         */
        SlaTime: number;
        /**
         * 基线实例的预警时间戳。
         * @example `1553443200000`
         */
        ExpTime: number;
        /**
         * 最晚实例信息。
         */
        LastInstance: {
            /**
             * 实例的状态，包括NOT_RUN（未运行）、WAIT_TIME（等待时间）、WAIT_RESOURCE（等待资源）、RUNNING（运行中）、CHECKING（校检中）、CHECKING_CONDITION（条件检测中）、FAILURE（运行失败）和SUCCESS（运行成功）。
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 节点责任人的阿里云UID。
             * @example `9527952795****`
             */
            Owner: string;
            /**
             * 实例的实际完成时间戳。
             * @example `1553443200000`
             */
            FinishTime: number;
            /**
             * 节点的名称。
             * @example `节点名称`
             */
            NodeName: string;
            /**
             * 节点所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
            /**
             * 实例的ID。
             * @example `12345`
             */
            InstanceId: number;
            /**
             * 实例的预计完成时间戳。
             * @example `1553443200000`
             */
            EndCast: number;
            /**
             * 节点的ID。
             * @example `1234`
             */
            NodeId: number;
        };
        /**
         * 关键实例信息。
         */
        BlockInstance: {
            /**
             * 实例的状态，包括NOT_RUN（未运行）、WAIT_TIME（等待时间）、WAIT_RESOURCE（等待资源）、RUNNING（运行中）、CHECKING（校检中）、CHECKING_CONDITION（条件检测中）、FAILURE（运行失败）和SUCCESS（运行成功）。
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 节点责任人的阿里云UID。
             * @example `9527952795****`
             */
            Owner: string;
            /**
             * 实例的实际完成时间戳。
             * @example `1553443200000`
             */
            FinishTime: number;
            /**
             * 节点的名称。
             * @example `节点名称`
             */
            NodeName: string;
            /**
             * 节点所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
            /**
             * 实例的ID。
             * @example `12345`
             */
            InstanceId: number;
            /**
             * 实例的预计完成时间戳。
             * @example `1553443200000`
             */
            EndCast: number;
            /**
             * 节点的ID。
             * @example `1234`
             */
            NodeId: number;
        };
    };
}

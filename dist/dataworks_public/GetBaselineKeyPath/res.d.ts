export interface GetBaselineKeyPathResponse {
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
     * 关键路径信息。
     */
    Data: {
        /**
         * 节点责任人的阿里云UID。
         * @example `9527952****`
         */
        Owner: string;
        /**
         * 节点的名称。
         * @example `节点名称`
         */
        NodeName: string;
        /**
         * 实例的业务日期时间戳。
         * @example `1553443200000`
         */
        Bizdate: number;
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
         * 节点类型，常用的节点类型包括数据集成（23）、MaxCompute SQL（10）、Shell（6）和虚节点（99）。
         * @example `10`
         */
        PrgType: number;
        /**
         * 节点的ID。
         * @example `1234`
         */
        NodeId: number;
        /**
         * 实例周期号，取值范围为\[1,288\]。
         * @example `1`
         */
        InGroupId: number;
        /**
         * 实例的运行记录。
         */
        Runs: {
            /**
             * 实例的状态，包括NOT_RUN（未运行）、WAIT_TIME（等待时间）、WAIT_RESOURCE（等待资源）、RUNNING（运行中）、CHECKING（校检中）、CHECKING_CONDITION（条件检测中）、FAILURE（运行失败）和SUCCESS（运行成功）。
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 实例的预计开始运行时间+历史平均运行时长得到的时间戳。
             * @example `1553531402000`
             */
            AbsTime: number;
            /**
             * 实例实际开始运行的时间戳。
             * @example `1553531401000`
             */
            BeginRunningTime: number;
            /**
             * 实例的实际运行结束时间戳。
             * @example `1553531401000`
             */
            FinishTime: number;
            /**
             * 实例预计开始运行的时间戳。
             * @example `1553531686000`
             */
            BeginCast: number;
            /**
             * 实例的预计运行结束时间戳。
             * @example `1553531687000`
             */
            EndCast: number;
            /**
             * 实例开始进入等待资源状态的时间戳。
             * @example `1553531401000`
             */
            BeginWaitResTime: number;
            /**
             * 实例开始进入等待时间状态的时间戳。
             * @example `1553531400000`
             */
            BeginWaitTimeTime: number;
        }[];
        /**
         * 实例关联的事件信息。
         */
        Topics: {
            /**
             * 事件的名称。
             * @example `1234`
             */
            TopicName: string;
            /**
             * 实例的ID。
             * @example `1234`
             */
            InstanceId: number;
            /**
             * 事件的ID。
             * @example `1234`
             */
            TopicId: number;
            /**
             * 事件发现时间戳。
             * @example `1553531401000`
             */
            AddTime: number;
        }[];
    }[];
}

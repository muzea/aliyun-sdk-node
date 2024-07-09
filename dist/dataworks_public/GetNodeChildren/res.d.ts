export interface GetNodeChildrenResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `adsfasdf-adf-asdf-asdf-asdfadfasdd`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `err`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1060010000000`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的节点信息列表。
     */
    Data: {
        /**
         * 节点列表。
         */
        Nodes: {
            /**
             * 调度类型。取值如下：
             * - NORMAL，正常调度任务。
             * - MANUAL，手动任务，不会被日常调度。
             * - PAUSE，暂停任务，被日常调度，但启动调度时直接被置为失败。
             * - SKIP，空跑任务，被日常调度，但启动调度时直接被置为成功。
             * @example `NORMAL`
             */
            SchedulerType: string;
            /**
             * 基线ID。
             * @example `12345656`
             */
            BaselineId: number;
            /**
             * 节点任务运行失败是否可重跑。
             * - true，重跑。
             * - false，不重跑。
             * @example `true`
             */
            Repeatability: boolean;
            /**
             * 节点名称。
             * @example `test_Node`
             */
            NodeName: string;
            /**
             * 节点所在项目空间的ID。
             * @example `12315412412`
             */
            ProjectId: number;
            /**
             * 节点类型。
             * @example `ODPS_SQL`
             */
            ProgramType: string;
            /**
             * 优先级。取值为1~8，数值越大，优先级越高。
             * @example `3`
             */
            Priority: number;
            /**
             * 节点Owner的DataWorks UID。
             * @example `123124561341251321`
             */
            OwnerId: string;
            /**
             * 定时表达式。用于定时调度执行节点任务。
             * @example `00 00 * * * * `
             */
            CronExpress: string;
            /**
             * 节点ID。
             * @example `1244564565`
             */
            NodeId: number;
            StepType: string;
        }[];
    };
}

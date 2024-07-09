export interface ListRefDISyncTasksResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 返回的数据结果。
     */
    Data: {
        /**
         * 返回数据结果的数组信息。
         * 通常，目标数据源会关联多个数据集成同步任务，调用ListRefDISyncTasks接口查询目标数据源关联的同步任务时，返回的结果为目标数据源所关联的同步任务的数组。如下信息为数组中一个同步任务的信息示例。
         */
        DISyncTasks: {
            /**
             * 目标数据源所关联的当前同步任务的源端数据源。
             * 如果当前同步任务存在多个源端数据源，则会以JSON数组的形式返回多个源端数据源。例如，[\"odps_writer\", \"mysql\"]。
             * 当RefType参数取值为from时，即目标数据源作为数据集成同步任务的源端，则当前参数的返回结果为目标数据源本身。
             * @example `[\"odps_writer\"]`
             */
            DiSourceDatasource: string;
            /**
             * 目标数据源所关联的当前数据集成同步任务的任务类型。取值如下：
             * - DI_OFFLINE：数据集成离线同步任务。
             * - DI_REALTIME：数据集成实时同步任务。
             * @example `DI_OFFLINE`
             */
            TaskType: string;
            /**
             * 目标数据源所关联的当前同步任务的目的端数据源。
             * 如果当前同步任务存在多个目的端数据源，则会以JSON数组的形式返回多个目的端数据源。例如，[\"odps_writer\", \"mysql\"]。
             * 当RefType参数取值为to时，即目标数据源作为数据集成同步任务的目的端，则当前参数的返回结果为目标数据源本身。
             * @example `[\"qcc_polardb2\"]`
             */
            DiDestinationDatasource: string;
            /**
             * 目标数据源所关联的当前数据集成同步任务的任务名称。
             * @example `abcd1234`
             */
            NodeName: string;
            /**
             * 目标数据源所关联的当前数据集成同步任务的任务ID。
             * @example `100000`
             */
            NodeId: number;
        }[];
    };
}

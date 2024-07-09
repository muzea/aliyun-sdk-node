export interface DescribePipelineResponse {
    /**
     * 请求ID。
     * @example `559B4247-C41C-4D9E-B866-B55D360B****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0be3e0c316390414649128666e****`
     */
    TraceId: string;
    /**
     * 批次信息。
     */
    Data: {
        /**
         * 是否可以开始下一批次执行。取值说明如下：
         * -  **false**：不可以开始下一批次执行。
         * - **true**：可以开始下一批次执行。
         * @example `false`
         */
        ShowBatch: boolean;
        /**
         * 批次状态，取值说明如下：
         * - **0**：准备就绪。
         * - **1**：执行中。
         * - **2**：执行成功。
         * - **3**：执行失败。
         * - **6**：中止。
         * - **10**：系统异常执行失败。
         * @example `2`
         */
        PipelineStatus: number;
        /**
         * 该批次正在执行的阶段ID。
         * @example `c3a55592-4c30-4d84-ac2d-e98c18ec****`
         */
        CurrentStageId: string;
        /**
         * 批次名称。
         * @example `第1批变更`
         */
        PipelineName: string;
        /**
         * 批次的阶段信息列表。
         */
        StageList: {
            /**
             * 阶段的状态，取值说明如下：
             * - **0**：准备就绪。
             * - **1**：执行中。
             * - **2**：执行成功。
             * - **3**：执行失败。
             * - **6**：中止。
             * @example `2`
             */
            Status: number;
            /**
             * 阶段ID。
             * @example `c3a55592-4c30-4d84-ac2d-e98c18ec****`
             */
            StageId: string;
            /**
             * 阶段类型，取值说明如下：
             * - **0**：串行。
             * - **1**：并行。
             * @example `0`
             */
            ExecutorType: number;
            /**
             * 状态信息列表。
             */
            TaskList: {
                /**
                 * 任务的状态，取值说明如下：
                 * - **0**：准备就绪。
                 * - **1**：执行中。
                 * - **2**：执行成功。
                 * - **3**：执行失败。
                 * - **5**：等待重试。
                 * - **6**：中止。
                 * @example `2`
                 */
                Status: number;
                /**
                 * 阶段ID。
                 * @example `c3a55592-4c30-4d84-ac2d-e98c18ec****`
                 */
                StageId: string;
                /**
                 * 任务执行的报错信息。如果任务执行成功，则不会返回该信息。
                 * @example `EDAS-10022  <a target='_blank' href='https://help.aliyun.com/knowledge_detail/106573.html#EDAS-10022'>应用启动时 READINESS 检查失败</a>`
                 */
                ErrorMessage: string;
                /**
                 * 任务执行失败的错误码。如果任务执行成功，则不会返回该信息。
                 * @example `EDAS-10022`
                 */
                ErrorCode: string;
                /**
                 * 任务名称。
                 * @example `初始化环境`
                 */
                TaskName: string;
                /**
                 * 是否支持失败后执行后面任务，取值说明如下：
                 * - **0**：不支持。
                 * - **1**：支持。
                 * @example `0`
                 */
                ErrorIgnore: number;
                /**
                 * 任务执行信息。
                 * @example `init Namespace success`
                 */
                Message: string;
                /**
                 * 是否支持手动跳过正在执行的任务，取值说明如下：
                 * - **true**：支持。
                 * - **false**：不支持。
                 * @example `false`
                 */
                ShowManualIgnore: boolean;
                /**
                 * 任务ID。
                 * @example `bef0122f-de9a-4ab0-8223-b88bf8ad****`
                 */
                TaskId: string;
            }[];
            /**
             * 阶段的名称。
             * @example `部署应用`
             */
            StageName: string;
        }[];
        /**
         * 下一批次ID。
         * @example `b77b1c98-5772-4f05-95fc-c7bee5fa****`
         */
        NextPipelineId: string;
        /**
         * 批次ID。
         * @example `917660ba-5092-44ca-b8e0-80012c96****`
         */
        PipelineId: string;
        /**
         * 该批次所在的变更单的状态。
         * @example `执行成功`
         */
        CoStatus: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 查询批次信息是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}

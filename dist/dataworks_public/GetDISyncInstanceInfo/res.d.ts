export interface GetDISyncInstanceInfoResponse {
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
     * 获取同步任务的运行状态。
     */
    Data: {
        /**
         * - 如果taskType为DI_REALTIME，则status为实时任务的运行状态。包括：PAUSE、NORUN、RUN、KILLING、WAIT。
         * - 如果taskType为DI_SOLITION， 则status为同步解决方案的运行状态。包括：success、fail。
         * @example `RUN`
         */
        Status: string;
        /**
         * 获取同步任务运行状态失败后的原因描述。如果获取数据集成同步任务成功，则该参数的返回值为空。
         * @example `fileId[100] is invalid`
         */
        Message: string;
        /**
         * - 如果taskType为DI_REALTIME，则name为实时同步任务的名称。
         * - 如果taskType为DI_SOLITION， 则name为空。
         * @example `streamx_name`
         */
        Name: string;
        /**
         * - 如果taskType为DI_REALTIME，则SolutionInfo为空。
         * - 如果taskType为DI_SOLITION， 则SolutionInfo为同步解决方案运行详情。
         */
        SolutionInfo: {
            /**
             * 同步解决方案运行状态。
             * @example `run`
             */
            Status: string;
            /**
             * 同步解决方案任务ID。
             * @example `100`
             */
            Id: number;
            /**
             * 同步解决方案任务创建者名称。
             * @example `dataworks_3h1`
             */
            CreatorName: string;
            /**
             * 同步解决方案任务运行步骤详情。
             */
            StepDetail: {
                /**
                 * 同步解决方案运行步骤的状态。
                 * @example `success`
                 */
                Status: string;
                /**
                 * 同步解决方案运行步骤的ID。
                 * @example `1`
                 */
                StepId: number;
                /**
                 * 同步解决方案运行步骤的名称。
                 * @example `创建base表`
                 */
                StepName: string;
                /**
                 * 同步解决方案运行信息
                 * @example `{\"fusionProps\":{\"dataSource\":[{\"fileName\":\"holo_20221020161613\",\"status\":\"SUCCESS\"}]},\"customProps\":{\"showSN\":true,\"columns\":[{\"dataIndex\":\"fileName\",\"width\":0.8,\"title\":\"实时同步名称\"},{\"dataIndex\":\"status\",\"width\":0.2,\"title\":\"状态\"}]},\"componentName\":\"Table\"}`
                 */
                Info: string;
            }[];
        };
    };
}

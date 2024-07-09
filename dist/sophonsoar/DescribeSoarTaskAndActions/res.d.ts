export interface DescribeSoarTaskAndActionsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `18017A93-3D5D-503A-8308-914543F1CBA3`
     */
    RequestId: string;
    /**
     * 任务执行详情。
     */
    Details: {
        /**
         * 触发类型，取值：
         * - **debug**：剧本调试的任务。
         * - **manual**：手动触发的任务。
         * - **siem**：事件触发的任务。
         * @example `siem`
         */
        TriggerType: string;
        /**
         * 剧本任务的名称，同剧本的UUID。
         * @example `92af3c79-1754-4646-9366-9ddbd1e45536`
         */
        TaskName: string;
        /**
         * 剧本运行的开始时间，格式：13位的时间戳。
         * @example `1699868848645`
         */
        StartTime: number;
        /**
         * 剧本运行的结束时间，格式：13位的时间戳。
         * @example `1699868848767`
         */
        EndTime: number;
        /**
         * 剧本执行的任务状态，取值为：
         * - **success**：表示执行成功
         * - **fail**：表示执行失败
         * - **running**：表示正在运行
         * @example `success`
         */
        Status: string;
        /**
         * 剧本任务的请求ID，每次任务运行的唯一ID。
         * @example `17f75844-75cc-4174-86da-cec07a690142`
         */
        RequestUuid: string;
        /**
         * 触发剧本任务的阿里云账号ID。
         * @example `127xxxx4392`
         */
        TriggerUser: string;
        /**
         * 剧本任务的错误信息，任务成功时，该字段为空。
         * @example `stime not match`
         */
        ErrorMsg: string;
        /**
         * 剧本任务的请求参数。
         * @example `{
            "input1": "xx.xx.xx.xx",
            "input2": "7d"
        }`
         */
        RawEventReq: string;
        /**
         * 剧本调试任务的标志为，当任务为调试任务时，值为**DEBUG**，其余为空。
         * @example `DEBUG`
         */
        ResultLevel: string;
        /**
         * 剧本的返回信息，由用户在剧本中自己定义。
         * @example `deubug playbook finished`
         */
        ResultMessage: string;
        /**
         * 剧本任务所属的阿里云账户ID。
         * @example `127xxxx4392`
         */
        TaskTenantId: string;
        /**
         * 剧本执行的组件动作列表。
         */
        Actions: {
            /**
             * 组件的名称。
             * @example `DataFormat`
             */
            Component: string;
            /**
             * 组件的动作名称。
             * @example `formatdata`
             */
            Action: string;
            /**
             * 组件运行的开始时间，格式：13位的时间戳。
             * @example `1699868848731`
             */
            StartTime: number;
            /**
             * 剧本运行的结束时间，格式：13位的时间戳。
             * @example `1699868848766`
             */
            EndTime: number;
            /**
             * 组件的运行结果，取值为：
             * - **success**：表示执行成功。
             * - **fail**：表示执行失败。
             * @example `success`
             */
            Status: string;
            /**
             * 剧本任务的请求ID，每次任务运行的唯一ID
             * @example `8dac16c6-7411-4116-8d70-xxxxxxx`
             */
            RequestUuid: string;
            /**
             * 执行剧本任务的阿里云账户ID。
             * @example `127xxxx4392
            `
             */
            TriggerUser: string;
            /**
             * 剧本任务的名称，同剧本的UUID。
             * @example `ed127287-6699-4e4d-b986-xxxxxxx`
             */
            TaskName: string;
            /**
             * 触发组件动作的执行状态。
             * > 该参数已不启用，只返回空值。
             * @example `NULL`
             */
            TaskStatus: string;
            /**
             * 组件动作执行记录的UUID。
             * @example `091be399-a937-4276-af78-xxxxxxxx`
             */
            ActionUuid: string;
            /**
             * 组件使用的资产名称。
             * @example `SLS Asset`
             */
            AssetName: string;
            /**
             * 组件的自定义节点名称。
             * @example `DataFormat_1`
             */
            NodeName: string;
        }[];
        /**
         * 运行剧本配置的MD5值。
         * @example `ed127287-6699-4e4d-b986-9f770879xxx`
         */
        TaskFlowMd5: string;
    };
}

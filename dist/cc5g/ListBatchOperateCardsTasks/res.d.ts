export interface ListBatchOperateCardsTasksResponse {
    /**
     * 请求id。
     * @example `1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6`
     */
    RequestId: string;
    /**
     * 卡批量操作任务列表。
     */
    BatchOperateCardsTasks: {
        /**
         * 批量操作任务ID。
         * @example `boct-xxxx`
         */
        BatchOperateCardsTaskId: string;
        /**
         * 任务状态，取值：
         * -  **Creating**: 创建中
         * -  **Pending**: 待生效
         * -  **Available**: 全部成功
         * -  **PartialAvailable**: 部分成功
         * -  **UnAvailable**: 已失效
         * -  **Fail**: 全部失败
         * @example `Available`
         */
        Status: string;
        /**
         * 限制类型，枚举值：
         * - **BreakNetwork**: 达量断网
         * - **LimitRate**: 达量限速
         * - **Alarm**: 达量告警
         * @example `BreakNetwork`
         */
        OperateType: string;
        /**
         * 达量阈值，单位MB。
         * @example `100`
         */
        Threshold: string;
        /**
         * 生效类型，枚举值：
         * - **CurrentMonth**
         * - **ContinualMonth**
         * @example `CurrentMonth`
         */
        EffectType: string;
        /**
         * iccid文件存放路径。
         * @example `https://examplebucket.oss-eu-central-1.aliyuncs.com/***`
         */
        IccidsOssFilePath: string;
        /**
         * 5G高速上云的实例ID和状态列表。
         */
        WirelessCloudConnectors: {
            /**
             * 5G高速上云实例id。
             * @example `cc5g-xxxx`
             */
            WirelessCloudConnectorId: string;
            /**
             * 状态，枚举值：
             * - **Creating**: 创建中
             * - **Available**: 有效的稳定状态
             * - **Pending**: 配置中
             * - **Deleting**: 删除中
             * - **Deleted**: 已删除
             * @example `Deleted`
             */
            Status: string;
        }[];
        /**
         * 批量操作结果的文件路径。
         * @example `https://examplebucket.oss-eu-central-1.aliyuncs.com/***`
         */
        OperateResultOssFilePath: string;
        /**
         * 批量操作描述。
         * @example `task-test`
         */
        Description: string;
        /**
         * 批量操作名称。
         * @example `test`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `2022-3-15 22:20:00`
         */
        CreateTime: string;
    }[];
    /**
     * 下一次查询的起始token。
     * @example `iou001238joojjaere`
     */
    NextToken: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    MaxResults: string;
    /**
     * 列表的条目数。
     * @example `2`
     */
    TotalCount: string;
}

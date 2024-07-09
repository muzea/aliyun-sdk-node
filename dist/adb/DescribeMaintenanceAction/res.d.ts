export interface DescribeMaintenanceActionResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `E774C8A9-8819-4A09-9E91-07C078******`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 事件列表。
     */
    Items: {
        /**
         * 事件状态。
         * - 若您设置`IsHistory`为**0**，则返回待处理运维事件状态的详情，取值范围如下：
         *     - **WAITING_MODIFY**：等待用户设置运维事件开始时间。
         *     - **WAITING**：运维事件正在等待处理。
         *     - **PROCESSING**：运维事件正在处理中（不支持修改处于该状态下事件的切换时间）。
         * - 若您设置`IsHistory`为**1**，则返回历史运维事件状态的详情，取值范围如下：
         *      - **SUCCESS**：事件结束且执行成功。
         *      - **FAILED**：事件结束但执行失败。
         *      - **CANCEL**：事件已取消。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 运维事件执行时间可调整范围的最晚时间，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2021-07-04T15:59:59Z`
         */
        Deadline: string;
        /**
         * 运维事件切换之前所需的准备时间，格式为`HH:mm:ss`。
         * @example `02:00:00`
         */
        PrepareInterval: string;
        /**
         * 数据库的引擎类型。
         * @example `analyticdb`
         */
        DBType: string;
        /**
         * 后台执行该运维事件的时间点，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2021-07-03T04:00:00Z`
         */
        StartTime: string;
        /**
         * 运维事件的类型。
         * @example `rds_apsaradb_upgrade`
         */
        TaskType: string;
        /**
         * 数据库引擎版本号。
         * @example `3.0`
         */
        DBVersion: string;
        /**
         * 运维事件所涉及集群的集群ID。
         * @example `am-****************`
         */
        DBClusterId: string;
        /**
         * 修改运维事件切换时间的时间点，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2021-07-03T06:33:00Z`
         */
        ModifiedTime: string;
        /**
         * 运维事件所在地域的地域ID。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 运维事件的执行结果。
         * > 仅当`Status`（状态）取值为**FAILED**（运维事件结束但执行失败）或**CANCEL**（事件已取消）时，返回该参数。
         * @example `autoCancel`
         */
        ResultInfo: string;
        /**
         * 运维事件的创建时间，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2021-06-30T02:44:27Z`
         */
        CreatedTime: string;
        /**
         * 运维事件的ID。
         * @example `11111`
         */
        Id: number;
        /**
         * 运维事件预计的切换时间，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2021-07-03T06:00:00Z`
         */
        SwitchTime: string;
    }[];
}

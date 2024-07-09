export interface DescribePendingMaintenanceActionResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 请求ID。
     * @example `2F029645-FED9-4FE8-A6D3-488954******`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 任务列表。
     */
    Items: {
        /**
         * 任务状态。
         * * 若您设置`IsHistory`为**0**，则返回待处理任务状态的详情，取值范围如下：
         *     * **2**：等待用户设置任务开始时间
         *     * **3**：等待处理
         *     * **4**：任务正在处理中（不支持在该状态下修改任务执行时间）
         * * 若您设置`IsHistory`为**1**，则返回历史任务状态的详情，取值范围如下：
         *      * **5**：任务结束且执行成功
         *      * **6**：任务结束但执行失败
         *      * **7**：任务已取消
         * @example `3`
         */
        Status: number;
        /**
         * 待处理事件切换之前所需的准备时间，格式为`HH:mm:ss`。
         * @example `04:00:00`
         */
        PrepareInterval: string;
        /**
         * 任务执行时间可调整范围的最晚期限，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2020-06-11T15:59:59Z`
         */
        Deadline: string;
        /**
         * 数据库引擎类型，取值范围如下：
         * - **MySQL**
         * - **PostgreSQL**
         * - **Oracle**
         * @example `MySQL`
         */
        DBType: string;
        /**
         * 待处理事件的任务类型。
         * @example `DatabaseSoftwareUpgrading`
         */
        TaskType: string;
        /**
         * 后台执行该任务的时间点，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2020-06-09T18:00:00Z`
         */
        StartTime: string;
        /**
         * 数据库引擎版本号。
         * * MySQL版本号取值范围如下：
         *     * **5.6**
         *     * **5.7**
         *     * **8.0**
         * * PostgreSQL版本号取值范围如下：
         *     * **11**
         *     * **14**
         * * Oracle版本号取值范围如下：
         *     * **11**
         *     * **14**
         * @example `8.0`
         */
        DBVersion: string;
        /**
         * 修改时间，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2020-06-09T22:00:42Z`
         */
        ModifiedTime: string;
        /**
         * 集群ID。
         * @example `pc-************`
         */
        DBClusterId: string;
        /**
         * 任务所在地域的地域ID。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 任务执行结果，取值范围如下：
         * * **manualCancel**：手动取消任务
         * * **paramCheckNotPass**：参数检查未通过
         * >仅当`Status`（任务状态）取值为**6**（任务结束但执行失败）或**7**（任务已取消）时，返回该参数。
         * @example `manualCancel`
         */
        ResultInfo: string;
        /**
         * 创建任务的时间点，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2020-06-09T22:00:42Z`
         */
        CreatedTime: string;
        /**
         * 目标任务ID。
         * @example `111111`
         */
        Id: number;
        /**
         * 待处理事件预计的切换时间，格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2020-06-09T22:00:00Z`
         */
        SwitchTime: string;
    }[];
}

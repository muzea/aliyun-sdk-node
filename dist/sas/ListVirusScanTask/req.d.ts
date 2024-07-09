export interface ListVirusScanTaskRequest {
    /**
     * 指定要查询的病毒扫描任务ID。
     * > 您可以调用[ListVirusScanTask](~~ListVirusScanTask~~)接口获取该参数。
     * @example `1471d8ebb96795b41ede090b9758****`
     */
    "TaskId"?: string;
    /**
     * 指定待查询病毒扫描任务的扫描类型。
     * 取值：
     * - **system**：系统自动扫描
     * - **user**：系统自定义扫描
     * @example `user`
     */
    "ScanType"?: string;
    /**
     * 病毒扫描任务的执行的状态。
     * 取值：
     * - **1**：检测中
     * - **2**：完成
     * - **3**：失败
     * - **4**：超时
     * @example `1`
     */
    "Status"?: number;
    /**
     * 查询的任务开始时间的时间戳（毫秒）。
     * @example `1680919232000`
     */
    "StartTime"?: number;
    /**
     * 查询的任务结束时间的时间戳（毫秒）。
     * @example `1680919232999`
     */
    "EndTime"?: number;
    /**
     * 查询的任务是否是病毒扫描的主任务
     * @example `true`
     */
    "RootTask"?: boolean;
    /**
     * 根任务ID。
     * > 您可以调用[GetVirusScanLatestTaskStatistic](~~GetVirusScanLatestTaskStatistic~~)接口获取该参数。
     * @example `89f5d7813bd59dd237580a8664b3xxxx`
     */
    "RootTaskId"?: string;
    /**
     * 服务器的名称。
     * @example `oracle-win-001****`
     */
    "MachineName"?: string;
    /**
     * 公网IP。
     * @example `120.27.XX.XX`
     */
    "InternetIp"?: string;
    /**
     * 内网IP。
     * @example `172.26.XX.XX`
     */
    "IntranetIp"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页包含的任务的数量。默认值为**20**，表示每页包含20个任务。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 多个状态刷选填写的状态列表。
     */
    "StatusList"?: number[];
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。
     * 取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}

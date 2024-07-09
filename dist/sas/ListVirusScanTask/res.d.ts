export interface ListVirusScanTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `224`
         */
        TotalCount: number;
    };
    /**
     * 结果列表。
     */
    List: {
        /**
         * 检查任务的ID。
         * @example `2e75557bfa570381f5c516cad9b6xxxx`
         */
        TaskId: string;
        /**
         * 病毒扫描的任务扫描类型。
         * 取值：
         * - **system**：系统自动扫描
         * - **user**：用户自定义扫描
         * @example `system`
         */
        ScanType: string;
        /**
         * 病毒扫描任务的执行的状态。
         * 取值：
         * - **1**：检测中
         * - **2**：完成
         * - **3**：失败
         * - **4**：超时
         * @example `1`
         */
        Status: number;
        /**
         * 开始时间戳（毫秒）。
         * @example `1651290987000`
         */
        StartTime: number;
        /**
         * 结束时间戳（毫秒）。
         * @example `1662343860051`
         */
        EndTime: number;
        /**
         * 服务器实例名称。
         * @example `sql-test-0****`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 任务名称。
         * - **VIRUS\_VUL\_SCHEDULE\_SCAN**：病毒扫描。
         * @example `VIRUS_VUL_SCHEDULE_SCAN`
         */
        TaskName: string;
        /**
         * 任务进度百分比。
         * @example `62`
         */
        Progress: number;
        /**
         * 扫描的文件信息。
         */
        ScanPath: string[];
        /**
         * 服务器的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
    }[];
}

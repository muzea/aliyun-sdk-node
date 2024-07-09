export interface ListAgentlessTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1A975D03-5F49-5354-B2CB-3918D5DA****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `55`
         */
        TotalCount: number;
    };
    /**
     * 任务列表。
     */
    List: {
        /**
         * 任务ID。
         * @example `1538****`
         */
        TaskId: string;
        /**
         * 检测任务名称。
         * @example `AGENTLESS_SCAN`
         */
        TaskName: string;
        /**
         * 对象类型。取值：
         * - **1**：快照
         * - **2**：镜像
         * @example `2`
         */
        TargetType: number;
        /**
         * 检测状态。
         * - **1**：检测中
         * - **2**：完成
         * - **3**：失败
         * - **4**：超时
         * @example `1`
         */
        Status: number;
        /**
         * 任务进度。
         * @example `60`
         */
        Progress: number;
        /**
         * 任务的开始时间戳，单位为毫秒。
         * @example `1672741657897`
         */
        StartTime: number;
        /**
         * 任务的结束时间戳，单位为毫秒。
         * @example `1678895999999`
         */
        EndTime: number;
        /**
         * 检查结果。
         * @example `True`
         */
        Result: string;
        /**
         * 资产实例的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
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
         * 资产实例名称。
         * @example `sql-test-0****`
         */
        InstanceName: string;
        /**
         * 扫描对象名称。
         * @example `hkdevt****`
         */
        TargetName: string;
        /**
         * 检测项的执行进度。
         * @example `"{\"scaVul\":100,\"binary\":100,\"baseline\":100,\"vul\":100,\"webshell\":100,\"script\":100,\"sensitiveInfo\":100}"`
         */
        ProgressByProject: string;
        /**
         * 报告状态。取值：
         *  - **PREPARED**：准备中
         *  - **RUNNING**：执行中
         *  - **SUCCESS**：成功
         *  - **TIMEOUT**：超时
         *  - **FAILED**：失败
         * @example `SUCCESS`
         */
        ReportStatus: string;
        /**
         * 报告下载链接。
         * @example `http://newsas-oss-bucket.oss-cn-hangzhou.aliyuncs.com/agent_less_single_report****`
         */
        ReportDownloadUrl: string;
        /**
         * 检测数据量，单位MB。
         * @example `154.11`
         */
        MeasureSpace: number;
        InstanceId: string;
    }[];
}

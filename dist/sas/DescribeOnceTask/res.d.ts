export interface DescribeOnceTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
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
         * 分页查询时，每页包含的客户端任务的数量。默认值为**20**，表示每页包含20个客户端任务。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的客户端任务的总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页面显示的客户端任务条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 客户端任务查询的返回信息列表。
     */
    TaskManageResponseList: {
        /**
         * 任务类型。取值：
         * - **CLIENT\_PROBLEM\_CHECK**：客户端任务
         * - **CLIENT\_DEV\_OPS**：云运维任务
         * - **ASSET\_SECURITY\_CHECK**：资产采集任务
         * @example `CLIENT_PROBLEM_CHECK`
         */
        TaskType: string;
        /**
         * 任务进度，单位为百分比。
         * @example `10%`
         */
        Progress: string;
        /**
         * 任务状态。取值：
         * - **1**：已启动。
         * - **2**：已完成。
         * - **3**：已失败。
         * - **4**：已超时。
         * @example `1`
         */
        TaskStatus: number;
        /**
         * 任务执行详情。该参数为JSON格式。
         * - **causeCode**：排查原因返回码。
         * - **causeMsg**：排查原因返回信息。
         * - **resCode**：排查返回码。
         * - **resMsg**：排查返回信息。
         * - **problemType**：问题类型。
         * - **dispatchType**：任务下发方式。
         * - **uuid**：服务器UUID。
         * - **instanceId**：服务器实例的ID。
         * - **internetIp**：服务器外网IP。
         * - **intranetIp**：服务器的私网IP地址。
         * - **instanceName**：服务器实例的名称。
         * - **url**：排查日志下载链接。
         * @example `[
              {
                    "dispatchType": "manual",
                    "causeMsg": [],
                    "causeCode": [],
                    "resCode": [
                          "1003"
                    ],
                    "resMsg": [
                          "powershell -executionpolicy bypass -c \"(New-Object Net.WebClient).DownloadFile('http://aegis.alicdn.com/download/aegis_client_self_check/win32/aegis_checker.exe', $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath('.\\\\aegis_checker.exe'))\"; \"./aegis_checker.exe -b eyJtb2RlIjoxLCJqc3J2X2RvbWFpbiI6W10sImlzc3VlIjoib2ZmbGluZSIsInVwZGF0ZV9kb21haW4iOltdLCJ1dWlkIjoiaW5ldC1lYWUwNDg2Ny0wMDJmLTQyM2QtYWYwMC1jNzJjZDYyOWIyNDgiLCJjbWRfaWR4IjoiNDRjZThiZWI3ZGYyYTQxMjQ1NGM4ZDc5OTE1ODI1MzMifQ==\""
                    ],
                    "problemType": "offline",
                    "uuid": "inet-eae04867-002f-423d-af00-c72cd629****"
              }
        ]`
         */
        DetailData: string;
        /**
         * 任务状态的文本对象。取值：
         * - **INIT**：待启动。
         * - **START**：已启动。
         * - **DISPATCH**：自检命令已下发。
         * - **SUCCESS**：自检完成。
         * - **FAIL**：执行失败。
         * - **TIMEOUT**：已超时。
         * @example `INIT`
         */
        TaskStatusText: string;
        /**
         * 任务名称。
         * @example `CLIENT_PROBLEM_CHECK`
         */
        TaskName: string;
        /**
         * 任务实际开始的时间戳。单位为毫秒。
         * @example `1649732012000`
         */
        TaskStartTime: number;
        /**
         * 任务实际结束的时间戳。单位为毫秒。
         * @example `1650267989000`
         */
        TaskEndTime: number;
        /**
         * 任务ID。
         * @example `e900f528f5a6229bb640ca27cb44c98e`
         */
        TaskId: string;
        /**
         * 执行成功的任务数。
         * @example `7`
         */
        SuccessCount: number;
        /**
         * 执行失败的任务数。
         * @example `2`
         */
        FailCount: number;
        /**
         * 任务执行结果。
         * @example `successful`
         */
        ResultInfo: string;
    }[];
}

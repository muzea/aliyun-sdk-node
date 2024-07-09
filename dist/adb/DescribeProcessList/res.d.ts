export interface DescribeProcessListResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 总页数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    Items: {
        /**
         * 任务列表。
         */
        Process: {
            /**
             * 任务的开始时间，UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-11-19T02:48:15Z`
             */
            StartTime: string;
            /**
             * 查询任务已运行时间。单位：秒。
             * @example `11`
             */
            Time: number;
            /**
             * 任务的唯一标识，KILL PROCESS时使用。
             * @example `202011191048151921681492420315100****`
             */
            ProcessId: string;
            /**
             * 发起查询的IP地址。
             * @example `192.168.XX.XX:12308`
             */
            Host: string;
            /**
             * 数据库名。
             * @example `adb_demo`
             */
            DB: string;
            /**
             * 命令类型，仅支持SELECT类型。
             * @example `SELECT`
             */
            Command: string;
            /**
             * 用户名。
             * @example `test`
             */
            User: string;
            /**
             * 工作线程ID。
             * @example `49104`
             */
            Id: number;
            /**
             * 正在运行的SQL语句，默认返回前100字符。当传入参数ShowFull为True时，显示全文。
             * @example `select * from sbtest1,sbtest2,sbtest3,sbtest4`
             */
            Info: string;
        }[];
    };
}

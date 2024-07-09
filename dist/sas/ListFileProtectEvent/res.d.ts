export interface ListFileProtectEventResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `23AD0BD2-8771-5647-819E-6BA51E212F80`
     */
    RequestId: string;
    /**
     * 事件列表。
     */
    EventList: {
        /**
         * 报警通知级别。取值如下：
         * - 0：不告警
         * - 1： 提醒
         * - 2： 可疑
         * - 3： 高危
         * @example `1`
         */
        AlertLevel: number;
        /**
         * 进程关联的服务器的UUID。
         * @example `94b44720-d982-4d20-a4e1-80a1a57b****`
         */
        Uuid: string;
        /**
         * 规则名称。
         * @example `test-rule-1
        `
         */
        RuleName: string;
        /**
         * 事件最近一次发生时间。
         * @example `1694576692000`
         */
        LatestTime: number;
        /**
         * 事件状态。取值如下：
         * - 0： 未处理
         * - 1： 我已手工处理
         * - 2： 已加白
         * - 3： 已忽略
         * @example `1`
         */
        Status: number;
        /**
         * 事件ID。
         * @example `161757`
         */
        Id: number;
        /**
         * 服务器实例的名称。
         * @example `kyy-admin-01`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP地址。
         * @example `121.40.XX.XX
        `
         */
        InternetIp: string;
        /**
         * 当前资产的私网IP地址。
         * @example `172.22.XX.XX`
         */
        IntranetIp: string;
        /**
         * 进程操作的文件路径。
         * @example `/etc/pam.d/su`
         */
        FilePath: string;
        /**
         * 进程对文件进行的操作。
         * @example `DELETE`
         */
        Operation: string;
        /**
         * 备注。
         * @example `test`
         */
        Remark: string;
        /**
         * 进程权限。
         * @example `rwxr-xr-x`
         */
        ProcPermission: string;
        /**
         * 事件命令行。
         * @example `["touch","/test/aaaa"]`
         */
        CmdLine: string;
        /**
         * 进程路径。
         * @example ` /usr/bin/sshpass`
         */
        ProcPath: string;
        /**
         * 事件处理时间。
         * @example `1694576692000`
         */
        HandleTime: number;
        /**
         * 事件进程ID。
         * @example `52636`
         */
        ProcessId: string;
    }[];
    /**
     * 查询结果的分页信息。
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
         * 数据的总条数。
         * @example `149`
         */
        TotalCount: number;
    };
}

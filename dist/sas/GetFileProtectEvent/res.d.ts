export interface GetFileProtectEventResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 返回数据详情。
     */
    Data: {
        /**
         * 资产实例的UUID。
         * @example `49f1360f-62c8-4b48-a24c-5cc317656419`
         */
        Uuid: string;
        /**
         * 规则名称。
         * @example `test-000`
         */
        RuleName: string;
        /**
         * 首次发生时间戳。
         * @example `1694576692000`
         */
        FirstTime: number;
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
         * 进程路径。
         * @example `/bin/bash33`
         */
        ProcPath: string;
        /**
         * 文件路径。
         * @example `/usr/local`
         */
        FilePath: string;
        /**
         * 事件命令行。
         * @example `["touch","/usr/local/aaaa"]`
         */
        CmdLine: string;
        /**
         * 进程权限。
         * @example `rwxr-xr-x`
         */
        FilePermission: string;
        /**
         * 进程对文件进行的操作。
         * @example `DELETE`
         */
        Operation: string;
        /**
         * 唯一ID。
         * @example `55037`
         */
        Id: number;
        /**
         * 报警通知级别。取值如下：
         * - 0： 不告警
         * - 1： 提醒
         * - 2： 可疑
         * - 3： 高危
         * @example `1`
         */
        AlertLevel: number;
        /**
         * 实例名称。
         * @example `i-wz92q7m5hsbgfhdss***`
         */
        InstanceName: string;
        /**
         * 关联实例的公网IP。
         * @example `172.16.XX.XX`
         */
        InternetIp: string;
        /**
         * 关联实例的私网IP。
         * @example `10.42.XX.XX`
         */
        IntranetIp: string;
        /**
         * 事件处理时间。
         * @example `1694576692000`
         */
        HandleTime: number;
        /**
         * 备注信息。
         * @example `["test"]`
         */
        Remark: string;
        /**
         * 事件进程ID。
         * @example `3453`
         */
        ProcessId: string;
    };
}

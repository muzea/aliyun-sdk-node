export interface DescribeCloudAssistantAttributesResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 实例命令助手安装状态结果集合。
     */
    CloudAssistant: {
        /**
         * 轻量应用服务器实例ID。
         * @example `85dbe3e7cc7b49e1a3df4af3bfa4ebbf`
         */
        InstanceId: string;
        /**
         * 实例内的命令助手是否在运行中。可能值：
         * true：2 分钟内有心跳。
         * false：2 分钟内无心跳。
         * @example `true`
         */
        CloudAssistantStatus: string;
        /**
         * 最近一次命令执行的时间。
         * @example `2021-03-15T08:00:00Z
        `
         */
        LastInvokedTime: string;
        /**
         * 命令助手Agent版本号，若未安装或未运行命令助手Agent，则该值为空。
         * @example `2.2.0.106
        `
         */
        CloudAssistantVersion: string;
        /**
         * 实例内的命令助手运行中的任务数。
         * @example `0`
         */
        ActiveTaskCount: number;
        /**
         * 实例内的命令助手已完成的任务数。
         * @example `4`
         */
        InvocationCount: number;
        /**
         * 命令助手最近一次心跳时间。该值平均每分钟（有上下 5 秒的随机浮动，最短 55 秒，最长 65 秒）更新一次。
         * @example `2021-03-15T09:00:00Z
        `
         */
        LastHeartbeatTime: string;
        /**
         * 实例操作系统类型。可能值：
         * - Windows。
         * - Linux。
         * - FreeBSD。
         * @example `Linux`
         */
        OSType: string;
        /**
         * 实例内的命令助手是否支持会话管理功能。若不支持，表示命令助手版本较低，请将客户端更新至最新版本。
         * 命令助手支持会话管理功能的最低版本如下：
         * Linux：2.2.3.189
         * Windows：2.1.3.189
         * @example `true`
         */
        SupportSessionManager: boolean;
    }[];
    /**
     * 总条数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
}

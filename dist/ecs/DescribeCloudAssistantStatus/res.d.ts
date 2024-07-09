export interface DescribeCloudAssistantStatusResponse {
    /**
     * 每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
    InstanceCloudAssistantStatusSet: {
        /**
         * 实例云助手安装状态结果集合。
         */
        InstanceCloudAssistantStatus: {
            /**
             * 实例内的云助手是否在运行中。可能值：
             * - true：2分钟内有心跳。
             * - false：2分钟内无心跳。
             * @example `true`
             */
            CloudAssistantStatus: string;
            /**
             * 最近一次命令执行的时间。
             * @example `2021-03-15T08:00:00Z`
             */
            LastInvokedTime: string;
            /**
             * 云助手Agent版本号，若未安装或未运行云助手Agent，则该值为空。
             * @example `2.2.0.106`
             */
            CloudAssistantVersion: string;
            /**
             * 实例内的云助手运行中的任务数。
             * @example `0`
             */
            ActiveTaskCount: number;
            /**
             * 实例内的云助手已完成的任务数。
             * @example `2`
             */
            InvocationCount: number;
            /**
             * 实例ID。
             * @example `i-bp1iudwa5b1tqa****`
             */
            InstanceId: string;
            /**
             * 云助手最近一次心跳时间。该值平均每分钟（有上下5秒的随机浮动，最短55秒，最长65秒）更新一次。
             * @example `2021-03-15T09:00:00Z`
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
             * 实例内的云助手是否支持会话管理功能。若不支持，表示云助手版本较低，请将客户端更新至最新版本。
             * 云助手支持会话管理功能的最低版本如下：
             * - Linux：2.2.3.189
             * - Windows：2.1.3.189
             * @example `true`
             */
            SupportSessionManager: boolean;
        }[];
    };
}

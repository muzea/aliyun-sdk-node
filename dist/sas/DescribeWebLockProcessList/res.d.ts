export interface DescribeWebLockProcessListResponse {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `028CF634-5268-5660-9575-48C9ED6BF880`
     */
    RequestId: string;
    /**
     * 每页显示的数据最大条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 网页防篡改进程列表总数。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 网页防篡改进程列表。
     */
    List: {
        /**
         * 进程加白状态。
         * - **1**：已加白
         * - **0**：未加白
         * @example `0`
         */
        Status: number;
        /**
         * 进程名称。
         * @example `cron`
         */
        ProcessName: string;
        /**
         * 服务器唯一标识
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 网页防篡改服务器的公网ip地址。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 网页防篡改服务的实例名称。
         * @example `test_ecs`
         */
        InstanceName: string;
        /**
         * 进程路径。
         * @example `/usr/sbin/cron`
         */
        ProcessPath: string;
        /**
         * 当前页显示的网页防篡改进程的数量。
         * @example `33`
         */
        Count: string;
        /**
         * 网页防篡改服务器的私网ip。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
    }[];
}

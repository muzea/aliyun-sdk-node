export interface ListTraceAppsResponse {
    /**
     * 接口状态码：
     * - `2XX`：成功
     * - `3XX`：重定向
     * - `4XX`：请求错误
     * - `5XX`：服务器错误
     * @example `200`
     */
    Code: number;
    /**
     * 请求参数错误时返回的信息。
     * @example `Internal error. Please try again. Contact the DingTalk service account if the issue persists after multiple retries.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `40B10E04-81E8-4643-970D-F1B38F2E****`
     */
    RequestId: string;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的应用监控列表信息。
     */
    TraceApps: {
        /**
         * 监控任务类型：
         * - `TRACE`：应用监控
         * - `RETCODE`：前端监控
         * @example `TRACE`
         */
        Type: string;
        /**
         * 应用名称。
         * @example `test-app`
         */
        AppName: string;
        /**
         * 更新时间的时间戳，单位为毫秒。
         * @example `1529667762000`
         */
        UpdateTime: number;
        /**
         * ARMS控制台是否显示该应用：
         * - `true`：显示
         * - `false`：不显示
         * @example `true`
         */
        Show: boolean;
        /**
         * 创建时间的时间戳，单位为毫秒。
         * @example `1529667762000`
         */
        CreateTime: number;
        /**
         * 应用的ID标识串。
         * @example `a5f9bdeb-2627-4dbe-9247-****`
         */
        Pid: string;
        /**
         * 应用ID。
         * @example `123`
         */
        AppId: number;
        /**
         * 用户ID。
         * @example `113197164949****`
         */
        UserId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 应用标签。
         */
        Labels: string[];
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签的键（key）。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 标签的值（value）。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 资源组ID。
         * @example `rg-acfmxyexli2****`
         */
        ResourceGroupId: string;
        /**
         * 应用来源。
         * @example `ACK`
         */
        Source: string;
        /**
         * 工作负载名。
         * @example `nginx-deployment `
         */
        WorkloadName: string;
        /**
         * 工作负载类型。
         * @example `Deployment`
         */
        WorkloadKind: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 集群ID。
         * @example `cc7a37ee31aea4ed1a059eff8034b****`
         */
        ClusterId: string;
        /**
         * 语言。
         * @example `PHP`
         */
        Language: string;
    }[];
}

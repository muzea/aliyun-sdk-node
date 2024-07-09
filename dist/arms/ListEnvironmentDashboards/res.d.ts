export interface ListEnvironmentDashboardsResponse {
    /**
     * Id of the request
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C647A`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 查询是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 操作结果。
     */
    Data: {
        /**
         * 大盘列表。
         */
        Dashboards: {
            /**
             * 文件夹UID。
             * @example `1374923841627893`
             */
            FolderUid: string;
            /**
             * 地域。
             * @example `cn-hongkong`
             */
            Region: string;
            /**
             * 关键字。
             */
            Tags: string[];
            /**
             * Grafana大盘标题。
             * @example `kafka-instance`
             */
            Title: string;
            /**
             * 安装多个Grafana大盘时的大盘唯一标识符，是展示在页面上的唯一业务ID。
             * @example `1537863211936042`
             */
            Uid: string;
            /**
             * Grafana大盘的完整URL。
             * @example `http://xxx`
             */
            Url: string;
        }[];
        /**
         * 返回结果的总项目数量。
         * @example `1`
         */
        Total: number;
    };
}

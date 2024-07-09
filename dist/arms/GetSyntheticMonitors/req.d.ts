export interface GetSyntheticMonitorsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 查询条件。
     */
    "Filter": {
        /**
         * 任务类型：
         * - 1：ICMP
         * - 2：TCP
         * - 3：DNS
         * - 4：HTTP
         * - 5：网站测速
         * - 6：文件下载
         * @example `1`
         */
        TaskType: number;
        /**
         * 监测点类型。
         * - 1：PC端
         * - 2：移动端
         * @example `1`
         */
        MonitorCategory: number;
        /**
         * 网络类型。
         * - 1：内网
         * - 2：公网
         * @example `1`
         */
        Network: number;
    };
}

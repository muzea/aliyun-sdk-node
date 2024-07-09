export interface SearchTraceAppByPageResponse {
    /**
     * 请求ID。
     * @example `4B446DF2-3DDD-4B5B-8E3F-D5225120****`
     */
    RequestId: string;
    /**
     * 返回的页面信息。
     */
    PageBean: {
        /**
         * 返回结果的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 返回结果的每页项目数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询结果的总项目数量。
         * @example `3`
         */
        TotalCount: number;
        /**
         * 应用监控任务信息。
         */
        TraceApps: {
            /**
             * 监控任务类型：
             * - `TRACE`：应用监控。
             * - `RETCODE`：前端监控。
             * @example `TRACE`
             */
            Type: string;
            /**
             * 应用名称。
             * @example `test-app`
             */
            AppName: string;
            /**
             * 更新时间的时间戳。
             * @example `1531291867000`
             */
            UpdateTime: number;
            /**
             * 是否在ARMS控制台显示：
             * - `true`：显示。
             * - `false`：不显示。
             * @example `true`
             */
            Show: boolean;
            /**
             * 创建时间的时间戳。
             * @example `1531291867000`
             */
            CreateTime: number;
            /**
             * 应用的ID标识串。
             * @example `atc889zkcf@d8deedfa9bf****`
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
             * 应用别名列表。
             */
            Labels: string[];
            /**
             * 标签。
             */
            Tags: {
                /**
                 * 标签的键(key)。
                 * @example `TestKey`
                 */
                Key: string;
                /**
                 * 标签的值(value)。
                 * @example `TestValue`
                 */
                Value: string;
            }[];
            /**
             * 资源组 ID。
             * @example `rg-acfmxyexli2****`
             */
            ResourceGroupId: string;
        }[];
    };
}

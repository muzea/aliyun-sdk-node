export interface SearchTraceAppByNameResponse {
    /**
     * 请求ID。
     * @example `F7781D4A-2818-41E7-B7BB-79D809E9****`
     */
    RequestId: string;
    /**
     * 应用监控信息。
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
         * @example `1593486786000`
         */
        UpdateTime: number;
        /**
         * ARMS控制台中是否显示该应用：
         * - `true`：显示。
         * - `false`：不显示。
         * @example `true`
         */
        Show: boolean;
        /**
         * 创建时间的时间戳
         * @example `1593486786000`
         */
        CreateTime: number;
        /**
         * PID。具体请参考[PID](https://help.alimama.com/?spm=a219t.23786078.0.0.290575a55P1LBx#!/search/index?spm=&keyWord=PID&knowledgeId=5625118&categoryId=1000040170)。
         * > 使用V1.1.0及以上版本的SDK可用该字段。
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
         * 应用别名。
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
         * 资源组ID。
         * @example `rg-acfmxyexli2****`
         */
        ResourceGroupId: string;
    }[];
}

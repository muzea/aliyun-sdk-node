export interface GetTraceAppResponse {
    /**
     * 请求ID。
     * @example `D80ADAAC-8C32-5479-BD14-C28CF832****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    TraceApp: {
        /**
         * 监控任务类型：
         * - `TRACE`：应用监控。
         * - `RETCODE`：前端监控。
         * @example `TRACE`
         */
        Type: string;
        /**
         * 应用名称。
         * @example `arms-k8s-demo`
         */
        AppName: string;
        /**
         * 更新时间的时间戳。
         * @example `1635700348000`
         */
        UpdateTime: number;
        /**
         * ARMS控制台是否显示该应用：
         * - `true`：显示。
         * - `false`：不显示。
         * @example `true`
         */
        Show: boolean;
        /**
         * 创建时间的时间戳。
         * @example `1576599253000`
         */
        CreateTime: number;
        /**
         * 应用的ID标识串。
         * @example `b590lhguqs@d8deedfa9bf****`
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
         * 应用标签列表。
         */
        Labels: string[];
        /**
         * 键值对标签。
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
         * 应用来源。
         * @example `ACSK8S`
         */
        Source: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxyexli2****`
         */
        ResourceGroupId: string;
        /**
         * 集群ID，仅容器场景下使用。
         * @example `c905d1364c2dd4b6284a3f41790c4****`
         */
        ClusterId: string;
        /**
         * 编码语言。
         * @example `java`
         */
        Language: string;
    };
}

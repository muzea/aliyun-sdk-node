export interface SearchEventsResponse {
    /**
     * 报警事件是否被触发，若不填写则查询全部。
     * - `1`：触发
     * - `0`：未触发
     * @example `0`
     */
    IsTrigger: number;
    /**
     * 请求ID。
     * @example `32940175-181B-4B93-966E-4BB69176****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PageBean: {
        /**
         * 查询结果分页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 查询结果分页的每页项目数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询结果总数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 报警事件列表。
         */
        Event: {
            /**
             * 事件发生时间的时间戳。
             * @example `1595569020000`
             */
            EventTime: number;
            /**
             * 事件等级。
             * @example `1`
             */
            EventLevel: string;
            /**
             * 事件关联的报警规则判断条件配置。
             * @example `{\"operator\":\"&\",\"rules\":[{\"aggregates\":\"AVG\",\"alias\":\"JVM_线程总数\",\"measure\":\"appstat.jvm.ThreadCount\",\"nValue\":1,\"operator\":\"HOH_DOWN\",\"value\":50.0}]}`
             */
            AlertRule: string;
            /**
             * 事件内容，为JSONString格式，键表示维度，值表示此维度的报警内容。
             * @example `unknow紧急报警\nip：172.27.XX.XX\n应用名 = test\nRegion = cn-shenzhen\n异常信息 = {\"timestamp\"：\"1615447972235\"}`
             */
            Message: string;
            /**
             * 事件关联的报警规则类型（一般不展示）：
             * - `1`：基于下钻数据集的自定义监控报警规则。
             * - `3`：基于平铺数据集的自定义监控报警规则。
             * - `4`：前端监控报警规则，包含默认前端监控报警规则（AlertType=6）。
             * - `5`：应用监控报警规则，包含默认应用监控报警规则（AlertType=7）。
             * - `6`：默认前端监控报警规则。
             * - `7`：默认应用监控报警规则。
             * - `8`：链路追踪Tracing Analysis报警规则。
             * - `101`：Prometheus监控报警规则。
             * @example `4`
             */
            AlertType: number;
            /**
             * 事件关联的报警规则名称。
             * @example `alertName`
             */
            AlertName: string;
            /**
             * 事件记录ID。
             * @example `123`
             */
            Id: number;
            /**
             * 事件关联的报警规则ID。
             * @example `123`
             */
            AlertId: number;
            /**
             * 链接列表。
             */
            Links: string[];
        }[];
    };
}

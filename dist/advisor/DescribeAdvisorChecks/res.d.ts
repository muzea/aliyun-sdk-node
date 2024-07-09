export interface DescribeAdvisorChecksResponse {
    /**
     * 错误编码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `566331F9-5AB3-550F-B745-A730331F97A9`
     */
    RequestId: string;
    Data: {
        /**
         * 查询结果。
         */
        AdvisorCheck: {
            /**
             * 诊断项是否被禁用状态：
             * - **enabled**: 可用
             * - **disabled**: 禁用
             * @example `enabled`
             */
            Status: string;
            /**
             * 云产品Code。
             * @example `ecs`
             */
            Product: string;
            /**
             * 操作字段，使用前端模板或诊断建议action中定义json字段。
             * @example `[{"key": "Detail", "value": "/diagnosis?product=${Product}&resourceId=${Resource.resourceId}", "type": "template"} ]`
             */
            OperateColumn: string;
            /**
             * 巡检项配置更新时间，格式为yyyy-mm-dd hh:mm:ss。
             * @example `2023-07-01 00:00:00`
             */
            GmtModified: string;
            /**
             * 展示列，即控制台展示巡检项详情的具体配置。
             * @example `[{"key":"EcsHighCpuUtilization_xxxx", "type":"DEFAULT"}, {"key":"EcsHighCpuUtilization_xxxx", "type":"DEFAULT"}, {"key":"EcsHighCpuUtilization_xxxx", "type":"DEFAULT"}, ]`
             */
            ViewColumn: string;
            /**
             * 巡检项配置创建时间，格式为yyyy-mm-dd hh:mm:ss。
             * @example `2023-07-01 00:00:00`
             */
            GmtCreated: string;
            /**
             * 巡检项描述，推荐操作和操作说明。
             * @example `CPU负载，公网带宽负载，内存负载百分比算法超过标准值过高`
             */
            Description: string;
            /**
             * 巡检建议一句话简述。
             * @example `请排查实例资源占用情况或升级实例规格`
             */
            Tips: string;
            /**
             * 巡检项Code。
             * @example `EcsHighCpuUtilization`
             */
            Code: string;
            /**
             * 巡检项分类：
             * - **1**: 安全合规
             * - **2**: 性能效率
             * - **3**: 业务稳定
             * - **4**: 成本优化
             * - **5**: 服务限制
             * @example `1`
             */
            Category: string;
            /**
             * 巡检项名称。
             * @example `ECS 性能负载巡检`
             */
            Name: string;
        }[];
    };
}

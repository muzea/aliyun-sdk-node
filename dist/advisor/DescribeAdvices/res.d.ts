export interface DescribeAdvicesResponse {
    /**
     * 请求ID。
     * @example `566331F9-5AB3-550F-B745-A730331F97A9`
     */
    RequestId: string;
    Data: {
        /**
         * 查询结果。
         */
        Advice: {
            /**
             * 严重级别：
             * - **1**:  警告
             * - **2**:  严重
             * @example `1`
             */
            Severity: number;
            /**
             * 云产品Code。
             * @example `ecs`
             */
            Product: string;
            /**
             * 巡检项结果更新时间，格式为yyyy-mm-dd hh:mm:ss。
             * @example `2023-07-01 00:00:00`
             */
            GmtModified: string;
            /**
             * 是否已过期：
             * - **false**: 未过期，
             * - **true**: 已过期
             * @example `false`
             */
            IsExpired: boolean;
            /**
             * 巡检项结果创建时间，格式为yyyy-mm-dd hh:mm:ss。
             * @example `2023-07-01 00:00:00`
             */
            GmtCreated: string;
            /**
             * 资源详情Json，具体请参考各个云产品实例详情查询相关api文档。
             * @example `{"resourceId": "i-2zecnwitr2s7aca6****","resourceName": "ecs-20230701","regionId": "cn-hangzhou",...}`
             */
            Resource: string;
            /**
             * 巡检项描述，推荐操作和操作说明。
             * @example `CPU负载，公网带宽负载，内存负载百分比算法超过标准值过高`
             */
            Description: string;
            /**
             * 巡检项Code。
             * @example `EcsHighCpuUtilization`
             */
            CheckId: string;
            /**
             * 阿里云用户ID。
             * @example `192895059480****`
             */
            AliyunId: number;
            /**
             * 资源/实例ID。
             * @example `i-2zecnwitr2s7aca6****`
             */
            ResourceId: string;
            /**
             * 结果Json详情，与控制台配置的展示列格式保持一致。
             * @example `[{"key":"EcsHighCpuUtilization_xxxx", "value":"xxx"}, {"key":"EcsHighCpuUtilization_xxxx", "value":"xxx"}, {"key":"EcsHighCpuUtilization_xxxx", "value":"xxx"}]`
             */
            Content: string;
            /**
             * 巡检结果ID。
             * @example `40200899`
             */
            Id: number;
            /**
             * 巡检项名称。
             * @example `ECS 性能负载巡检
            `
             */
            CheckName: string;
        }[];
    };
}

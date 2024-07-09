export interface GetHistoryAdvicesResponse {
    /**
     * 请求ID。
     * @example `566331F9-5AB3-550F-B745-A730331F97A9`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 分页号。
         * @example `1`
         */
        PageNo: number;
        /**
         * 数据总条数。
         * @example `100`
         */
        Total: number;
        /**
         * 查询结果对象数组。
         */
        Result: {
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
             * 巡检项结果创建时间，格式为yyyy-mm-dd hh:mm:ss。
             * @example `2023-07-01 00:00:00`
             */
            GmtCreated: string;
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
             * 资源/实例ID。
             * @example `i-2zecnwitr2s7aca6****`
             */
            ResourceId: string;
            /**
             * 巡检项名称。
             * @example `ECS 性能负载巡检`
             */
            CheckName: string;
            /**
             * 巡检项对应资源跳转url。
             * @example `https://ecs.console.aliyun.com/#/server/i-2zecnwitr2s7aca6****​/detail?regionId=cn-hangzhou`
             */
            Url: string;
        }[];
    };
}

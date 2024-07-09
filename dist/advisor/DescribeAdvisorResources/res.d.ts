export interface DescribeAdvisorResourcesResponse {
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
         * 每页数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据总条数。
         * @example `100`
         */
        Total: number;
        Result: {
            /**
             * 查询结果数组。
             */
            Resource: {
                /**
                 * 资源详情Json，具体请参考各个云产品实例详情查询相关api文档。
                 * @example `{"resourceId": "i-2zecnwitr2s7aca6****","resourceName": "ecs-20230701","regionId": "cn-hangzhou",...}`
                 */
                Data: string;
                /**
                 * 资源/实例ID。
                 * @example `i-2zecnwitr2s7aca6****`
                 */
                ResourceId: string;
                /**
                 * 云产品Code。
                 * @example `ecs`
                 */
                Product: string;
                /**
                 * 资源名称。
                 * @example `ecs-20230701`
                 */
                ResourceName: string;
                /**
                 * 地域信息。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
            }[];
        };
    };
}

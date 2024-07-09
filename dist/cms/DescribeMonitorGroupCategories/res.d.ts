export interface DescribeMonitorGroupCategoriesResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9E0347B0-EBC3-4769-A78D-D96F21C6BB52`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 应用分组中资源的云服务类型。
     */
    MonitorGroupCategories: {
        /**
         * 应用分组ID。
         * @example `123456`
         */
        GroupId: number;
        MonitorGroupCategory: {
            /**
             * 应用分组的云服务类型。
             */
            CategoryItem: {
                /**
                 * 云服务的资源数量。
                 * @example `1`
                 */
                Count: number;
                /**
                 * 云产品名称缩写。
                 * > 关于如何获取云产品名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
                 * @example `ecs`
                 */
                Category: string;
            }[];
        };
    };
}

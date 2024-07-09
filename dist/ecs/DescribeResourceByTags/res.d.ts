export interface DescribeResourceByTagsResponse {
    /**
     * 请求ID。
     * @example `1C1E5359-71D7-44D8-8FAA-0327B549157X`
     */
    RequestId: string;
    /**
     * 查询结果显示的每页的信息条目数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 查询结果显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回的资源总数。
     * @example `8`
     */
    TotalCount: number;
    Resources: {
        /**
         * 绑定标签的资源信息集合。
         */
        Resource: {
            /**
             * 资源类型。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `i-bp16t2cgmiiy7t1c****`
             */
            ResourceId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}

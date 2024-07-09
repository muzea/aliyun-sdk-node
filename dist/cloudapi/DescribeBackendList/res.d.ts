export interface DescribeBackendListResponse {
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `090A0DF9-9144-5236-8CBA-E18DE317722D`
     */
    RequestId: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 后端服务列表
     */
    BackendInfoList: {
        /**
         * 后端服务名称
         * @example `test`
         */
        BackendName: string;
        /**
         * 后端服务类型
         * @example `HTTP`
         */
        BackendType: string;
        /**
         * 后端服务修改时间
         * @example `2022-01-25T11:22:29Z`
         */
        ModifiedTime: string;
        /**
         * 描述信息
         * @example `test`
         */
        Description: string;
        /**
         * 后端服务创建时间
         * @example `2022-01-25T11:22:29Z`
         */
        CreatedTime: string;
        /**
         * 后端服务id
         * @example `35bd31d32c9c425ebbe9330db9f8c375`
         */
        BackendId: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签的key
             * @example `groupName`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `e3b881d0-e2d0-4dfb-b1fb-a2a3d1e534b7`
             */
            Value: string;
        }[];
    }[];
}

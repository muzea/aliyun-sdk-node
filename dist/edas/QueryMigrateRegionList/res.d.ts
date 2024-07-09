export interface QueryMigrateRegionListResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    RegionEntityList: {
        /**
         * 命名空间列表
         */
        RegionEntity: {
            /**
             * 命名空间名称
             * @example `Beta`
             */
            RegionName: string;
            /**
             * 命名空间ID
             * @example `cn-beijing:beta`
             */
            RegionNo: string;
        }[];
    };
}

export interface ListUserClustersResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 最后修改时间的UTC时间
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtModified: string;
        /**
         * 状态
         * @example `1`
         */
        status: string;
        /**
         * 创建时间的UTC时间
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 用户cluster名称
         * @example `mycluster-for-airec`
         */
        name: string;
        /**
         * meta
         */
        meta: {
            /**
             * meta类型
             * @example `UserCluster`
             */
            metaType: string;
            /**
             * 描述信息
             * @example `tst`
             */
            description: string;
        };
    }[];
    /**
     * headers info
     */
    headers: {
        /**
         * 总数
         * @example `1`
         */
        X-Total-Count: number;
    };
    /**
     * 请求ID
     * @example `1E2CBBA8-C623-4FEE-BC84-9672E460CA39`
     */
    requestId: string;
}

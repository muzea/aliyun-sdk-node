export interface CreateABTestGroupResponse {
    /**
     * 请求ID
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 创建时间
         * @example `1588839490`
         */
        created: number;
        /**
         * 状态
         * - 0 未生效
         * - 1 生效
         * @example `1`
         */
        status: number;
        /**
         * 最后修改时间
         * @example `1588839490`
         */
        updated: number;
        /**
         * 组别名
         * @example `Group_2020-5-7_15:23:3`
         */
        name: string;
        /**
         * 组ID
         * @example `13466`
         */
        id: string;
    };
}

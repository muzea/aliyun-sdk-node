export interface ListABTestScenesResponse {
    /**
     * 请求ID
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 实验场景
     * 参考：[ABTestScene](~~173618~~)
     */
    result: {
        /**
         * 创建时间
         * @example `1588836130`
         */
        created: number;
        /**
         * 状态
         * -  0 未生效
         * -  1 生效
         * @example `1`
         */
        status: number;
        /**
         * 最后修改时间
         * @example `1588836129`
         */
        updated: number;
        /**
         * 组别名
         * @example `kevintest_2020-5-7_15:21:482`
         */
        name: string;
        /**
         * 组ID
         * @example `20404`
         */
        id: string;
        /**
         * 场景列表
         */
        values: string[];
    }[];
}

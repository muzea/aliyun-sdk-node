export interface DescribeABTestSceneResponse {
    /**
     * 请求ID。
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 实验场景。
     */
    result: {
        /**
         * 创建时间。
         * @example `1596527691`
         */
        created: number;
        /**
         * 场景状态
         * - 0 停止实验
         * - 1 启动实验
         * @example `0`
         */
        status: number;
        /**
         * 最后修改时间
         * @example `1596527691`
         */
        updated: number;
        /**
         * 场景别名
         * @example `"test"`
         */
        name: string;
        /**
         * 场景ID
         * @example `20614`
         */
        id: string;
        /**
         * 场景标识
         */
        values: string[];
    };
}

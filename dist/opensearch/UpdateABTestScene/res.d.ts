export interface UpdateABTestSceneResponse {
    /**
     * 请求ID
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 实验场景
     * 参考：[ABTestScene](~~173618~~)
     * @example `{}`
     */
    result: {
        /**
         * 创建时间
         * @example `1596527691`
         */
        created: number;
        /**
         * 试验参数
         * @example `{}`
         */
        params: any;
        /**
         * 实验分桶百分比取值范围：0-100
         * @example `111`
         */
        traffic: number;
        /**
         * 实验状态
         * - true：开启
         * - false：停止
         * @example `true`
         */
        online: boolean;
        /**
         * 场景别名
         * @example `kevintest22`
         */
        name: string;
        /**
         * 最后修改时间
         * @example `1596527691`
         */
        updated: number;
        /**
         * 场景ID
         * @example `20614`
         */
        id: string;
    };
}

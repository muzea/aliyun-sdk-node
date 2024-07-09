export interface GetPipelineResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 管道信息
     */
    Pipeline: {
        /**
         * 管道ID
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        PipelineId: string;
        /**
         * 管道名称
         * @example `test-pipeline`
         */
        Name: string;
        /**
         * 管道类型
         * @example `Standard`
         */
        Speed: string;
        /**
         * 管道优先级。取值范围为1-10。
         * @example `6`
         */
        Priority: number;
        /**
         * 管道状态
         * @example `Active`
         */
        Status: string;
        /**
         * 模板创建时间
         * @example `2022-07-12T16:17:54Z`
         */
        CreateTime: string;
        /**
         * 模板修改时间
         * @example `2022-07-12T16:17:54Z`
         */
        ModifiedTime: string;
    };
}

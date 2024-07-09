export interface ListPipelineGroupPipelinesResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * 流水线列表
     */
    pipelines: {
        /**
         * 流水线名称
         * @example `流水线名称`
         */
        pipelineName: string;
        /**
         * 流水线创建时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * 流水线id
         * @example `1111`
         */
        pipelineId: number;
    }[];
    /**
     * 总数
     * @example `20`
     */
    totalCount: number;
    /**
     * 分页token,为空表示没有下一页
     * @example `aaaa`
     */
    nextToken: string;
}

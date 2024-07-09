export interface ListPipelinesResponse {
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
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 总数
     * @example `50`
     */
    totalCount: number;
    /**
     * 分页Token
     * @example `ssaassasass`
     */
    nextToken: string;
    /**
     * 流水线
     */
    pipelines: {
        /**
         * 流水线名称
         * @example `流水线`
         */
        pipelineName: string;
        /**
         * 流水线id
         * @example `124`
         */
        pipelineId: number;
        /**
         * 创建时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * 创建人阿里云账号id
         * @example `22121222`
         */
        creatorAccountId: string;
        groupId: number;
    }[];
}

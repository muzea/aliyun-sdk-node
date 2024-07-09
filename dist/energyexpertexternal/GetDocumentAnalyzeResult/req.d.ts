export interface GetDocumentAnalyzeResultRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 作业ID，指定要查询哪一个文档的解析结果。通过”提交文档解析作业“接口提交文档的返回参数。
         * @example `bfce2248-1546-4298-8bcf-70ac26e69646`
         */
        jobId: string;
    };
}

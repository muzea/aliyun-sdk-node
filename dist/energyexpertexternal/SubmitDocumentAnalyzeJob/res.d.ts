export interface SubmitDocumentAnalyzeJobResponse {
    /**
     * 请求ID
     * @example `4A0AEC56-5C9A-5D47-93DF-7227836FFF82`
     */
    requestId: string;
    /**
     * 返回结果
     */
    data: {
        /**
         * 作业ID，用于调用”获取文档解析结果“接口的请求参数。
         * @example `bfce2248-1546-4298-8bcf-70ac26e69646`
         */
        jobId: string;
    };
}

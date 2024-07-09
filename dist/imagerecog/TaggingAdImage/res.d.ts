export interface TaggingAdImageResponse {
    /**
     * 请求ID。
     * @example `572974F0-1014-5C60-97EE-DBFFC0FF7616`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 标签。目前仅输出scene（场景）和human（人）。具体取值请参见下表“TagInfo字段参数说明”。
         */
        TagInfo: any;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

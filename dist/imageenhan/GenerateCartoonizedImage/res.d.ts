export interface GenerateCartoonizedImageResponse {
    /**
     * 请求ID。
     * @example `48f38719-f0c2-4784-a9cc-30df95e393a9`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 输出图像的URL。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/generative-cartoon/2023-02-02/5a3e5760-ff27-4321-8976-d05656fb716a/20230202_154009511910_pclb0gomva.jpg?Expires=1675325422&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=UmAa7HxeumVkDfrdoL02dtztwS****`
         */
        ResultUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

export interface SuperResolveVideoResponse {
    /**
     * 请求ID。
     * @example `186AC396-0EEC-46F1-AAA1-BF3585227427`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 输出处理后的视频URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-super-resolution/2020-03-20-12/12%3A11-UlLVELFzIy5EAyEh.mp4?Expires=1584708132&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=0V8yKrCVybC4KIPtRuGKJDJaQT****`
         */
        VideoUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

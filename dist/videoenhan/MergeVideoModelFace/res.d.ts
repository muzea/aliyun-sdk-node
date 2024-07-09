export interface MergeVideoModelFaceResponse {
    /**
     * 请求ID。
     * @example `334F180F-3B50-51CB-B4CB-9A86A542D3BC`
     */
    RequestId: string;
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~159423~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 处理后的视频URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-face-fusion/334F180F-3B50-51CB-B4CB-9A86A542D3BC-5716-20210906-074905.mp4?Expires=1630916420&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=OEtNqVYxXRwkyO4BrsYVJ8q5bx****`
         */
        VideoURL: string;
    };
}

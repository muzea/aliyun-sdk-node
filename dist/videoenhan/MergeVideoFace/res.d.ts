export interface MergeVideoFaceResponse {
    /**
     * 请求ID。
     * @example `DEF90E76-B62D-45EF-8835-CA3C83842B18`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 处理后的视频URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-face-fusion/A657011C-82B4-4705-A5DB-69B18B7CE89D.mp4?Expires=1606378308&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=Hl3cq5XedTGCscOSr0OGVxAS2o****`
         */
        VideoURL: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

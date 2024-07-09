export interface SegmentVideoBodyResponse {
    /**
     * 请求ID。
     * @example `49E2CC28-ED1D-4CC5-854D-7D0AE2B20976`
     */
    RequestId: string;
    /**
     * 返回的数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 输出结果图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-human-segmentation/D86DDFBC-B8ED-4780-9E6A-E5BA98D7CC9F.mp4?Expires=1584709406&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=Fx5HVxvRjAMIjWL2OvhTlOO4cC****`
         */
        VideoUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

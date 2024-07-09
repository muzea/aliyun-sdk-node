export interface GenerateVideoResponse {
    /**
     * 请求ID。
     * @example `7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 输出视频封面URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-vd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-gen/2021-05-07-15/B9MGfwxu.mp4?Expires=1620372653&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=F9flL1n5GPYaae0dLl%2F8D%2Bn4j6****`
         */
        VideoCoverUrl: string;
        /**
         * 输出视频URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-vd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-gen/2021-05-07-15/B9MGfwxu.jpg?Expires=1620372653&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=djBvGvdJu8bd%2FC%2BVHdg1d57U%2Bu****`
         */
        VideoUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

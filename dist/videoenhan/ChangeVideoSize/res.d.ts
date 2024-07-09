export interface ChangeVideoSizeResponse {
    /**
     * 请求ID。
     * @example `C00C5A32-9F54-44F0-9778-0968DD9BF22A`
     */
    RequestId: string;
    /**
     * 返回的数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 输出视频封面URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-vd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-crop/2020-07-24-20/ZTZslWcU.jpg?Expires=1595597077&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=5cq1NNBEzS64U7RTXRBGlo7WPy****`
         */
        VideoCoverUrl: string;
        /**
         * 输出视频URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-vd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-crop/2020-07-24-20/ZTZslWcU.mp4?Expires=1595597077&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=ZyvD9AXCT2IUFkVJngQdbXMwX6****`
         */
        VideoUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

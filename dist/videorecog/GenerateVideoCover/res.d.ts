export interface GenerateVideoCoverResponse {
    /**
     * 请求ID。
     * @example `5B95B724-C5B9-4F77-A743-0CA4EA95CC82`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 返回信息列表，每个元素是一张封面图，可能返回多张封面图。成功时有返回信息。
         */
        Outputs: {
            /**
             * 输出封面图像的URL地址。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。
             * @example `http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-cover/2020-05-11-07/pic_lOyxGGAqQYSANGxP.mp4_202_544_960_c9f88b2a5f75e17c093d1a65f5edff4d_beautified.png?Expires=1589185385&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=PAalKsfeZC4UQzYDTU%2F3D1G7Xt****`
             */
            ImageURL: string;
            /**
             * 置信度，值越高表示可信度越高。
             * @example `6.1819260887924425`
             */
            Confidence: number;
        }[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

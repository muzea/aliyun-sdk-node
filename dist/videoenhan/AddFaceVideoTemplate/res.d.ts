export interface AddFaceVideoTemplateResponse {
    /**
     * 请求ID。
     * @example `F61182AE-515B-5B0A-A877-1C9AE908FF15`
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
    Date: {
        /**
         * 模板ID。
         * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048`
         */
        TemplateId: string;
        /**
         * 输入视频中存在多个人脸时，返回各人脸ID和各人脸裁剪后的图像。
         */
        FaceInfos: {
            /**
             * 人脸对应的子模板ID。
             * @example `7d1a2498-0f9a-42d8-bae8-c7e478188106_0`
             */
            TemplateFaceID: string;
            /**
             * 人脸对应的子模板ID对应的人脸图。
             * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-face-fusion/template/xhtest_7d1a2498-0f9a-42d8-bae8-c7e478188106/xhtest_7d1a2498-0f9a-42d8-bae8-c7e478188106_0.png?Expires=1686040781&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=WVYTf%2F3knRuUPXSVGVz%2FZi3Miu****`
             */
            TemplateFaceURL: string;
        }[];
        /**
         * 视频帧的人脸位置转换矩阵文件，用于辅助用户校验换脸信息。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-face-fusion/template/1952059581270833_308f1611-7de8-4f16-9175-f1e997caadf6-V1/1952059581270833_308f1611-7de8-4f16-9175-f1e997caadf6-V1_trans.npy?Expires=1717055504&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=zg784H1bv5hwaKPvAywp8p5Hla****`
         */
        TransResult: string;
    };
}

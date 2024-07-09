export interface EvaluateVideoQualityResponse {
    /**
     * 请求ID。
     * @example `1d33e538-c949-4fcd-83f6-4d57e4b31527`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 质量评估详细报告（JSON文件）。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-13-10/31%3A08-cVeN9ZQlzIPfGqsa.json?Expires=1673578869&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=AiSsOsZ7rYfhf9w3Mxn%2Fq4GKKy****`
         */
        JsonUrl: string;
        /**
         * 质量评估综合报告（PDF文件）。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-13-10/31%3A08-cVeN9ZQlzIPfGqsa.pdf?Expires=1673578869&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=xULlZzVuhoYWAXRbp9A4EzzZcS****`
         */
        PdfUrl: string;
        /**
         * 视频质量详情。
         */
        VideoQualityInfo: {
            /**
             * 压缩程度。
             * @example `0.25`
             */
            CompressiveStrength: number;
            /**
             * 噪声程度。
             * @example `0.01`
             */
            NoiseIntensity: number;
            /**
             * 模糊程度。
             * @example `0.15`
             */
            Blurriness: number;
            /**
             * 对比度。
             * @example `0.55`
             */
            ColorContrast: number;
            /**
             * 饱和度。
             * @example `0.17`
             */
            ColorSaturation: number;
            /**
             * 亮度。
             * @example `0.51`
             */
            Luminance: number;
            /**
             * 颜色丰富度。
             * @example `0.48`
             */
            Colorfulness: number;
            /**
             * 表示主观质量评分。
             * @example `0.7048`
             */
            MosScore: number;
        };
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

export interface InteractiveFullSegmentationResponse {
    /**
     * 请求ID。
     * @example `7574ee8f-38a3-4b1e-9280-11c33ab46e51`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 存放结果的txt文件的地址，包含如下信息：
         * - output.region_index：索引图像，取值范围0~255。
         * - output.region_info：由所有分割结果组成的列表，每个分割结果中的`region`值就是对应的分割图像，有效分割区域可视化为白色（像素值255），其他区域可视化为黑色（像素值0），`index`值为该分割结果的对应的索引值。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `https://dashscope-result-sh.oss-cn-shanghai.aliyuncs.com/viapi-video/interactive_seg_wanx/2024-02-21/6013dba4-2ce3-4f00-a2e7-14b8d22e81a5/20240221_120038993181_wcmohvxj9a.txt?Expires=1708574441&OSSAccessKeyId=LTAI5tQZd8AEcZX6KZV4****&Signature=GZuvrbw8F3GOv0ykq9al%2FFBdg8****`
         */
        ResultUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

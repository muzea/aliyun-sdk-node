export interface DetectRibFractureResponse {
    /**
     * 请求ID。
     * @example `5C695B5D-41A6-4202-8BF7-E647698678DF`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 肋骨骨折检出结果。
         */
        Detections: {
            Coordinates: number[];
            /**
             * 骨折处序号，从1起始。
             * @example `2`
             */
            FractureId: number;
            CoordinateImage: number[];
            /**
             * 骨折分类的置信度。
             * @example `0.7916666666666667`
             */
            FractureConfidence: number;
            /**
             * 骨折分类结果。
             * - 1：移位骨折。
             * - 2：非移位骨折。
             * - 3：皮质弯曲。
             * - 4：陈旧骨折。
             * @example `1`
             */
            FractureCategory: string;
            /**
             * 骨折所在肋骨编号(L1~L12，R1~R12)。L表示左侧，R表示右侧。
             * @example `L4`
             */
            FractureLocation: string;
            /**
             * 骨折所在肋骨段。取值如下：
             * - 0：前段
             * - 1：腋段
             * - 2：后段
             * @example `0`
             */
            FractureSegment: number;
            /**
             * 骨折中间帧在整个DICOM序列中的唯一标识符，如果是NIFTI格式的输入，默认设置为None。
             * @example `None`
             */
            FracSOPInstanceUID: string;
        }[];
        Origin: number[];
        /**
         * 分割结果下载地址，有效时间5分钟。
         * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/detect-rib-fracture/local_test/2020-12-22/result-D5CD101C-F8E5-43CA-9E99-44C783B8F8BE.tar.gz?Expires=1608631727&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=d6c32E1IB4b7Ayo1lpjs%2Bq3Ylv****`
         */
        ResultURL: string;
        Spacing: number[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

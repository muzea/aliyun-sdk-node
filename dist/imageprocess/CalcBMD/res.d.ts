export interface CalcBMDResponse {
    /**
     * 请求ID。
     * @example `B48DECE6-29FE-1967-92F1-2E072873851A`
     */
    RequestId: string;
    /**
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 椎体检出结果。
         */
        Detections: {
            /**
             * 椎体编号。
             * @example `L1`
             */
            VertId: string;
            /**
             * 椎体骨密度估计值，单位为g/c㎡。
             * @example `0.78`
             */
            VertBMD: number;
            /**
             * 椎体T评分。
             * @example `-2.5`
             */
            VertTScore: number;
            /**
             * 椎体Z评分。
             * @example `NaN`
             */
            VertZScore: number;
            /**
             * 椎体分类。
             * - 0：正常
             * - 1：骨质减少
             * - 2：骨质疏松
             * @example `NaN`
             */
            VertCategory: number;
        }[];
        /**
         * 每个像素之间的物理距离间隔。
         */
        Spacing: number[];
        /**
         * 像素坐标系原点在物理坐标系中的位置。
         */
        Origin: number[];
        /**
         * NIFTI格式的分割mask文件HTTP地址。
         * > 有效时间为5分钟，5分钟后链接失效，需要重新生成。
         * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-bmd/local_test/2023-03-31/7772ECE3-22A7-193F-81B4-B0D6A02B5DAF-result.tgz?Expires=1680486509&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=GWi%2BhCCtamefKVYiS9oZJduswH****`
         */
        ResultURL: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

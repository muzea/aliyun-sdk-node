export interface ScreenGCResponse {
    /**
     * 请求ID。
     * @example `9B65AC8E-311A-1ED1-BBE6-6AA6D35D31A6`
     */
    RequestId: string;
    /**
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 病灶描述。
         */
        Lesion: {
            /**
             * 三类分类预测的概率，依次对应正常胃部、胃癌、非胃癌病变，取值范围0~1。
             * @example `["0.1467", "0.8533", "0.0000"]`
             */
            Probabilities: string;
            /**
             * 胃部体积，单位：cm³。
             * @example `508.79`
             */
            StomachVolume: string;
            /**
             * 胃癌病变体积，单位：cm³。
             * @example `5.86`
             */
            GCVolume: string;
            /**
             * 非胃癌病变体积，单位：cm³。
             * @example `0.00`
             */
            NonGCVolume: string;
            /**
             * 病灶Mask地址。
             * > 有效时间为30分钟，30分钟后链接失效，需要重新生成。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen_gc/gc_11949981_stomach.nii.gz?Expires=1680678697&OSSAccessKeyId=LTAI4GC2dJzdf8ZvnC16****&Signature=EpKCTEPipWO0AiB3Uip85c%2BuMg****`
             */
            Mask: string;
        };
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

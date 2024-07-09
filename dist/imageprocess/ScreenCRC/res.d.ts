export interface ScreenCRCResponse {
    /**
     * 请求ID。
     * @example `39C848F7-D814-1A06-AE0D-AFC706B9700F`
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
             * 两类分类预测的概率，依次对应健康、结直肠癌。
             * @example `0.0779, 0.9221`
             */
            Probabilities: string;
            /**
             * 结直肠体积，单位：立方厘米（cm³）。
             * @example `255.93`
             */
            ColorectumVolume: string;
            /**
             * 结直肠癌病变体积，单位：立方厘米（cm³）。
             * @example `7.83`
             */
            CRCVolume: string;
            /**
             * 病灶Mask，以HTTP地址给出。
             * > 有效时间为30分钟，30分钟后链接失效，需要重新生成。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen_crc/crc_case2_pre.nii.gz?Expires=1680766116&OSSAccessKeyId=LTAI4GC2dJzdf8ZvnC16****&Signature=9n9C%2B2MnyvLwAC%2FwFyxgY****`
             */
            Mask: string;
        };
    };
    /**
     * 任务状态标识。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

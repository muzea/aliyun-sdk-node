export interface ScreenECResponse {
    /**
     * 请求ID。
     * @example `9B65AC8E-311A-1ED1-BBE6-6AA6D35D31A6`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 病灶描述。
         */
        Lesion: {
            /**
             * 三类分类预测的概率，依次对应正常食管、食管癌、非食管癌病变，取值范围0~1。
             */
            Possibilities: string[];
            /**
             * 食管体积，单位：cm³。
             * @example `26814`
             */
            EsoVolume: string;
            /**
             * 食管癌病变体积，单位：cm³。
             * @example `0`
             */
            EcVolume: string;
            /**
             * 非食管癌病变体积，单位：cm³。
             * @example `0`
             */
            BenignVolume: string;
            /**
             * 病灶Mask地址。
             * > 有效时间为3天，3天后链接失效，需要重新生成。
             * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-pdac/2022-05-25_14%3A33%3A30/4CA2BF25-BCDB-9C6C-B14C-EB41E8266588.nii.gz?Expires=1653462210&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=8t%2FknUrQyyyCU2p7QhMC%2BXBCR****`
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

export interface DetectCovid19CadResponse {
    /**
     * 请求ID。
     * @example `7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 普通肺炎的概率。
         * @example `0.7230905`
         */
        NormalProbability: string;
        /**
         * 新冠肺炎概率。
         * @example `4.062644e-06`
         */
        NewProbability: string;
        /**
         * 白化比例。
         * @example `0.9387283236994219`
         */
        LesionRatio: string;
        /**
         * 其他概率。
         * @example `0.27690542`
         */
        OtherProbability: string;
        /**
         * NII格式的mask文件HTTP地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。
         * @example `http://algo-app-aic-med-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/covid19-dcm/unspecified/2020032702/1b1e1018-6fcf-11ea-8fa1-d20b34387541.nii.gz?Expires=1585276394&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=%2F1LNGWJUqvY0VRYGgg8Ldtb3BF****`
         */
        Mask: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

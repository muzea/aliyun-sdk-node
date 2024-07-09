export interface CalcCACSResponse {
    /**
     * 请求ID。
     * @example `6797D285-9290-4FBB-9742-AA1E286EF3B9`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 分割结果下载地址，有效时间5分钟。
         * @example `http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-cacs/2020-09-29/2020-09-29-11%3A07%3A41-D74FE0DF-8F80-41EB-B08B-2E67053587EC.tar.gz?Expires=1601350661&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=iB16ms28Y5mzB11ghYUd7upCi4****`
         */
        ResultUrl: string;
        /**
         * 冠脉钙化积分值。
         * @example `117.61`
         */
        Score: string;
        /**
         * 体积积分，即钙化点总体积。
         * @example `111.96`
         */
        VolumeScore: string;
        /**
         * 钙化病灶详细列表。
         */
        Detections: {
            /**
             * 钙化病灶的序号，从1开始。
             * @example `1`
             */
            CalciumId: number;
            /**
             * 病灶钙化积分。
             * @example `19.22474`
             */
            CalciumScore: number;
            /**
             * 病灶体积积分。
             * @example `28.837109`
             */
            CalciumVolume: number;
            /**
             * 图像坐标系下病灶中心坐标\[x, y, z]。
             */
            CalciumCenter: number[];
        }[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

export interface PredictCVDResponse {
    /**
     * 请求ID。
     * @example `7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4`
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
             * 特征值描述。
             */
            FeatureScore: {
                /**
                 * 心肌/心外膜比率。
                 */
                MyoEpiRatio: number[];
                /**
                 * 升主动脉最大直径。
                 */
                AscAoMaxDiam: number[];
                /**
                 * 冠状动脉钙化体积（单位：cm³）。
                 */
                CoronaryCalciumVol: number[];
                /**
                 * 心脏表面和心包之间的脂肪组织体积（单位：cm³）。
                 */
                EatVolume: number[];
                /**
                 * 主动脉钙化评分。
                 */
                AortaCalciumScore: number[];
                /**
                 * 心胸比。
                 */
                CardioThoracicRatio: number[];
                /**
                 * 心外脂肪组织的平均Hounsfield单位数值。
                 */
                EatHUMean: number[];
                /**
                 * 心外脂肪组织的Hounsfield单位数值的标准差。
                 */
                EatHUSTD: number[];
                /**
                 * 右肺低密度区域比值。
                 */
                RightLungLowattRatio: number[];
                /**
                 * 升主动脉长度。
                 */
                AscendAortaLength: number[];
                /**
                 * 左肺低密度区域比值。
                 */
                LeftLungLowattRatio: number[];
                /**
                 * 深度特征值。
                 */
                DeepFeature: number[];
                /**
                 * 主动脉钙化体积（单位：cm³）。
                 */
                AortaCalciumVolume: number[];
                /**
                 * 冠状动脉钙化评分。
                 */
                CoronaryCalciumScore: number[];
            };
            /**
             * 取值（0,1）之间，描述该特征在cvd风险预测中的权重。
             * @example `0.5`
             */
            CVDProbability: number;
            /**
             * 病灶Mask，以HTTP地址给出。
             * > 有效时间为30分钟，30分钟后链接失效，需要重新生成。
             */
            ResultURL: string[];
        };
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

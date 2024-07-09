export interface ScreenLCResponse {
    /**
     * 请求ID。
     * @example `473dbfb0-9cb7-e18e-450b-e4d0e4ce6c1c`
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
             * 病灶mask。
             * @example `20-050_0000.nii.gz`
             */
            Mask: string;
            /**
             * 病人级别诊断。
             * >病人诊断有肝癌的概、非肝癌的恶性肿瘤的概率、非囊肿的良性肿瘤的概率以及有囊肿的概率的和不为1，因为病人可能有多种肿瘤。
             */
            PatientLevelResult: {
                /**
                 * 诊断为肝癌的概率。
                 * @example `0.9941`
                 */
                HCCProb: number;
                /**
                 * 诊断有非肝癌的恶性肿瘤的概率。
                 * @example `0.0073`
                 */
                MalignantNonHCCProb: number;
                /**
                 * 诊断有非囊肿的良性肿瘤的概率。
                 * @example `0.0077`
                 */
                BenignNonCystProb: string;
                /**
                 * 诊断有囊肿的概率。
                 * @example `0.9233`
                 */
                CystProb: number;
            };
            /**
             * 肝脏（包括肿瘤）总体积，单位：立方厘米（cm³）。
             * @example `1364.9468`
             */
            LiverVolume: number;
            /**
             * 病灶列表。
             */
            LesionList: {
                /**
                 * 病灶类别：HCC、other_malignant、other_benign、cyst。
                 * @example `HCC`
                 */
                Type: string;
                /**
                 * 病灶体积，单位：立方厘米（cm³）。
                 * @example `305.3661`
                 */
                Volume: number;
                /**
                 * RECIST长短径所在的关键帧（第一帧编号为0）。
                 * @example `100`
                 */
                KeySlice: number;
                /**
                 * RECIST长短径的端点。
                 */
                RecistEndpoints: number[];
                /**
                 * 长短径的长度，单位：毫米（mm）。
                 */
                Diameter: number[];
                /**
                 * 恶性概率。
                 * @example `0.9375`
                 */
                Malignancy: number;
            }[];
        };
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}

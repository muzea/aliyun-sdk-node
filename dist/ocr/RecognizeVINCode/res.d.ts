export interface RecognizeVINCodeResponse {
    /**
     * 请求ID。
     * @example `911FC8CF-CC27-477E-BE3B-7ED77DF4DFE0`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 识别的车辆VIN码。
         * @example `LVBB2FAF777999888`
         */
        VinCode: string;
    };
}

export interface FaceLivenessResponse {
    /**
     * 阿里云为该请求生成的唯一标识符
     * @example `42EA58CA-5DF4-55D5-82C4-5E7A40DA62BA`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回结果的提示信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 认证请求的唯一标识
         * @example `08573be80f944d95ac812e019e3655a8`
         */
        TransactionId: string;
        /**
         * 认证是否通过
         * - Y：通过
         * - N：不通过
         * @example `N`
         */
        Passed: string;
        /**
         * 子结果码
         * @example `205`
         */
        SubCode: string;
        /**
         * 人脸结果信息
         */
        ExtFaceInfo: {
            /**
             * 人脸质量分(0～100)，当且仅当入参质量分开关打开时返回
             * @example `87.19`
             */
            FaceQualityScore: number;
            /**
             * 遮挡检测结果,Y (遮挡) /N (无遮挡),当且仅当遮挡检测开关打开时返回
             * @example `Y`
             */
            OcclusionResult: string;
            /**
             * 活体检测结果，Y（攻击）/N（正常）
             * @example `Y`
             */
            FaceAttack: string;
        };
    };
}

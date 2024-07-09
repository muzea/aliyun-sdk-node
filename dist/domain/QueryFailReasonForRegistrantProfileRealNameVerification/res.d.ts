export interface QueryFailReasonForRegistrantProfileRealNameVerificationResponse {
    /**
     * 请求ID。
     * @example `548C407F-AEA2-4B5D-90DF-EC11EBB1D76F`
     */
    RequestId: string;
    /**
     * 实名认证审核失败原因列表。
     */
    Data: {
        /**
         * 审核日期。
         * @example `2017-03-17 11:08:02`
         */
        Date: string;
        /**
         * 实名认证审核失败的原因。
         * 实名认证审核失败后的处理方法，请参见[实名认证失败原因及解决方案](~~35885~~)。
         * @example `证件电子信息核验不合格`
         */
        FailReason: string;
    }[];
}

export interface QueryFailingReasonListForQualificationResponse {
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-****-8035-4B12FEFD7D48`
     */
    RequestId: string;
    /**
     * 域名资质审核失败列表。
     */
    Data: {
        /**
         * 审核日期。
         * @example `2017-03-17 11:08:02`
         */
        Date: string;
        /**
         * 域名资质审核失败原因。
         * @example `证件审核不通过`
         */
        FailReason: string;
    }[];
}

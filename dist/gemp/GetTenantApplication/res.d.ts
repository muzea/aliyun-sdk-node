export interface GetTenantApplicationResponse {
    /**
     * data
     */
    data: {
        /**
         * 企业id
         * @example `ding81913c*`
         */
        corporationId: string;
        /**
         * 业务id
         * @example `7356`
         */
        bizId: string;
        /**
         * 进度
         * @example `NOT_OPEN`
         */
        progress: string;
        /**
         * 云钉协同渠道
         * @example `DINGDING`
         */
        channel: string;
        originalCorpId: string;
    };
    /**
     * id of the request
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
}

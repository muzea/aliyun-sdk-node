export interface CreateTenantApplicationResponse {
    /**
     * id of the req
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 开通url
         * @example `http://xxxx`
         */
        openUrl: string;
        /**
         * 开通进度状态
         * @example `OPENED 已开通 OPENING 开通中`
         */
        progress: string;
    };
}

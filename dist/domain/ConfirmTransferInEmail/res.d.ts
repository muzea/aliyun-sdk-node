export interface ConfirmTransferInEmailResponse {
    /**
     * 唯一请求识别码
     * @example `40F46D3D-F4F3-4CCB-AC30-2DD20E32E528`
     */
    RequestId: string;
    SuccessList: {
        /**
         * 成功的域名列表。
         */
        SuccessDomain: string[];
    };
    FailList: {
        /**
         * 失败的域名列表。
         */
        FailDomain: string[];
    };
}

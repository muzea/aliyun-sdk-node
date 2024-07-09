export interface CreateSignatureRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 申请说明。
         * @example `申请说明`
         */
        Description: string;
        /**
         * 签名名称。
         * @example `用户增长`
         */
        Name: string;
    };
}

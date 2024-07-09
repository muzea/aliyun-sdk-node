export interface CancelShareLinkRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 分享id
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
    };
}

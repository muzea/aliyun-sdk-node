export interface ClearRecyclebinRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间ID
         * @example `1`
         */
        drive_id: string;
    };
}

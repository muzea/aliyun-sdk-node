export interface PutProjectTransferAccelerationRequest {
    "project": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 是否开通传输加速
         * @example `true`
         */
        enabled: boolean;
    };
}

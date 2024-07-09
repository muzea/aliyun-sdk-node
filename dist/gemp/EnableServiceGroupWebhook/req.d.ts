export interface EnableServiceGroupWebhookRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务组ID
         * @example `1`
         */
        serviceGroupId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}

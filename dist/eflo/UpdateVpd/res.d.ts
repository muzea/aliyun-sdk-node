export interface UpdateVpdResponse {
    /**
     * 响应码。
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 灵骏网段（VPD）实例ID。
         * @example `vpd-lg4dppgi`
         */
        VpdId: string;
    };
}

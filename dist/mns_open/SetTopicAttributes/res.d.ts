export interface SetTopicAttributesResponse {
    /**
     * 请求的ID。
     * @example `06273500-249F-5863-121D-74D51123****`
     */
    RequestId: string;
    /**
     * 响应code。
     * @example `200`
     */
    Code: number;
    /**
     * 响应的状态。
     * @example `Success`
     */
    Status: string;
    /**
     * 响应信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * 响应code。
         * @example `200`
         */
        Code: number;
        /**
         * 响应信息。
         * @example `无`
         */
        Message: string;
        /**
         * 请求是否成功。
         * @example `true`
         */
        Success: boolean;
    };
}

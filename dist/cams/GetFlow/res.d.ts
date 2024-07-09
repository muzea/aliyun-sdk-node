export interface GetFlowResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * Flow的状态。
         * @example `DRAFT`
         */
        Status: string;
        /**
         * Flow ID。
         * @example `92675332812643****`
         */
        FlowId: string;
        /**
         * Flow名称。
         * @example `flow_001`
         */
        FlowName: string;
        /**
         * 目录。
         */
        Categories: string[];
        /**
         * JSON版本信息。
         * @example `2.1`
         */
        JSONVersion: string;
        /**
         * API版本信息。
         * @example `3.0`
         */
        DataApiVersion: string;
        /**
         * 临时预览链接。
         * @example `https://pre-url`
         */
        PreviewUrl: string;
        /**
         * 预览URL的过期时间。
         * @example `1700617436633
        `
         */
        PreviewUrlExpires: number;
    };
}

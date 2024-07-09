export interface GetFlowPreviewUrlResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `None`
     */
    Message: string;
    /**
     * 返回数据对象。
     */
    Data: {
        /**
         * Flow ID。
         * @example `92675332812643****`
         */
        FlowId: string;
        /**
         * 临时预览链接。
         * @example `https://business.facebook.com/****`
         */
        PreviewUrl: string;
        /**
         * 预览URL的过期时间。
         * @example `1700617436633`
         */
        PreviewUrlExpires: number;
    };
}

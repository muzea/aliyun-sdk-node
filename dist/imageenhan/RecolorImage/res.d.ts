export interface RecolorImageResponse {
    /**
     * 请求ID。
     * @example `3A9BFC5E-3F7C-4D9A-9445-908C6D14AB5B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 1
         */
        ImageList: string[];
    };
}

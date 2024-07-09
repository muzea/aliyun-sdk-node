export interface DetectMainBodyResponse {
    /**
     * 请求ID。
     * @example `2E59C333-5480-4231-A8AB-BEE1001EA7FE`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 图像定位信息。
         */
        Location: {
            /**
             * 元素宽度。
             * @example `583`
             */
            Width: number;
            /**
             * 元素高度。
             * @example `320`
             */
            Height: number;
            /**
             * 元素y坐标。
             * @example `20`
             */
            Y: number;
            /**
             * 元素x坐标。
             * @example `28`
             */
            X: number;
        };
    };
}

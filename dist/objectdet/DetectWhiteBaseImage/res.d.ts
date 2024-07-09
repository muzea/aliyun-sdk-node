export interface DetectWhiteBaseImageResponse {
    /**
     * 请求ID。
     * @example `7A7F9EEB-44C4-4592-9089-A6185B222B23`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回判断结果。
         */
        Elements: {
            /**
             * 是否白底图。
             * - 0：非白底
             * - 1：白底
             * @example `0`
             */
            WhiteBase: number;
        }[];
    };
}

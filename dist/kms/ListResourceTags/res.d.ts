export interface ListResourceTagsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4162a6af-bc99-40b3-a552-89dcc8aaf7c8`
     */
    RequestId: string;
    Tags: {
        /**
         * 标签。
         */
        Tag: {
            /**
             * 全局唯一标识符。
             * @example `33caea95-c3e5-4b3e-a9c6-cec76e4e****`
             */
            KeyId: string;
            /**
             * 标签值。
             * @example `Test`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `Project`
             */
            TagKey: string;
        }[];
    };
}

export interface UntagResourcesResponse {
    /**
     * 请求ID。
     * @example `43D12436-B10F-4469-8136-FD1C5D2B2083`
     */
    RequestId: string;
    FailedResources: {
        /**
         * 失败资源信息。
         * > - 解绑标签成功时，返回的FailedResources为空。
         * > - 解绑标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。
         */
        FailedResource: {
            /**
             * 失败资源ARN。
             * @example `arn:acs:ecs:cn-hangzhou:123456789****:instance/i-xxxxxxxxxx1`
             */
            ResourceARN: string;
            /**
             * 错误结果。
             */
            Result: {
                /**
                 * 错误码。
                 * @example `InvalidResourceId.NotFound`
                 */
                Code: string;
                /**
                 * 错误信息。
                 * @example `The specified ResourceIds are not found in our records.`
                 */
                Message: string;
            };
        }[];
    };
}

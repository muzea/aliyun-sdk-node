export interface TagResourcesResponse {
    /**
     * 请求ID。
     * @example `72086426-9F8C-4A60-852B-864048FD1199`
     */
    RequestId: string;
    FailedResources: {
        /**
         * 失败资源信息。
         * > - 创建并绑定标签成功时，返回的`FailedResources`为空。
         * > - 创建并绑定标签失败或部分失败时，返回的`FailedResources`会显示失败资源的详细信息。
         */
        FailedResource: {
            /**
             * 失败资源ARN。
             * @example `arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****`
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

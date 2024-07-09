export interface StartImagePipelineExecutionRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * >该参数已废弃。
     */
    "TemplateTag"?: {
        /**
         * >该参数已废弃。
         * @example `null`
         */
        Key: string;
        /**
         * >该参数已废弃。
         * @example `null`
         */
        Value: string;
    }[];
    /**
     * 镜像模板ID。
     * @example `ip-2ze5tsl5bp6nf2b3****`
     */
    "ImagePipelineId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}

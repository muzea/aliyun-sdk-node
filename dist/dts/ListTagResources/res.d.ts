export interface ListTagResourcesResponse {
    /**
     * 查询凭证。
     * > 如果此次查询没有返回全部结果，则可在后续查询中传入此**NextToken**参数继续查询。
     * @example `212db86sca4384811e0b5e8707ec2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `609AD332-F2B1-48B7-BF43-41FEE641****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    TagResources: {
        /**
         * 返回标签集合。
         */
        TagResource: {
            /**
             * 标签键对应的标签值。
             * @example `testvalue1`
             */
            TagValue: string;
            /**
             * 资源类型定义，取值固定为**ALIYUN::DTS::INSTANCE**。
             * @example `ALIYUN::DTS::INSTANCE`
             */
            ResourceType: string;
            /**
             * 实例ID。
             * @example `dtsntk10k6r12v****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `testkey1`
             */
            TagKey: string;
        }[];
    };
}

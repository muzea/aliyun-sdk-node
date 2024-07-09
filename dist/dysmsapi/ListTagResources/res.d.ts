export interface ListTagResourcesResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 查询下一页标签的Token。
     * @example `"23432453245"`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    TagResources: {
        /**
         * 标签资源。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `ALIYUN::DYSMS::TEMPLATE`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 短信模板Code。
             * @example `SMS_23423****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}

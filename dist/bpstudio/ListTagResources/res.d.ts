export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个
     * @example `1`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `847C9D0A-BABD-589C-8A9C-6464409EDED9`
     */
    RequestId: string;
    /**
     * 结果码，200代表成功
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `bp.java.nopowerContact`
     */
    Message: string;
    /**
     * TagResource
     */
    TagResources: {
        /**
         * Application或Template
         * @example `application`
         */
        ResourceType: string;
        /**
         * 标签值
         * @example `Value值。`
         */
        TagValue: string;
        /**
         * CADT应用或模板ID
         * @example `MW7T1820ACJX9BI7`
         */
        ResourceId: string;
        /**
         * 标签键
         * @example `Key值。`
         */
        TagKey: string;
    }[];
}

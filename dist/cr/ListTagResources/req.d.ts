export interface ListTagResourcesRequest {
    /**
     * 资源类型定义，当前支持实例 Instance 资源。
     * @example `Instance`
     */
    "ResourceType": string;
    /**
     * 资源 ID。最多支持添加 20 个资源。
     */
    "ResourceId"?: string[];
    /**
     * 资源所在的地域 ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test-key`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test-val`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：第一次查询和没有下一次查询时，均无需填写。如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `AAAAAfj+3fkqd8igM6VLaQjlaYc=`
     */
    "NextToken"?: string;
}

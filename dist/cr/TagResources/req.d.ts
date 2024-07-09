export interface TagResourcesRequest {
    /**
     * 资源类型。当前支持实例 Instance 资源。
     * @example `Instance`
     */
    "ResourceType": string;
    /**
     * 资源 ID。最多支持添加 20 个资源。
     */
    "ResourceId": string[];
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `test-key`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `test-val`
         */
        Value: string;
    }[];
}

export interface TagResourcesRequest {
    /**
     * 实例所绑定的标签
     */
    "Tag": {
        /**
         * 资源的标签键。N 的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持 128 个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `team`
         */
        Key: string;
        /**
         * 资源的标签值。N 的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持 128 个字符，不能以acs:开头，不能包含http://或者https://。
         * @example `Deep`
         */
        Value: string;
    }[];
    /**
     * 资源ID列表。一次调用最多支持添加50个资源ID。
     */
    "ResourceId": string[];
    /**
     * 资源类型。取值：instance（实例）。
     * @example `instance`
     */
    "ResourceType": string;
}

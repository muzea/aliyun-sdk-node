export interface UntagResourcesRequest {
    /**
     * 资源ID。最多支持解绑20个资源ID。
     */
    "ResourceId": string[];
    /**
     * 资源类型，取值：**ANYCASTEIPADDRESS**。
     * @example `ANYCASTEIPADDRESS`
     */
    "ResourceType": string;
    /**
     * 要解绑的标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
     * 一个标签键最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
     */
    "TagKey"?: string[];
}

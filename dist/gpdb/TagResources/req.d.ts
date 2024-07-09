export interface TagResourcesRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值固定为`instance`。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 第N个实例。N的取值范围：1~50。
     * @example `gp-xxxxxxxxxx`
     */
    "ResourceId": string[];
    /**
     * 第N个标签。N的取值范围：1~20。
     */
    "Tag": {
        /**
         * 标签键。该值不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包`含http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。该值可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}

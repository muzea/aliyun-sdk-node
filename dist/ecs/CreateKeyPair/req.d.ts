export interface CreateKeyPairRequest {
    /**
     * 密钥对所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 密钥对名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testKeyPairName`
     */
    "KeyPairName": string;
    /**
     * SSH密钥对所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 密钥对的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 密钥对的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}

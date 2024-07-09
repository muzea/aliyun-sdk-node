export interface CreateAccessControlListRequest {
    /**
     * 访问控制策略组的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组名称，长度限制为1~80个字符，只支持中文、字母、数字和半角句号（.）、短划线（-）、正斜线（/）和下划线（_）。访问控制策略组名称必须为地域内唯一。
     * @example `rule1`
     */
    "AclName": string;
    /**
     * IP版本，可以设置为**ipv4**或者**ipv6**。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
    /**
     * 访问控制策略组所在的资源组ID。
     * @example `rg-atstuj3rt******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 监听的标签键。N的取值范围：**1**~**20**。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 监听的标签值。N的取值范围：**1**~**20**。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}

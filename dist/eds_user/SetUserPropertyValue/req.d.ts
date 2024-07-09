export interface SetUserPropertyValueRequest {
    /**
     * 用户ID。可以调用[DescribeUsers](~~DescribeUsers~~)获取该参数。
     * @example `11`
     */
    "UserId": number;
    /**
     * 用户名。
     * @example `test`
     */
    "UserName": string;
    /**
     * 属性ID。可以调用[ListProperty](~~ListProperty~~)获取该参数。
     * @example `390`
     */
    "PropertyId": number;
    /**
     * 属性值ID。可以调用[ListProperty](~~ListProperty~~)获取该参数。
     * @example `978`
     */
    "PropertyValueId": number;
}

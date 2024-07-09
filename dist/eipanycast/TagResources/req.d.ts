export interface TagResourcesRequest {
    /**
     * 资源ID，最多支持输入20个资源ID。
     */
    "ResourceId": string[];
    /**
     * 资源类型，取值：**ANYCASTEIPADDRESS**。
     * @example `ANYCASTEIPADDRESS`
     */
    "ResourceType": string;
    /**
     * 标签信息。
     */
    "Tag": {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
         * > 调用该API时，**Tag.N.Key**参数必须输入。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。至少输入1个标签值，最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 调用该API时，**Tag.N.Value**参数必须输入。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}

export interface TagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId": string[];
    /**
     * 资源类型。取值：
     * - **IPAM**：表示资源类型为IPAM。
     * - **IPAMSCOPE**：表示资源类型为IPAM作用范围。
     * - **IPAMPOOL**：表示资源类型为IPAM地址池。
     * @example `IPAM`
     */
    "ResourceType": string;
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}

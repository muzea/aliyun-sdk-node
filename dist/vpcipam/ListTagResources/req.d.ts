export interface ListTagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId"?: string[];
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
    "Tag"?: {
        /**
         * 资源的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 参数**ResourceId.N**或**Tag.N**（**Tag.N.Key**与**Tag.N.Value**）至少输入一个。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * > 参数**ResourceId.N**或**Tag.N**（**Tag.N.Key**与**Tag.N.Value**）至少输入一个。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**50**，默认值为**10**。
     * @example `20`
     */
    "MaxResults"?: number;
}

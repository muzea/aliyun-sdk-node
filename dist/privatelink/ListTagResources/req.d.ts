export interface ListTagResourcesRequest {
    /**
     * 资源ID列表。最多支持50个资源ID。
     */
    "ResourceId"?: string[];
    /**
     * 资源类型。取值：
     * - **vpcendpoint**：终端节点。
     * - **vpcendpointservice**：终端节点服务。
     * @example `vpcendpoint`
     */
    "ResourceType": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 资源所属的地域ID。您可以通过调用[describeregions](~~120468~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
}

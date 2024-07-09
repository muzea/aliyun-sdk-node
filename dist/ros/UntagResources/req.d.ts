export interface UntagResourcesRequest {
    /**
     * 标签所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。取值：
     * - stack：资源栈。
     * - stackgroup：资源栈组。
     * - template：模板。
     * - templatescratch：资源场景。
     * @example `stack`
     */
    "ResourceType": string;
    /**
     * 是否解绑资源上全部的标签，当请求中未设置TagKey.N时该参数有效。取值：
     * - true：解绑资源上全部的标签。
     * - false（默认值）：解绑资源上指定的标签。
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 资源ID。
     * > 当ResourceType取值为stackgroup时，资源ID需指定资源栈组名称。
     * @example `46ec7b78-9d5e-4b21-aefd-448c90aa****`
     */
    "ResourceId": string[];
    /**
     * 资源的标签值。N的取值范围：1~20。
     * @example `FinanceDept`
     */
    "TagKey"?: string[];
}

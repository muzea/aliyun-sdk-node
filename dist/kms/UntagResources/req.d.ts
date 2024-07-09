export interface UntagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * >您可以调用[DescribeRegions](~~601478~~)查看当前阿里云账号的可用地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要解绑标签的资源类型。取值：
     * - key：密钥
     * - secret：凭据
     * @example `key`
     */
    "ResourceType": string;
    /**
     * 是否为资源解绑所有标签。取值：
     * - true：是
     * - false（默认值）：否
     * >仅当传入的标签键（TagKey）为空时，该参数生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 要解绑标签的资源ID列表，最多可以输入50个资源ID。
     * 输入多个资源ID时，格式为`["ResourceId.1","ResourceId.2",...]`。
     */
    "ResourceId": string[];
    /**
     * 要解绑的标签的标签键，最多可以输入20个标签键。
     * 输入多个标签键时，格式为`["key.1","key.2",...]`。
     * >标签键不能以aliyun和acs:开头。
     */
    "TagKey"?: string[];
}

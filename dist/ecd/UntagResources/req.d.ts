export interface UntagResourcesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。
     * @example `ALIYUN::GWS::INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否解绑资源上的所有标签。仅当未设置TagKey.N时，该参数生效。默认为false。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表，即云电脑ID列表。可包含1\~50个。
     * @example `ecd-ia2zw38bi6cm7****`
     */
    "ResourceId": string[];
    /**
     * 标签键。可包含1\~20个。
     * @example `TestKey`
     */
    "TagKey"?: string[];
}

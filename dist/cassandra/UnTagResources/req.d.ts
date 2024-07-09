export interface UnTagResourcesRequest {
    /**
     * 地域id。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 是否删除全部标签。如果传入了TagKey，则只按TagKey删除。为true/false，为true时切未传入TagKey时删除全部标签。
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 要删除的第N个资源Id，此处是为集群Id。如果有多个，可以传参数名为ResourceId.2、ResourceId.3等等。N为正整数。
     * @example `cds-wz92o754****7779`
     */
    "ResourceId": string[];
    /**
     * 第N个要删除的标签的键，可传多个，TagKey.2、TagKey.3等待。N为正整数。
     * @example `key`
     */
    "TagKey"?: string[];
}

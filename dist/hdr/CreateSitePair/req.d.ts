export interface CreateSitePairRequest {
    /**
     * 站点对类型
     * @example `cloud2cloud`
     */
    "SitePairType"?: string;
    /**
     * 主站站点名称
     * @example `杭州可用区G`
     */
    "PrimarySiteName"?: string;
    /**
     * 主站站点类型
     * @example `cloud`
     */
    "PrimarySiteType"?: string;
    /**
     * 主站地域ID
     * @example `cn-shanghai`
     */
    "PrimarySiteRegionId"?: string;
    /**
     * 主站VPC ID
     * @example `vpc-uf6j3rao8wkr7hb4uopv2`
     */
    "PrimarySiteVpcId"?: string;
    /**
     * 主站可用区ID，站点对类型为跨可用区容灾时有效
     * @example `cn-hangzhou-g`
     */
    "PrimarySiteZoneId"?: string;
    /**
     * 从站站点名称
     * @example `杭州可用区F`
     */
    "SecondarySiteName"?: string;
    /**
     * 从站站点类型
     * @example `cloud`
     */
    "SecondarySiteType"?: string;
    /**
     * 从站地域ID
     * @example `cn-hangzhou`
     */
    "SecondarySiteRegionId"?: string;
    /**
     * 从站专有网络ID
     * @example `vpc-bp1wu55gbyqd7gh3yu3ey`
     */
    "SecondarySiteVpcId"?: string;
    /**
     * 从站可用区ID，仅站点对类型为跨可用区容灾时有效
     * @example `cn-hangzhou-i`
     */
    "SecondarySiteZoneId"?: string;
}

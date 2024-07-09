export interface DescribeRegionsRequest {
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的地域ID。默认为**cn-hangzhou**，表示查询华东1（杭州）地域的DDoS原生防护实例支持防护的云资产的地域。
     * 如果需要查询其他地域ID，请参见[地域和可用区](~~40654~~)，获取对应的**RegionId**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}

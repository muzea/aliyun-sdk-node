export interface GetSlsOpenStatusRequest {
    /**
     * DDoS原生防护实例所属地域ID。
     * 关于该参数的取值，请参见[地域和可用区](~~188196~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
}

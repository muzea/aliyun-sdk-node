export interface CheckGrantRequest {
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * DDoS原生防护实例所在地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 防护包授权是否检查SLR角色。取值：
     * - **true**：表示检查SLR角色。
     * - **false**：表示不检查SLR角色。
     * @example `true`
     */
    "IsSlr"?: boolean;
}

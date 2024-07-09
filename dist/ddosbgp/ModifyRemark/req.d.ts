export interface ModifyRemarkRequest {
    /**
     * 要设置备注的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosbgp-cn-n6w1r7nz****`
     */
    "InstanceId": string;
    /**
     * 为DDoS原生防护实例设置备注。
     * @example `test-remark`
     */
    "Remark": string;
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
}

export interface DeleteIpRequest {
    /**
     * 要从原生防护企业版实例的防护对象中移除的IP地址列表。使用JSON数组转化的字符串格式表示。JSON数组中的每个元素是一个结构体，包含以下字段：
     * - **ip**：String类型 | 必选 | 要移除的IP地址。
     *
     *     > IP地址必须已经在原生防护企业版实例的防护列表。
     * @example `[{"ip":"1.XX.XX.1"},{"ip":"2.XX.XX.2"}]`
     */
    "IpList": string;
    /**
     * 要操作的原生防护企业版实例ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有原生防护企业版实例的ID信息。
     * @example `ddosbgp-cn-npk1z7t9****`
     */
    "InstanceId": string;
    /**
     * 原生防护企业版实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 原生防护企业版实例的地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}

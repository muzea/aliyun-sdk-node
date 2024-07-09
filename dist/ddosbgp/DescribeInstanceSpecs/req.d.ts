export interface DescribeInstanceSpecsRequest {
    /**
     * 要查询的DDoS原生防护企业版实例的ID。使用JSON数组转化的字符串格式表示。JSON数组中的每个元素表示一个实例ID（字符串格式），多个ID间使用英文逗号（,）分隔。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询指定地域下所有DDoS原生防护企业版实例的ID。
     * @example `["ddosbgp-cn-n6w1r7nz****"]`
     */
    "InstanceIdList": string;
    /**
     * DDoS原生防护企业版实例的地域ID。默认为**cn-hangzhou**，表示华东1（杭州）。
     * > 如果您的实例不在华东1（杭州）地域，则此处必须填写实例所在地域的ID。您可以调用[DescribeRegions](~~118703~~)查询所有的**RegionId**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DDoS原生防护企业版实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
}

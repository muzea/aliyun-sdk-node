export interface DescribePackIpListRequest {
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 分页查询时，设置每页包含受保护IP的数量。最大值：50。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosbgp-cn-n6w1r7nz****`
     */
    "InstanceId": string;
    /**
     * 要查询的受保护IP。
     * @example `47.98.XX.XX`
     */
    "Ip"?: string;
    /**
     * 要查询的受保护IP所属云资产类型。取值：
     * - **ECS**：表示云服务器ECS实例。
     * - **SLB**：表示传统型负载均衡CLB（原SLB）实例。
     * - **EIP**：表示弹性公网IP实例。因公网应用型负载均衡ALB实例使用弹性公网IP，您需要通过EIP实例查询ALB的公网IP。
     * - **WAF**：表示Web应用防火墙实例。
     * @example `ECS`
     */
    "ProductName"?: string;
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
     * 成员账号UID。
     * @example `170858869679****`
     */
    "MemberUid"?: string;
}

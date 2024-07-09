export interface DetachGadInstanceMemberRequest {
    /**
     * 全球多活数据库集群ID。
     * @example `gad-rm-bp1npi2j8****`
     */
    "GadInstanceName": string;
    /**
     * 集群中心节点所在的地域ID。可调用DescribeGadInstances查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要移除的单元节点的RDS实例ID，可调用DescribeGadInstances查询。
     * @example `rm-bp1npi2j8****`
     */
    "MemberInstanceName": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}

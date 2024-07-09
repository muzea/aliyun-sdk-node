export interface DeleteGadInstanceRequest {
    /**
     * 需要删除的RDS全球多活数据库集群ID。可调用DescribeGadInstances查询。
     * @example `gad-rm-bp1npi2j8****`
     */
    "GadInstanceName": string;
    /**
     * 集群中心节点（主节点）所在的地域ID。可调用DescribeGadInstances查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute接口获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}

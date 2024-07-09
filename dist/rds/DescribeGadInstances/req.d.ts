export interface DescribeGadInstancesRequest {
    /**
     * RDS全球多活数据库集群ID。
     * * 不传入该参数返回当前账号下的所有集群ID。
     * * 传入该参数返回目标集群的详细信息。
     * >您可在第一次调用时不传入此参数获取当前账号下的所有集群ID，再通过传入集群ID查看该集群的详情。
     * @example `gad-rm-bp1npi2j8****`
     */
    "GadInstanceName"?: string;
    /**
     * 地域ID，可调用DescribeRegions查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}

export interface DescribeDBResourceGroupRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 资源组名称。
     * > 当该值为空时，返回所有资源组详情；当该值不为空，则返回指定资源组详情
     * @example `testgroup`
     */
    "ResourceGroupName"?: string;
}

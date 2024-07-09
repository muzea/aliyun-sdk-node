export interface DeleteDBResourceGroupRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~196830~~)接口查看目标地域下所有实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 资源组名称。
     * @example `testgroup`
     */
    "ResourceGroupName": string;
}

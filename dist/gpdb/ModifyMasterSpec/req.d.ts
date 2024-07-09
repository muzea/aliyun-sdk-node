export interface ModifyMasterSpecRequest {
    /**
     * 实例当前所属的资源组ID。如何获取资源组ID，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 实例描述。
     * @example `test`
     */
    "DBInstanceDescription"?: string;
    /**
     * Master资源，取值如下：
     * - 2 CU
     * - 4 CU
     * - 8 CU
     * - 16 CU
     * - 32 CU
     * > 8CU以上的master资源会产生费用。
     * @example `8 CU`
     */
    "MasterCU"?: number;
}

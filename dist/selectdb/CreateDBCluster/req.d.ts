export interface CreateDBClusterRequest {
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 数据库类型。
     * @example `selectdb`
     */
    "Engine"?: string;
    /**
     * 数据库版本。
     * @example `2.4`
     */
    "EngineVersion": string;
    /**
     * 集群的付费类型。取值：
     * - **Postpaid**：后付费（按量付费）
     * - **Prepaid**：预付费（包年包月）
     * @example `Prepaid`
     */
    "ChargeType": string;
    /**
     * 指定预付费集群的购买时长。取值说明：
     * - 当Period为Year时，UsedTime取值范围为：1、2、3、5（整数）。
     * - 当Period为Month时，UsedTime取值范围为：1~9（整数）。
     * > 仅当ChargeType为Prepaid时，该参数才生效且为必填参数。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 指定预付费集群为包年或包月类型。取值说明：
     * - **Year**：包年类型。
     * - **Month**：包月类型。
     * > 仅当**ChargeType**为**Prepaid**时，该参数才生效且为必填参数。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 集群规格，取值说明：
     * - **selectdb.xlarge**：4核32GB。
     * - **selectdb.2xlarge**： 8核64GB。
     * - **selectdb.4xlarge**：16核128GB。
     * - **selectdb.8xlarge**：32核256GB。
     * - **selectdb.16xlarge**：64核512GB。
     * - **selectdb.24xlarge**：96核768GB。
     * - **selectdb.32xlarge**：128核1024GB。
     * @example `selectdb.2xlarge`
     */
    "DBClusterClass": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId": string;
    /**
     * VPC ID。
     * @example `vpc-bp175iuvg8nxqraf2****`
     */
    "VpcId": string;
    /**
     * 交换机ID。
     * @example `vsw-bp1gzt31twhlo0sa5****`
     */
    "VSwitchId": string;
    /**
     * 预留缓存大小。
     * @example `200`
     */
    "CacheSize": string;
    /**
     * 集群备注。
     * @example `testdb`
     */
    "DBClusterDescription": string;
}

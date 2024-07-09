export interface CheckCreateDBInstanceRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `AB`
     */
    "ClientToken"?: string;
    /**
     * 数据库类型。
     * @example `SelectDB`
     */
    "Engine"?: string;
    /**
     * 数据库版本。
     * @example `2.4`
     */
    "EngineVersion": string;
    /**
     * 实例的付费类型。取值：
     * - **Postpaid**：后付费（按量付费）
     * - **Prepaid**：预付费（包年包月）
     * @example `PrePaid`
     */
    "ChargeType": string;
    /**
     * 指定预付费实例为包年或包月类型。取值说明：
     * - 当Period为Year时，UsedTime取值范围为：1、2、3、5（整数）。
     * - 当Period为Month时，UsedTime取值范围为：1~9（整数）。
     * > 仅当ChargeType为Prepaid时，该参数才生效且为必填参数。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 指定预付费集群为包年或包月类型。取值说明：
     * - **Year**：包年类型。
     * - **Month**：包月类型。
     * > 仅当**ChargeType**为**Prepaid**时，该参数才生效且为必填参数。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 实例规格，取值说明：
     * - **selectdb.xlarge**：4核32GB。
     * - **selectdb.2xlarge**： 8核64GB。
     * - **selectdb.4xlarge**：16核128GB。
     * - **selectdb.8xlarge**：32核256GB。
     * - **selectdb.16xlarge**：64核512GB。
     * - **selectdb.24xlarge**：96核768GB。
     * - **selectdb.32xlarge**：128核1024GB。
     * @example `selectdb.xlarge`
     */
    "DBInstanceClass": string;
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
     * 预留缓存大小，单位：GB。
     * @example `200`
     */
    "CacheSize": number;
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
     * 实例备注信息。
     * @example `新建实例测试`
     */
    "DBInstanceDescription"?: string;
    /**
     * 实例的连接址。
     * @example `selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
    /**
     * 实例的IP白名单，多个IP地址请用英文逗号（,）分隔。
     * @example `172.16.XX.XX/12,192.168.XX.XX/22`
     */
    "SecurityIPList"?: string;
}

export interface CreateBackupPlanRequest {
    /**
     * DBS地域，该参数为必填项，可通过[DescribeRegions](~~437238~~)查看DBS支持地域。
     * > 更多详情信息，请参见[服务接入点](~~437201~~)。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 规格，取值如下：
     * - **micro**：入门型
     * - **small**：低配型
     * - **medium**：中配型
     * - **large**：高配型
     * - **xlarge**：高配型（无流量上限）
     * > 规格越高，备份与恢复的性能越高，更多信息，请参见[规格说明](~~84372~~)。
     * @example `micro`
     */
    "InstanceClass": string;
    /**
     * 数据库类型，取值如下：
     * - **MySQL**
     * - **MSSQL**
     * - **Oracle**
     * - **MariaDB**
     * - **PostgreSQL**
     * - **DRDS**
     * - **MongoDB**
     * - **Redis**
     * @example `MySQL`
     */
    "DatabaseType": string;
    /**
     * 备份方式，取值如下：
     * - **logical**：逻辑备份
     * - **physical**：物理备份
     * - **duplication**：转储备份
     * @example `logical`
     */
    "BackupMethod": string;
    /**
     * 指定预付费实例为包年或者包月类型，取值如下：
     * - **Year**：包年
     * - **Month**：包月
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 指定购买时长，取值如下：
     * - 当参数**Period**为**Year**时，**UsedTime**取值为1~5。
     * - 当参数**Period**为**Month**时，**UsedTime**取值为1~11。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 支付方式，取值如下：
     * - **postpay**：后付费（按量付费）
     * - **prepay**：预付费（包年包月）
     * > 默认为**prepay**。当**BackupMethod**为**duplication**支持**postpay**方式。
     * @example `prepay`
     */
    "PayType"?: string;
    /**
     * 数据库地域。
     * > 当**PayType**为**postpay**时，该参数必选。
     * @example `cn-hangzhou`
     */
    "DatabaseRegion"?: string;
    /**
     * 存储地域。
     * > 当**PayType**为**postpay**时，该参数必选。
     * @example `cn-hangzhou`
     */
    "StorageRegion"?: string;
    /**
     * 数据库实例类型，取值如下：
     * - **RDS**
     * - **PolarDB**
     * - **DDS**：阿里云MongoDB
     * - **Kvstore**：阿里云Redis
     * - **Other**：通过IP:Port接入的数据库
     * - **dg**：无公网IP:Port的自建数据库（通过数据库网关DG接入）
     * > 当**PayType**为**postpay**时，此项必选。
     * @example `RDS`
     */
    "InstanceType"?: string;
    /**
     * 该参数暂未开放使用。
     * @example `无`
     */
    "StorageType"?: string;
    /**
     * 用于备注请求来源，默认值为OpenAPI，无需手动设置。
     * @example `OpenAPI`
     */
    "FromApp"?: string;
    /**
     * 输入任意字符串，用于保证请求幂等性。
     * @example `KJSAHKJFHKJSHFKASHFKJADFHKDXXXX`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzecovzti****`
     */
    "ResourceGroupId"?: string;
}

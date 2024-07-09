export interface CreateSynchronizationJobRequest {
    /**
     * 数据同步实例地域的ID，与**DestRegion**参数保持一致。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步的源数据库所属地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "SourceRegion": string;
    /**
     * 数据同步的目标数据库所属地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * > 如果**SourceRegion**参数传入的地域为中国香港或海外地区，那么本参数须传入相同地域的ID。
     * @example `cn-hangzhou`
     */
    "DestRegion": string;
    /**
     * 同步拓扑，取值：
     * - **oneway**：单向同步
     * - **bidirectional**：双向同步。
     * > - 默认取值为**oneway**。
     * - 当**SourceEndpoint.InstanceType**和**DestinationEndpoint.InstanceType**参数取值为**MySQL**、**PolarDB**或**Redis**时，本参数才可以传入**bidirectional**。
     * @example `oneway`
     */
    "Topology"?: string;
    /**
     * 数据同步链路的规格，取值：**micro**、**small**、**medium**、**large**。
     * > 关于各链路规格的说明及性能测试情况请参见[数据同步链路规格说明](~~26605~~)。
     * @example `small`
     */
    "SynchronizationJobClass": string;
    /**
     * 付费类型。
     * - **PrePaid**：预付费。
     * - **PostPaid**：按量付费，默认付费类型。
     * @example `PostPaid `
     */
    "PayType": string;
    /**
     * 预付费实例的计费方式，取值：
     * - **Year**：包年。
     * - **Month**：包月。
     * > 当付费类型为**PrePaid**（预付费）时，该参数才有效且必须传入。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 预付费实例购买时长。
     * - 当计费方式为**Year**（包年）时，取值范围为**1~5**。
     * - 当计费方式为**Month**（包月）时，取值范围为**1~60**。
     * > 当付费类型为**PrePaid**（预付费）时，该参数才有效且必须传入。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 源库的实例类型，取值：
     * - **MySQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
     * - **PolarDB**：PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
     * - **Redis**：Redis数据库。
     * - **DRDS**：云原生分布式数据库PolarDB-X 1.0。
     * > - 默认取值为**MySQL**。
     * - 关于支持的源库和目标库对应情况，请参见支持的[数据库、同步初始化类型和同步拓扑](~~130744~~)。
     * @example `MySQL`
     */
    "SourceEndpoint.InstanceType"?: string;
    /**
     * 目标库的实例类型，取值：
     * - **MySQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
     * - **PolarDB**：PolarDB集群（仅支持MySQL或兼容Oracle语法的引擎）。
     * - **Redis**：Redis数据库。
     * - **MaxCompute**：MaxCompute实例。
     * >- 默认取值为**MySQL**。
     * - 关于支持的源库和目标库对应情况，请参见支持的[数据库、同步初始化类型和同步拓扑](~~130744~~)。
     * @example `MySQL`
     */
    "DestinationEndpoint.InstanceType"?: string;
    /**
     * 数据传输网络类型，固定取值为**Intranet**（专线）。
     * @example `Intranet`
     */
    "networkType"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    /**
     * 当**SourceEndpoint.InstanceType**传入**DRDS**时，您需要传入本参数来指定源PolarDB-X下挂的私有定制RDS实例数量，默认值为**1**。
     * @example `3`
     */
    "DBInstanceCount"?: number;
    "ResourceGroupId"?: string;
}

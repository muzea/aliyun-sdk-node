export interface ModifyDataLimitRequest {
    /**
     * 请求和返回消息的语言类型。取值：
     * - **zh**：中文（默认）
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * DSC连接授权的配置项所属产品的数据资产的唯一标识ID。
     * > 修改DSC连接授权的配置项时，需要提供其所属产品的数据资产的唯一标识ID，可调用[DescribeDataLimits](~~DescribeDataLimits~~)接口获取。
     * @example `11`
     */
    "Id": number;
    /**
     * DSC连接授权的配置项数据所属产品的名称。取值：
     * - **1**：MaxCompute
     * - **2**：OSS
     * - **3**：ADS
     * - **4**：OTS
     * - **5**：RDS
     * @example `5`
     */
    "ResourceType": number;
    /**
     * 资产所在的区域。取值：
     * - **cn-beijing**：华北2 （北京）
     * - **cn-zhangjiakou**：华北3（张家口）
     * - **cn-huhehaote**：华北5 （呼和浩特）
     * - **cn-hangzhou**：华东1 （杭州）
     * - **cn-shanghai**：华东2（上海）
     * - **cn-shenzhen**：华南1 （深圳）
     * - **cn-hongkong**：中国香港
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * DSC连接授权RDS数据库的用户名称。
     * @example `User01`
     */
    "UserName"?: string;
    /**
     * DSC连接授权RDS数据库的用户密码。
     * @example `********`
     */
    "Password"?: string;
    /**
     * 是否修改连接数据库的用户名和密码，取值：
     * - **true**：修改
     * - **false**：不修改
     * @example `true`
     */
    "ModifyPassword"?: boolean;
    /**
     * 是否开启审计。取值：
     * - **0**：不开启审计
     * - **1**：开启审计
     * @example `1`
     */
    "AuditStatus"?: number;
    /**
     * 开启审计之后，原始日志的保存时间（单位：天）。取值：
     * - **30**
     * - **90**
     * - **180**
     * - **365**
     * @example `30`
     */
    "LogStoreDay"?: number;
    /**
     * 数据库类型。取值：
     * - **MySQL**
     * - **SQLServer**
     * @example `MySQL`
     */
    "EngineType"?: string;
    /**
     * 连接数据库的端口。
     * @example `3306`
     */
    "Port"?: number;
    /**
     * 是否在规则发生变更时，自动触发重新扫描。取值：
     * - **0**：不触发自动扫描
     * - **1**：触发自动扫描
     * > 规则变更触发自动扫描时，会对数据源中的所有数据进行全量扫描。
     * @example `1`
     */
    "AutoScan"?: number;
    /**
     * 指定开启数据识别后，敏感数据采样条数。取值：
     * - **0**
     * - **5**
     * - **10**
     * @example `0`
     */
    "SamplingSize"?: number;
    /**
     * 数据资产所属的vpcid。
     * @example `vpc-2zevcqke6hh09c41****`
     */
    "VpcId"?: string;
    /**
     * Agent审计中PrivateLink使用的安全组。
     */
    "SecurityGroupIdList"?: string[];
    /**
     * Agent审计中PrivateLink使用的交换机。
     */
    "VSwitchIdList"?: string[];
    /**
     * 该参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
}

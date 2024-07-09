export interface CreateDataLimitRequest {
    /**
     * 授权扫描的资产所属的产品类型。取值：
     * - **1**：MaxCompute。
     * - **2**：OSS。
     * - **3**：ADS。
     * - **4**：OTS。
     * - **5**：RDS。
     * @example `1`
     */
    "ResourceType": number;
    /**
     * 必填，资产所在的地域。取值：
     * - **cn-beijing**：华北2（北京）。
     * - **cn-zhangjiakou**：华北3（张家口）。
     * - **cn-huhehaote**：华北5（呼和浩特）。
     * - **cn-hangzhou**：华东1（杭州）。
     * - **cn-shanghai**：华东2（上海）。
     * - **cn-shenzhen**：华南1（深圳）。
     * - **cn-hongkong**：中国香港。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 必填，资产的名称，实例ID和数据库的连接串，二者通过英文点号连接。
     * @example `rm-****34.******name`
     */
    "ParentId"?: string;
    /**
     * 数据库资产的用户名。
     * @example `y*****m`
     */
    "UserName"?: string;
    /**
     * 访问数据库资产的密码。
     * @example `p****d`
     */
    "Password"?: string;
    /**
     * 是否开启审计。取值：
     * - **0**：不开启审计。
     * - **1**：开启审计。
     * @example `1`
     */
    "AuditStatus"?: number;
    /**
     * 是否在规则发生变更时，自动触发重新扫描。取值：
     * - **0**：不触发自动扫描。
     * - **1**：触发自动扫描。
     * > 规则变更触发自动扫描时，会对数据源中的所有数据进行全量扫描。
     * @example `1`
     */
    "AutoScan"?: number;
    /**
     * 指定开启审计之后，原始日志的保存时间（单位：天）。取值：
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
     * 数据库连接端口。
     * @example `3306`
     */
    "Port"?: number;
    /**
     * OCR状态。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `0`
     */
    "OcrStatus"?: number;
    /**
     * 异常事件检测状态。取值：
     * - **0**：关闭。
     * - **1**：开启（默认）。
     * @example `1`
     */
    "EventStatus"?: number;
    /**
     * 是否开启敏感数据识别。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * > 如果资产是首次授权，默认值为1。如果资产非首次授权，将会使用上次授权后的值，可能是0或1。故如果要对资产进行敏感数据识别，建议将此参数设置为1。
     * @example `1`
     */
    "Enable"?: number;
    /**
     * 指定开启数据识别后，敏感数据采样条数。取值：
     * - **0**
     * - **5**
     * - **10**
     * > 默认值为10。
     * @example `0`
     */
    "SamplingSize"?: number;
    /**
     * 凭据权限。取值：
     * - **ReadOnly**：只读权限。
     * - **ReadWrite**：读写权限。
     * @example `ReadOnly`
     */
    "CertificatePermission"?: string;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
    /**
     * 该参数已废弃。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 是否立即扫描授权的资产。取值：
     * - **false**：不立即扫描。
     * - **true**：立即扫描。
     * @example `false`
     */
    "InstantlyScan"?: boolean;
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
}

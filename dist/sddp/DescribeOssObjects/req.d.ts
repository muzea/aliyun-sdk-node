export interface DescribeOssObjectsRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 搜索的关键词，支持模糊匹配。
     * @example `test`
     */
    "Name"?: string;
    /**
     * OSS存储对象的风险等级ID。取值：
     * - **1**：N/A：未识别到敏感数据。
     * - **2**：S1：1级敏感数据。
     * - **3**：S2：2级敏感数据。
     * - **4**：S3：3级敏感数据。
     * - **5**：S4：4级敏感数据。
     * @example `2`
     */
    "RiskLevelId"?: number;
    /**
     * OSS存储对象命中的敏感数据识别规则ID。
     * > 如果根据OSS存储对象命中的敏感数据识别规则的ID查询DSC连接授权的OSS的存储对象列表，敏感数据识别规则ID可调用**DescribeRules**接口获取。
     * @example `1222`
     */
    "RuleId"?: number;
    /**
     * OSS对象所属资产实例ID。
     * > 如果根据OSS对象所属资产实例的ID查询DSC连接授权的OSS的存储对象列表，资产实例ID可调用**DescribeInstances**接口获取。
     * @example `ins-2222`
     */
    "InstanceId"?: string;
    /**
     * 列表每页显示的数据最大条数。
     * @example `12`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 资产所在的地域。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 最后一次扫描开始时间。格式：时间戳。单位：毫秒。
     * @example `1536751124000`
     */
    "LastScanTimeStart"?: number;
    /**
     * 最后一次扫描结束时间。格式：时间戳。单位：毫秒。
     * @example `1536751124000`
     */
    "LastScanTimeEnd"?: number;
    /**
     * 行业模版ID
     * @example `1`
     */
    "TemplateId"?: number;
    /**
     * 文件分类编码。
     * @example `1`
     */
    "FileCategoryCode"?: number;
}

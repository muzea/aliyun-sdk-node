export interface DescribeLifecyclePoliciesRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId"?: string;
    /**
     * 生命周期策略名称。命名规则如下：
     * 长度为3-64个字符，必须以大小字母开头，可以包含英文字母、数字、下划线（_）或者短划线（-）。
     * @example `lifecyclepolicy_01`
     */
    "LifecyclePolicyName"?: string;
    /**
     * 每个分页包含的生命周期管理策略个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分级存储类型。
     * - InfrequentAccess：低频存储。
     * - Archive：归档存储。
     * > 如未指定 StorageType，则返回所有生命周期策略。
     * @example `InfrequentAccess`
     */
    "StorageType"?: string;
}

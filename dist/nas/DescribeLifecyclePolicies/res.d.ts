export interface DescribeLifecyclePoliciesResponse {
    /**
     * 生命周期管理策略总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `BC7C825C-5F65-4B56-BEF6-98C56C7C****`
     */
    RequestId: string;
    /**
     * 每个分页包含的生命周期管理策略个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 生命周期管理策略信息集合。
     */
    LifecyclePolicies: {
        /**
         * 文件系统ID。
         * @example `31a8e4****`
         */
        FileSystemId: string;
        /**
         * 生命周期管理策略关联的管理规则。
         * 包括：
         * - DEFAULT_ATIME_14：距今14天未访问的文件
         * - DEFAULT_ATIME_30：距今30天未访问的文件
         * - DEFAULT_ATIME_60：距今60天未访问的文件
         * - DEFAULT_ATIME_90：距今90天未访问的文件
         * @example `DEFAULT_ATIME_14`
         */
        LifecycleRuleName: string;
        /**
         * 生命周期管理策略创建的时间。
         * 执行ISO8601标准表示，返回格式：`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2019-10-30T10:08:08Z`
         */
        CreateTime: string;
        /**
         * 生命周期管理策略配置的单个目录的绝对路径。
         * @example `/pathway/to/folder`
         */
        Path: string;
        /**
         * 分级存储类型。
         * - InfrequentAccess：低频存储。
         * - Archive：归档存储。
         * @example `InfrequentAccess`
         */
        StorageType: string;
        /**
         * 生命周期管理策略名称。
         * @example `lifecyclepolicy_01`
         */
        LifecyclePolicyName: string;
        Paths: string[];
    }[];
}

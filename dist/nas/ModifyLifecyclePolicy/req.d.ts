export interface ModifyLifecyclePolicyRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 生命周期管理策略名称。
     * 长度为3~64个字符，必须以大写字母或小写字母开头，可以包含英文字母、数字、下划线（_）或者短划线（-）。
     * @example `lifecyclepolicy_01`
     */
    "LifecyclePolicyName": string;
    /**
     * 生命周期管理策略配置的单个目录的绝对路径。
     * 必须以正斜线（/）开头，并且是挂载点中真实存在的路径。
     * @example `/pathway/to/folder`
     */
    "Path"?: string;
    /**
     * 生命周期管理策略关联的管理规则。
     * 取值：
     * - DEFAULT_ATIME_14：距今14天未访问的文件。
     * - DEFAULT_ATIME_30：距今30天未访问的文件。
     * - DEFAULT_ATIME_60：距今60天未访问的文件 。
     * - DEFAULT_ATIME_90：距今90天未访问的文件。
     * - DEFAULT_ATIME_180：距今180天未访问的文件。仅当StorageType=Archive时，支持DEFAULT_ATIME_180。
     * > 如果该目录已经设置了低频策略，再次设置归档策略的时候，归档策略的时间要比低频策略设置的长。
     * @example `DEFAULT_ATIME_14`
     */
    "LifecycleRuleName": string;
    /**
     * 分级存储类型。
     * - InfrequentAccess：低频存储。
     * - Archive：归档存储。
     * @example `InfrequentAccess`
     */
    "StorageType"?: string;
}

export interface PutBucketRequest {
    /**
     * Bucket类型，取值范围：
     * - **sink**：单节点
     * - **standard**：全局调度
     * @example `sink`
     */
    "LogicalBucketType"?: string;
    /**
     * 备注。⻓度为0-128个字符或汉字。
     * @example `numb`
     */
    "Comment"?: string;
    /**
     * Bucket权限类型，取值范围：
     * - **private**：私有（默认值）
     * - **public-read-write**：公共读写
     * - **public-read**：公共读
     * @example `private`
     */
    "BucketAcl"?: string;
    /**
     * Bucket名称。
     * 3~50 个字符，只允许小写字母、数字、短横线（-），且不能以短横线开头或结尾。
     * @example `test`
     */
    "BucketName": string;
    /**
     * 节点区域id，单节点Bucket该参数必填。
     * @example `cn-xxx-1`
     */
    "EnsRegionId"?: string;
    /**
     * 调度范围，该参数仅对全局调度Bucket生效，取值范围：
     * - **domestic**：国内
     * - **oversea**：海外
     * @example `domestic`
     */
    "DispatchScope"?: string;
}

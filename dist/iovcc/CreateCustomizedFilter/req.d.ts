export interface CreateCustomizedFilterRequest {
    /**
     * 版本类型。取值：
     * - **FOTA**：系统版本
     * - **APP**：应用版本
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 比较的黑白名单类型：
     * - BLACK：黑名单
     * - WHITE：白名单
     * @example `BLACK`
     */
    "BlackWhiteType": string;
    /**
     * 过滤条件值
     * @example `1,2,3`
     */
    "Value": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 值的比较类型。取值：
     * - **NUMBER**：按数字比较
     * - **STRING**：按字符串比较
     * @example `NUMBER`
     */
    "ValueCompareType": string;
    /**
     * 过滤条件名
     * @example `AnotherFilter`
     */
    "Name": string;
    /**
     * 过滤条件值类型。
     * 目前仅支持**WRITE**，表示手写输入。
     * @example `WRITE`
     */
    "ValueType": string;
    /**
     * 所属版本ID
     * @example `1`
     */
    "VersionId": string;
}

export interface UpdateCustomizedFilterRequest {
    /**
     * 比较的黑白名单类型：
     * - **BLACK**：黑名单
     * - **WHITE**：白名单
     * @example `BLACK`
     */
    "BlackWhiteType": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 过滤条件名
     * @example `AnotherFilter`
     */
    "Name": string;
    /**
     * 过滤条件值
     * @example `1,4`
     */
    "Value": string;
    /**
     * 过滤条件值类型：
     * 唯一取值**WRITE**。
     * @example `WRITE`
     */
    "ValueType": string;
    /**
     * 值的比较类型：
     * - **NUMBER**：按数字比较
     * - **STRING**：按字符串比较
     * @example `NUMBER`
     */
    "ValueCompareType": string;
    /**
     * 更新的自定义过滤条件ID
     * @example `1`
     */
    "Id": number;
}

export interface ListSilencePoliciesRequest {
    /**
     * 静默策略名称。
     * @example `silencepolicy_test`
     */
    "Name"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的数目。
     * @example `20`
     */
    "Size": number;
    /**
     * 是否查询静默策略详情。
     * - `true`：查询。
     * - `false`：不查询。
     * @example `true`
     */
    "IsDetail"?: boolean;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}

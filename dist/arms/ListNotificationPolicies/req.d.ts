export interface ListNotificationPoliciesRequest {
    /**
     * 通知策略名称。
     * @example `notificationpolicy_test`
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
     * 是否查询通知策略详情。
     * - `true`：查询。
     * - `false`：不查询。
     * @example `false`
     */
    "IsDetail"?: boolean;
    /**
     * 地域id。默认为**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 通知策略ID。
     * @example `12345`
     */
    "Ids"?: string;
    /**
     * 极简模式
     */
    "DirectedMode"?: boolean;
}

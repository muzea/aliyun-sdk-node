export interface ListAppInfoRequest {
    /**
     * 应用状态，可查询指定状态的应用。应用创建后默认为**Normal**，取值范围：
     * - **Normal**（正常）
     * - **Disable**（停用）
     * @example `Normal`
     */
    "Status"?: string;
    /**
     * 页码。默认值为**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页返回的数据条数。默认值为**10**，最大值为**100**。
     * @example `10`
     */
    "PageSize"?: number;
}

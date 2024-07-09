export interface GetAppInfosResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-4DC4-D7393642****`
     */
    RequestId: string;
    /**
     * 不存在的应用ID列表。
     */
    NonExistAppIds: string[];
    /**
     * 应用信息列表。
     */
    AppInfoList: {
        /**
         * 应用类型。取值范围：
         * - **System**（系统默认）
         * - **Custom**（用户创建）
         * @example `System`
         */
        Type: string;
        /**
         * 应用状态。取值范围：
         * - **Normal**（正常）
         * - **Disable**（停用）
         * @example `Normal`
         */
        Status: string;
        /**
         * UTC创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-03-01T08:00:00Z`
         */
        CreationTime: string;
        /**
         * 应用名称。
         * @example `test`
         */
        AppName: string;
        /**
         * 应用描述。
         * @example `my first app.`
         */
        Description: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * UTC更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-03-01T09:00:00Z`
         */
        ModificationTime: string;
    }[];
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
}

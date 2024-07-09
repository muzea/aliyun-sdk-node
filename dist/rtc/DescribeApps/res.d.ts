export interface DescribeAppsResponse {
    /**
     * 返回分页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 请求id。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C6`
     */
    RequestId: string;
    /**
     * 返回结果数。
     * @example `1`
     */
    TotalNum: number;
    AppList: {
        /**
         * 应用列表。
         */
        App: {
            /**
             * 应用状态。取值：
             * - **1**：可用。
             *
             * - **2**：停用。
             * - **3**：欠费停用。
             * @example `1`
             */
            Status: number;
            /**
             * 应用名称。
             * @example `Default AppName`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `rgf1****"`
             */
            AppId: string;
            /**
             * 创建时间
             * @example `2020-01-09T02:02:29Z`
             */
            CreateTime: string;
            /**
             * 计费类型。
             * @example `PayByCR`
             */
            BillType: string;
            /**
             * 应用类型。取值：
             * - **conference**：会议。
             * - **universal**：通用型。
             * @example `universal`
             */
            AppType: string;
            ServiceAreas: {
                /**
                 * 服务区域：CN（中国）。
                 */
                ServiceArea: string[];
            };
            /**
             * 版本。
             * @example `3.0`
             */
            Version: string;
        }[];
    };
}

export interface GetAppCcuResponse {
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 时间戳。
     * @example `1665560460990`
     */
    Timestamp: string;
    /**
     * 当前会话统计信息详情列表。
     */
    DetailList: {
        /**
         * 项目ID。
         * @example `d9a8****`
         */
        ProjectId: string;
        /**
         * 应用ID。
         * @example `13027****`
         */
        AppId: string;
        /**
         * 区域ID。取值：
         * - huadong
         * - xinan
         * - huanan
         * - huabei
         * - huazhong
         * @example `huadong`
         */
        DistrictId: string;
        /**
         * 当前未结束的会话总数。
         * @example `100`
         */
        Ccu: string;
        /**
         * 应用版本ID。
         * @example `35067****`
         */
        AppVersion: string;
    }[];
}

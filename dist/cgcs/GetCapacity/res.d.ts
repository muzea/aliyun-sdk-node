export interface GetCapacityResponse {
    /**
     * 容器信息记录数。
     * @example `100`
     */
    Total: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 数据行数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 容器信息。
     */
    Capacities: {
        /**
         * 区域ID。取值：
         * - huadong
         * - xinan
         * - huanan
         * - huabei
         * - huazhong
         * @example `huadong
        `
         */
        DistrictId: string;
        /**
         * 应用ID。
         * @example `13027****`
         */
        AppId: string;
        /**
         * 应用版本ID。
         * @example `35067****`
         */
        AppVersion: string;
        /**
         * 该容器支持的会话数量。
         * @example `2`
         */
        SessionCapacity: number;
        /**
         * 项目ID。
         * @example `d9a8****`
         */
        ProjectId: string;
    }[];
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
}

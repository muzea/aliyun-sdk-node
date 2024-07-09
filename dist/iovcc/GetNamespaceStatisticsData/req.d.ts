export interface GetNamespaceStatisticsDataRequest {
    /**
     * 项目ID。
     * @example `PIY3UB0T`
     */
    "ProjectId": string;
    /**
     * Namespace唯一标识。
     * @example `cc6c29893f2be7d465db44ec7b5d593e`
     */
    "Namespace": string;
    /**
     * 统计维度类型。
     * - **101**-用户日活
     * - **102**-设备日活
     * - **103**-数据提交次数
     * - **111**-每分钟用户访问次数
     * - **112**-每分钟设备访问次数
     * - **113**-每分钟数据提交次数
     * @example `101`
     */
    "DimensionType": string;
    /**
     * 开始时间。
     * - 按日统计，如：2018-08-16
     * - 按分钟统计，如：2018-08-23 13:53
     * @example `2018-09-20`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * - 按日统计，如：2018-08-16
     * - 按分钟统计，如：2018-08-23 13:53
     * @example `2018-09-18`
     */
    "EndTime"?: string;
}

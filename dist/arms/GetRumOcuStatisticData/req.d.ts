export interface GetRumOcuStatisticDataRequest {
    /**
     * 开始时间的时间戳，精确到毫秒。
     * @example `1600063200000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1687849260000`
     */
    "EndTime"?: number;
    /**
     * 查询类型，非时序数据：INSTANT，时序数据：TIME_SERIES。
     * @example `TIME_SERIES`
     */
    "QueryType"?: string;
    /**
     * 筛选条件，
     * 目前提供三种筛选条件：
     * - 应用名称：pid（注意，展示应用名称，但是实际上传入的是应用id）
     * - 应用类型：siteType
     * - 数据类型：dataType
     */
    "Filter"?: {
        /**
         * 过滤条件Key。目前提供三种筛选条件：
         * - 应用名称：pid（注意，展示应用名称，但是实际上传入的是应用id）
         * - 应用类型：siteType
         * - 数据类型：dataType
         * @example `pid`
         */
        Key: string;
        /**
         * 筛选类型，目前支持in（包含）。
         * @example `in`
         */
        OpType: string;
        /**
         * 过滤的值，JSON Array类型的字符串，元素为字符串。
         * @example `["b590xxxxx@2dcbxxxxx9", "b590xxxxx@2dcbxxxxx8"]`
         */
        Value: any;
    }[];
    /**
     * 分组字段，支持传入：
     * - siteType，按照应用类型分组统计总OCU
     * - dataType，按照数据类型分组统计总OCU
     * - pid，按照应用id分组统计OCU
     * - appName，按照应用名分组统计OCU
     * - startTime，按照开始时间分组统计OCU
     */
    "Group"?: string[];
    /**
     * 页码。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页大小。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}

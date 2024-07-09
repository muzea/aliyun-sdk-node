export interface ListSyntheticDetailRequest {
    /**
     * 地域ID，当前只支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 拨测类型，必填，即时拨测：1，定时拨测：2。
     * @example `1`
     */
    "SyntheticType"?: number;
    /**
     * 结果分类，必填，写死：SYNTHETIC。
     * @example `SYNTHETIC`
     */
    "Category"?: string;
    /**
     * 拨测结果内容，必填，获取不同类型的拨测结果传不同的值：
     * - PING列表：ICMP_LIST
     * - TCP列表：TCP_LIST
     * - DNS列表：DNS_LIST
     * - HTTP(s)列表：HTTP_LIST
     * - 网站测速列表：WEBSITE_LIST
     * - 文件下载列表：DOWNLOAD_LIST
     * - 拨测结果明细：ALL
     * @example `ICMP_LIST`
     */
    "Detail"?: string;
    /**
     * 筛选条件，必填。
     * - 查任务拨测结果列表：{"taskId":"${taskId}"}
     * - 查任务拨测结果详情：{"taskId":"${taskId}","dataId":"${dataId}"}
     */
    "Filters"?: any;
    /**
     * 筛选条件数组，必填。
     * - 查询拨测结果列表：[{"Key":"taskType","OpType":"in","Value":[任务类型]}]。
     * - 查询拨测结果详情：[{"Key":"dataId","OpType":"eq","Value":"dataId"}] ，dataId为查任务拨测结果列表返回值的dataId字段。
     */
    "AdvancedFilters"?: {
        /**
         * 筛选条件，支持taskType和dataId字段。
         * - 查询拨测结果列表：taskType
         * - 查询拨测结果详情：dataId
         * @example `taskType`
         */
        Key: string;
        /**
         * 筛选类型，支持eq（等于）和in（包含）。
         * @example `eq`
         */
        OpType: string;
        /**
         * 筛选条件的value。
         * 任务类型：
         * 1：ICMP；
         * 2：TCP；
         * 3：DNS；
         * 4：HTTP；
         * 5：网站测速；
         * 6：文件下载。
         * @example `1`
         */
        Value: any;
    }[];
    /**
     * 保留字段。
     */
    "ExactFilters"?: {
        /**
         * 保留字段。
         * @example `保留字段。`
         */
        Key: string;
        /**
         * 保留字段。
         * @example `保留字段。`
         */
        OpType: string;
        /**
         * 保留字段。
         * @example `保留字段。`
         */
        Value: any;
    }[];
    /**
     * 查询起始时间的时间戳，必填，精确到毫秒。
     * @example `1684110343127`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间的时间戳，必填，精确到毫秒。
     * @example `1684480557772`
     */
    "EndTime"?: number;
    /**
     * 排序字段，仅支持：timestamp（拨测发起时间）。
     * @example `timestamp`
     */
    "OrderBy"?: string;
    /**
     * 排序标准。取值：
     * - `ASC`：升序。
     * - `DESC`：降序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 查询页码，从1开始。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
}

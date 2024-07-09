export interface DescribeIncrementBackupListRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbsqdss5tmh****`
     */
    "BackupPlanId": string;
    /**
     * 每页的记录数，取值30、50、100。
     * > 默认每页记录数为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于等于0且不超过Integer的最大值，默认值为0。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 任意字符串，用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 是否显示存储类型，取值如下：
     * - true
     * - false
     * > 默认true。
     * @example `true`
     */
    "ShowStorageType"?: boolean;
    /**
     * 开始备份时间戳。
     * @example `1570701361528`
     */
    "StartTimestamp"?: number;
    /**
     * 结束备份时间戳。
     * @example `1570701361600`
     */
    "EndTimestamp"?: number;
}

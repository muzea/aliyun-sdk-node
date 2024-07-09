export interface QueryAppTopologyRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用ID。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 应用类型，XTRACE、EBPF需要填写，默认不填。
     * @example `TRACE`
     */
    "AppType"?: string;
    /**
     * 拓扑查询类型。
     * @example `apm_apps_v2`
     */
    "Type": string;
    /**
     * RPC接口名。
     * @example `/eventCenter`
     */
    "Rpc"?: string;
    /**
     * 数据库域名。
     * @example `rm-xxx.mysql.rds.aliyuncs.com:3306`
     */
    "Db"?: string;
    /**
     * 数据库名称。
     * @example `orders`
     */
    "DbName"?: string;
    /**
     * 起始时间的时间戳，精确到毫秒。
     * @example `1595568910000`
     */
    "StartTime": number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1671952708499`
     */
    "EndTime": number;
    /**
     * 筛选条件组合。
     */
    "Filters"?: any;
}

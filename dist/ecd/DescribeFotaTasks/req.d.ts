export interface DescribeFotaTasksRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100
     * - 默认值：20
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 镜像升级任务的信息列表。
     */
    "TaskUid"?: string[];
    /**
     * 设置镜像升级任务是否自动推送。
     * @example `Pending`
     */
    "UserStatus"?: string;
    /**
     * > 此参数不开放使用。
     * @example `windows`
     */
    "FotaStatus"?: string;
    /**
     * 升级版本说明的语言类型。
     * @example `zh`
     */
    "Lang"?: string;
}

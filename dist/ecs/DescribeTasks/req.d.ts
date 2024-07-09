export interface DescribeTasksRequest {
    /**
     * 查询结果的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页记录数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID。单次最多支持指定100个，ID之间使用半角逗号（,）分隔。
     * @example `t-bp1hvgwromzv32iq****,t-bp179lofu2pv768w****`
     */
    "TaskIds"?: string;
    /**
     * 任务操作的接口名称。取值范围：
     * - ImportImage：导入镜像。
     * - ExportImage：导出镜像。
     * - RedeployInstance：重新部署ECS实例。
     * - ModifyDiskSpec：变更云盘类型。
     * @example `ImportImage`
     */
    "TaskAction"?: string;
    /**
     * 任务状态。取值范围：
     * - Finished：已完成。
     * - Processing：运行中。
     * - Failed：失败。
     * 默认值：无。
     * > 只支持查询状态为Finished、Processing和Failed的任务，填入其他取值将不会生效。
     * @example `Finished`
     */
    "TaskStatus"?: string;
    /**
     * 按创建时间查询，创建时间区间的起始点。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-11-23T15:10:00Z`
     */
    "StartTime"?: string;
    /**
     * 按创建时间查询，创建时间区间的终止点。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-11-23T15:16:00Z`
     */
    "EndTime"?: string;
    /**
     * 资源ID。N的取值范围：1~100。
     */
    "ResourceIds"?: string[];
}

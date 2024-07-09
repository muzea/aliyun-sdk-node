export interface ListApplicationsRequest {
    /**
     * 应用集群名。支持多选，以","分割；输入All，查询用户名下所有集群的应用列表；默认查询全量。
     * @example `poc,pre`
     */
    "ClusterNames"?: string;
    /**
     * 应用的业务服务版本号。支持多选，以","分割；输入All，输出所有版本数据。默认只输出稳定版版本号的关联数据。
     * @example `v1,v2`
     */
    "AppVersions"?: string;
    /**
     * 应用边缘资源的区域统计级别。枚举类型，取值范围：
     * - National：全国
     * - Big：大区
     * - Middle：省级
     * - Small：城市
     * - RegionId：边缘节点
     * 默认National。
     * @example `National`
     */
    "Level"?: string;
    /**
     * 是否输出统计资源实例/容器Pod等维度的信息。Json的字符串格式。默认输出所有信息。
     * @example `{\"appInfo\":true,\"detailStat\": true, \"appVersionStat\": true, \"districtStat\":true ,\"instanceStat\": true, \"podCountStat\": true}`
     */
    "OutAppInfoParams"?: string;
    /**
     * 页码，起始值为1，导出全部信息时可不传入。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，导出全部时可不传入。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询起始时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-02-15`
     */
    "MinDate"?: string;
    /**
     * 查询终止时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-02-20`
     */
    "MaxDate"?: string;
}

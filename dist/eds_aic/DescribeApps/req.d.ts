export interface DescribeAppsRequest {
    /**
     * 应用ID列表。
     */
    "AppIdList"?: string[];
    /**
     * 应用名称。
     * @example `应用名称`
     */
    "AppName"?: string;
    "BizRegionId"?: string;
    /**
     * 应用状态。
     * @example `NORMAL`
     */
    "Status"?: string;
    /**
     * 应用的安装/卸载状态。
     * @example `INSTALLING`
     */
    "InstallationStatus"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****`
     */
    "NextToken"?: string;
}

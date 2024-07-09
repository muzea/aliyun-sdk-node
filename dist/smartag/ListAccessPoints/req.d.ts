export interface ListAccessPointsRequest {
    /**
     * 要查询的接入点所属地域ID。您可以通过[DescribeRegions](~~36063~~)查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页的条目数。
     * 取值范围：**1~50**。
     * 默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 智能接入网关实例ID。
     * @example `sag-far8v6owtdxlua****`
     */
    "SmartAGId"?: string;
    /**
     * 分页查询时的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}

export interface GetUserVpcVSwitchRequest {
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示记录条数。
     * @example `1`
     */
    "PageSize": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有网络ID。
     * @example `vpc-2ze22scdz2ebdfjasdfjkqhf4pyj`
     */
    "VpcId": string;
}

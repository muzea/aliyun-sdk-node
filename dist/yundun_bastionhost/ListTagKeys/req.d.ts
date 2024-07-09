export interface ListTagKeysRequest {
    /**
     * 堡垒机实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。
     * 唯一取值为INSTANCE，表示堡垒机实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示当前页的页码。
     * @example `1`
     */
    "PageNumber"?: number;
}

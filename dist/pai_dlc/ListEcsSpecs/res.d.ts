export interface ListEcsSpecsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * ECS规格列表。
     */
    EcsSpecs: any[];
    /**
     * 符合过滤条件的总数量。
     * @example `10`
     */
    TotalCount: number;
}

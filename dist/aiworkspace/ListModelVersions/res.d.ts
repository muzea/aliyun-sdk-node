export interface ListModelVersionsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC***3C83E`
     */
    RequestId: string;
    /**
     * 模型版本列表。
     */
    Versions: any[];
    /**
     * 模型版本列表总数。
     * @example `15`
     */
    TotalCount: number;
}

export interface ListClustersResponse {
    /**
     * 集群列表。
     */
    Clusters: any[];
    /**
     * 请求ID。
     * @example `9E3A7161-EB7B-172B-8D18-FFB06BA3896A`
     */
    RequestId: string;
    /**
     * 下页页码。
     * @example `eyJlY21OZXh0VG9rZW4iOiIxIiwidGFpaGFvTmV4dFRva2VuIjoiNTYiLCJ0YWloYW9OZXh0VG9rZW5JbnQiOjU2LCJlY21OZXh0VG9rZW5JbnQiOjF9`
     */
    NextToken: string;
    /**
     * 分页大小。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 分页总数。
     * @example `1000`
     */
    TotalCount: number;
}

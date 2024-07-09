export interface SearchInventoryResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `A81E4B2E-6B33-4BAE-9856-55DB7C893E01`
     */
    RequestId: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    Entities: any[];
}

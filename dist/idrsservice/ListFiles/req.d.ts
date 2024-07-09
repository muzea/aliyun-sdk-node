export interface ListFilesRequest {
    /**
     * 路径前缀
     * @example `20220110/`
     */
    "Prefix"?: string;
    /**
     * 数量
     * @example `500`
     */
    "Limit"?: number;
}

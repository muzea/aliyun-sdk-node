export interface ListWebHostingFilesRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 路径前缀。
     * @example `/`
     */
    "Prefix": string;
    /**
     * 分页游标。取值为上一页返回的NextMarker的值，当获取第一页时，取空字符串。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****​/test/error1.png`
     */
    "Marker"?: string;
    /**
     * 分页大小，默认50，最大500。
     * @example `100`
     */
    "PageSize"?: number;
}

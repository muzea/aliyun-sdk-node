export interface PutDcdnKvResponse {
    /**
     * Key的长度。
     * @example `5`
     */
    Length: number;
    /**
     * Key的内容， 超过256个字符长度，将取前100及后100字符并省略中间。
     * @example `value1`
     */
    Value: string;
    /**
     * 请求ID。
     * @example `96ED3127-EC7A-57C5-AFA6-A689B24B2530`
     */
    RequestId: string;
}

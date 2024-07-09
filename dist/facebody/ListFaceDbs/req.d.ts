export interface ListFaceDbsRequest {
    /**
     * 默认起始页从0开始，不填写默认从0页开始返回数据。
     * @example `1`
     */
    "Offset"?: number;
    /**
     * 每页最多显示的样本数目，范围1~200，默认200。
     * @example `50`
     */
    "Limit"?: number;
}

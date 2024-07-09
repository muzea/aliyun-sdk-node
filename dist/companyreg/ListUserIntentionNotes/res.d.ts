export interface ListUserIntentionNotesResponse {
    /**
     * 分页页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求id
     * @example `5D8BD6E8-28D9-5451-BBA1-3D3DCA6971F6`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 总条数
     * @example `8`
     */
    TotalItemNum: number;
    /**
     * 分页大小
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 小记信息
         * @example `测试`
         */
        Note: string;
        /**
         * 创建时间
         * @example `2022-01-25 10:21:38`
         */
        CreateTime: string;
    }[];
}

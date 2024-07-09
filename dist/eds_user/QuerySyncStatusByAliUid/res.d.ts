export interface QuerySyncStatusByAliUidResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 自增ID。
         * @example `18500`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `2020-06-30 07:50:42`
         */
        GmtCreated: string;
        /**
         * 修改时间。
         * @example `2022-03-02 14:27:39`
         */
        GmtModified: string;
        /**
         * 阿里云账号ID。
         * @example `131239236086****`
         */
        AliUid: number;
        /**
         * 用户同步状态。
         * @example `success`
         */
        Status: string;
        /**
         * 企业ID。
         * @example `cdrs948144195608****`
         */
        CorpId: string;
        /**
         * 最后开始时间。
         * @example `2022-03-02 14:31:39`
         */
        LatestBeginTime: string;
        /**
         * 最后结束时间，不论成功或失败。
         * @example `2022-03-02 16:13:12`
         */
        LatestEndTime: string;
        /**
         * 最后成功时间。
         * @example `2022-03-02 18:24:01`
         */
        LatestSuccessTime: string;
    };
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求失败的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
}

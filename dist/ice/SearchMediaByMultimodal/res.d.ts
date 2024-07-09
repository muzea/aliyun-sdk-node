export interface SearchMediaByMultimodalResponse {
    /**
     * 请求ID。
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 符合要求的媒资集合。
     */
    MediaList: {
        /**
         * 媒资ID。
         * @example `a18936e0e28771edb59ae6f6f47a****`
         */
        MediaId: string;
        /**
         * 片段信息。
         */
        ClipInfo: {
            /**
             * 片段起始时间。
             * @example `2`
             */
            From: number;
            /**
             * 片段结束时间。
             * @example `4`
             */
            To: number;
            /**
             * 打分。
             * @example `1.2`
             */
            Score: number;
        }[];
    }[];
    /**
     * 满足搜索条件的媒资信息总条数。
     * @example `20`
     */
    Total: number;
}

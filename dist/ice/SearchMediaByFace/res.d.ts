export interface SearchMediaByFaceResponse {
    /**
     * 请求ID。
     * @example `7CA7D615-CFB1-5437-9A12-2D185C3EE6CB`
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
    MediaInfoList: {
        /**
         * 媒资ID。
         * @example `3b187b3620c8490886cfc2a9578c****`
         */
        MediaId: string;
    }[];
    /**
     * 满足搜索条件的媒资信息总条数。
     * @example `163`
     */
    Total: number;
}

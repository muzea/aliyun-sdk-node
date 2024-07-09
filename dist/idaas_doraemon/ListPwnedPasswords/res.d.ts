export interface ListPwnedPasswordsResponse {
    /**
     * Id of the request
     * @example `D0F570B0-89CE-07F2-B41E-F97E089E13C6`
     */
    RequestId: string;
    /**
     * 当前页数
     * @example `2`
     */
    PageNumber: number;
    /**
     * 总数
     * @example `80`
     */
    TotalCount: number;
    /**
     * 每页数量
     * @example `10`
     */
    PageSize: number;
    /**
     * 泄露密码集合
     */
    PwnedPasswordInfos: {
        /**
         * 密码Hash
         * @example `0000`
         */
        HexPasswordSha1Hash: string;
        /**
         * 泄露次数
         * @example `84`
         */
        PwnedCount: number;
    }[];
}

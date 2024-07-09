export interface DescribeRegionIspsResponse {
    /**
     * 请求ID。
     * @example `DC90CC7E-23B6-5A90-9097-A17CE4A161C4`
     */
    RequestId: string;
    /**
     * 运营商列表。
     */
    Isps: {
        /**
         * 运营商编码。
         * @example `cmcc`
         */
        Code: string;
        /**
         * 运营商名称。
         * @example `移动`
         */
        Name: string;
    }[];
}

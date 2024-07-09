export interface ListInstancePatchesResponse {
    /**
     * 翻页标记Token。
     * @example `-`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0A615755-9C86-5EA6-BF9E-6E8F1AFF9403`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 补丁信息。
     */
    Patches: {
        /**
         * 严重性级别。
         * @example `important`
         */
        Severity: string;
        /**
         * 安装状态。
         * @example `Installed`
         */
        Status: string;
        /**
         * 安装时间。
         * @example `2021-01-28T07:07:20Z`
         */
        InstalledTime: string;
        /**
         * KBId
         * @example `apt-utils.amd64`
         */
        KBId: string;
        /**
         * 名称。
         * @example `isc-dhcp-common.amd64:4.3.5-3ubuntu7.3`
         */
        Title: string;
        /**
         * 分类。
         * @example `“”`
         */
        Classification: string;
    }[];
}

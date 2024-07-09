export interface ListChartReleaseResponse {
    /**
     * 请求ID
     * @example `F68823F6-F1B5-4A4E-8421-A83CAB8F2963`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: string;
    /**
     * Chart版本列表
     */
    ChartReleases: {
        /**
         * 状态
         * @example `ENABLED`
         */
        Status: string;
        /**
         * Chart修改时间
         * @example `1571930323000`
         */
        ModifiedTime: number;
        /**
         * Chart仓库ID
         * @example `crcr-gpsu7b8chmxk****`
         */
        RepoId: string;
        /**
         * Chart版本号
         * @example `0.1.0`
         */
        Release: string;
        /**
         * Chart版本大小，单位 Byte
         * @example `2826`
         */
        Size: string;
        /**
         * 实例ID
         * @example `cri-xkx6vujuhay0****`
         */
        InstanceId: string;
        /**
         * Chart版本名称
         * @example `chart1`
         */
        Chart: string;
    }[];
}

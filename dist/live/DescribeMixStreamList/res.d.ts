export interface DescribeMixStreamListResponse {
    /**
     * 合流任务列表。
     */
    MixStreamList: {
        /**
         * App名称。
         * @example `liveApp****`
         */
        AppName: string;
        /**
         * 主播流域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 合流任务创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-09-17T08:39:14Z`
         */
        GmtCreate: string;
        /**
         * 合流任务修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-09-17T08:39:15Z`
         */
        GmtModified: string;
        /**
         * 输入源个数。
         * @example `2`
         */
        InputStreamNumber: number;
        /**
         * 布局ID。
         * @example `USERDEFINED`
         */
        LayoutId: string;
        /**
         * 合流输出模板。
         * @example `lp_ld`
         */
        MixStreamTemplate: string;
        /**
         * 合流任务ID。可作为删除合流任务的请求参数。
         * @example `aaf9a50f-c460-3a9b-f180-38dd8f05****`
         */
        MixstreamId: string;
        /**
         * 合流任务的流名。
         * @example `liveStream****`
         */
        StreamName: string;
    }[];
    /**
     * 请求ID。
     * @example `BC1E78D3-FA8B-4457-DEE2-6093E1232254`
     */
    RequestId: string;
    /**
     * 任务总数。
     * @example `1`
     */
    Total: number;
}

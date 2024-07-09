export interface QueryMediaCensorJobDetailRequest {
    /**
     * 媒体审核作业ID。可以从[提交媒体审核作业](~~444848~~)的返回参数中获取。
     * @example `2288c6ca184c0e47098a5b665e2a12****`
     */
    "JobId": string;
    /**
     * 下一页标识，第一次提交时为空即可。下一页标识将在第一次查询后返回。
     * @example `ae0fd49c0840e14daf0d66a75b83****`
     */
    "NextPageToken"?: string;
    /**
     * 每页最大返回数。
     * - 默认值：**30**
     * - 取值范围：**1~300**
     * @example `30`
     */
    "MaximumPageSize"?: number;
}

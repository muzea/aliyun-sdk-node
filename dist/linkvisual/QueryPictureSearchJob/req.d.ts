export interface QueryPictureSearchJobRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `fdc576d03c094faea9fa10fbf48c****`
     */
    "AppInstanceId": string;
    /**
     * 任务状态：
     * - 0：初始化
     * - 1：无数据
     * - 2：运行中
     * - 3：运行成功
     * - 4：运行失败
     * 若不设置此参数，表示选择所有状态。
     * @example `3`
     */
    "JobStatus"?: number;
    /**
     * 每页显示的条数。最小值为1，最大值为50，默认值为10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage": number;
}

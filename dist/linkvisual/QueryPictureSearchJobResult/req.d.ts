export interface QueryPictureSearchJobResultRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `fdc576d03c094faea9fa10fbf48c****`
     */
    "AppInstanceId": string;
    /**
     * 一体化以图搜图任务ID。可调用[QueryPictureSearchJob](~~206778~~)查询。
     * @example `b7e501d0d2524a4caeb50df3282a****`
     */
    "JobId": string;
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

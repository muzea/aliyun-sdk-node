export interface QueryPictureSearchDevicesRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `5a502d3fbab8410e8fd4be9037c7****`
     */
    "AppInstanceId": string;
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

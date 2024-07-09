export interface GetPictureSearchJobStatusRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)查询。
     * @example `892f97c9518548469d319d955d98****`
     */
    "AppInstanceId": string;
    /**
     * 以图搜图任务ID。可调用[QueryPictureSearchJob](~~206778~~)查询。
     * @example `b3786935a71442efae014c7b2212****`
     */
    "JobId": string;
}

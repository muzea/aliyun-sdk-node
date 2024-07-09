export interface GetAppResponse {
    /**
     * 应用ID。
     * @example `4384****`
     */
    AppId: string;
    /**
     * 应用创建时间。
     * @example `2022-04-06 02:00:00`
     */
    GmtCreate: string;
    /**
     * 应用最后修改时间。
     * @example `2022-04-06 02:00:00`
     */
    GmtModified: string;
    /**
     * 应用名称。
     * @example `example`
     */
    AppName: string;
    /**
     * 应用类型。取值：
     * - end_game：端游（客户端游戏）。
     * - hand_game：手游（移动端游戏）。
     * - ai_app：人工智能应用。
     * - render_app：渲染类应用。
     * - cluster_compute：科研计算应用。
     * - compute：科研渲染应用。
     * @example `end_game`
     */
    AppType: string;
    /**
     * 云渲染串流服务实例ID。
     * @example `47d0bd4d-8815-48a2-b783-6cbba89d****`
     */
    StreamingAppId: string;
    /**
     * 串流方案。
     * 取值：
     * - video-cloud-streaming：使用云渲染串流服务。
     * - self-have-streaming：自有串流。
     * @example `self-have-streaming`
     */
    StreamingSolution: string;
    /**
     * 应用总共创建的版本数。
     * @example `28`
     */
    VersionTotalNum: number;
    /**
     * 应用总共适配成功的版本数。
     * @example `10`
     */
    VersionAdaptNum: number;
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
}

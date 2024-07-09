export interface CreateAppRequest {
    /**
     * 应用名称。
     * 支持Unicode字符，最大64个字符。
     * @example `example`
     */
    "AppName": string;
    /**
     * 应用类型。取值：
     * - end_game：端游（客户端游戏）。
     * - ai_app：人工智能应用。
     * - render_app：渲染类应用。
     * - compute：科研渲染应用。
     * @example `end_game`
     */
    "AppType": string;
    /**
     * 云渲染串流服务实例ID。
     * @example `47d0bd4d-8815-48a2-b783-6cbba89d****`
     */
    "StreamingAppId"?: string;
    /**
     * 串流方案。取值：
     * - video-cloud-streaming：使用云渲染串流服务。
     * - self-have-streaming：自有串流。
     * @example `self-have-streaming`
     */
    "StreamingSolution"?: string;
}

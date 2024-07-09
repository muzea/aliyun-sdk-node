export interface CreatePtsSceneResponse {
    /**
     * 创建成功的场景ID。
     * @example `SDR3CX`
     */
    SceneId: string;
    /**
     * 请求ID。
     * @example `4F7D2CE0-AE4C-4143-955A-8E4595AF86A6`
     */
    RequestId: string;
    /**
     * 错误提示信息，如果成功则不返回任何数据。
     * @example `创建或者修改场景入参必须是实体类Scene的JSON串`
     */
    Message: string;
    /**
     * HTTP状态码，成功则不返回任何数据。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码，成功则不返回任何数据。
     * @example `4001`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `false`
     */
    Success: boolean;
}

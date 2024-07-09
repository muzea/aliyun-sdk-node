export interface SavePtsSceneResponse {
    /**
     * 错误信息提示，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 场景ID
     * @example `IUYAHGJ`
     */
    SceneId: string;
}

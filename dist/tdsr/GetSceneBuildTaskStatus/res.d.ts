export interface GetSceneBuildTaskStatusResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 场景ID
     * @example `m+0cmndEGjg9pv/hy4jh****`
     */
    SceneId: string;
    /**
     * 未开始：init； 处理中：processing； 失败：failed；完成：succeed； 取消：canceled；
     * @example `failed`
     */
    Status: string;
    /**
     * 任务失败错误码
     * @example `2001`
     */
    ErrorCode: string;
    /**
     * 任务失败错误消息
     * @example `墙线数量少于4`
     */
    ErrorMsg: string;
}

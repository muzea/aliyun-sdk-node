export interface GetTaskStatusResponse {
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
     * 未开始 :init 处理中 : processing    失败 :failed   完成 :succeed  取消 :canceled
     * @example `init`
     */
    Status: string;
    /**
     * 墙线预测：wall_line 切图：cut_image 重建：build 直角优化：right_angle_optimization 其他：other
     * @example `wallline`
     */
    Type: string;
    /**
     * 任务执行失败错误码
     * @example `2001`
     */
    ErrorCode: string;
    /**
     * 任务执行失败错误消息
     * @example `未检测到墙线`
     */
    ErrorMsg: string;
}

export interface GetSubSceneTaskStatusResponse {
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
     * 任务信息
     */
    List: {
        /**
         * 任务ID
         * @example `4638****`
         */
        Id: string;
        /**
         * 场景ID
         * @example `2345****`
         */
        SceneId: string;
        /**
         * 子场景ID
         * @example `3456***`
         */
        SubSceneId: string;
        /**
         * 未开始  init 处理中   processing   失败     failure  完成     succeed  取消     canceled
         * @example `init`
         */
        Status: string;
        /**
         * 墙线预测：wall_line 切图：cut_image 重建：build 直角优化：right_angle_optimization 其他：other
         * @example `cutimage`
         */
        Type: string;
        /**
         * 任务失败错误码
         * @example `2001`
         */
        ErrorCode: string;
        /**
         * 任务失败错误信息
         * @example `异常信息`
         */
        ErrorMsg: string;
    }[];
}

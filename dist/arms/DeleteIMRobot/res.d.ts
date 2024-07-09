export interface DeleteIMRobotResponse {
    /**
     * 请求ID。
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
    /**
     * 是否成功删除IM机器人。
     * - `true`：删除成功。
     * - `false`：删除失败。
     * @example `true`
     */
    IsSuccess: boolean;
}

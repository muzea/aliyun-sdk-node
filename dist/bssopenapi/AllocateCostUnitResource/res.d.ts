export interface AllocateCostUnitResourceResponse {
    /**
     * 消息码，例如：success。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `845C629F-47A7-4F46-A470-ED5047C4C250`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `false`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 目标财务单元属主用户ID。
         * @example `34857693874`
         */
        ToUnitUserId: number;
        /**
         * 财务单元资源分配是否分配成功
         * - true表示分配成功
         * - false表示分配失败
         * @example `true`
         */
        IsSuccess: boolean;
        /**
         * 目标财务单元ID。
         * @example `32857346527`
         */
        ToUnitId: number;
    };
}

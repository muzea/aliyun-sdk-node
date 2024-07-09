export interface CheckCreatedByEnabledResponse {
    /**
     * 请求ID。
     * @example `682DD9E1-F530-5D14-A839-A6787FA82B74`
     */
    RequestId: string;
    /**
     * 启用状态，取值：
     * - true：已启用。
     * - false：未开启。
     * @example `false`
     */
    OpenStatus: boolean;
}

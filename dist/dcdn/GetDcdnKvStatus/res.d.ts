export interface GetDcdnKvStatusResponse {
    /**
     * 配置的Key是否已全网生效。
     * - **true**：已全网生效。
     * - **false**：未全网生效。
     * @example `true`
     */
    Complete: boolean;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 配置的Key的超时时间（绝对时间戳，如2023-09-11T15:39:44+08:00），当永久存储时不返回。
     * @example `2023-09-11T15:39:44+08:00`
     */
    Expire: string;
}

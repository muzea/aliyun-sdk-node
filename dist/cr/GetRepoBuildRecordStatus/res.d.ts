export interface GetRepoBuildRecordStatusResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `79174CBA-8556-443A-8976-22C922D7BE37`
     */
    RequestId: string;
    /**
     * 构建状态
     * @example `success`
     */
    BuildStatus: string;
}

export interface GetSlsOpenStatusResponse {
    /**
     * 当前阿里云账号是否已开通日志服务。取值：
     * - **true**：表示已开通日志服务。
     * - **false**：表示未开通日志服务。
     * @example `true`
     */
    SlsOpenStatus: boolean;
    /**
     * 本次请求的ID。
     * @example `D01666F5-541B-4C78-98A6-D29E02DAAC7C`
     */
    RequestId: string;
}

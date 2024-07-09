export interface StartApmResponse {
    /**
     * 请求ID。
     * @example `526F30AB-4A43-55BA-910F-ACD275FD5F14`
     */
    RequestId: string;
    /**
     * 启动是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Result: boolean;
}

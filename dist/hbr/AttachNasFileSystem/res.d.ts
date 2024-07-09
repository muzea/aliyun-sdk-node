export interface AttachNasFileSystemResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求id。
     * @example `33AA3AAE-89E1-5D3A-A51D-0C0A80850F68`
     */
    RequestId: string;
    /**
     * 任务id。
     * @example `t-000h9x5t02vhyksf1x7k`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * - true表示成功。
     * - false表示失败。
     * @example `true`
     */
    Success: boolean;
}

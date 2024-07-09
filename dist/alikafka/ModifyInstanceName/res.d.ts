export interface ModifyInstanceNameResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求的ID。
     * @example `06084011-E093-46F3-A51F-4B19A8AD****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}

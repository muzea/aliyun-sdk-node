export interface UpdateInstanceNameResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 当执行报错时，返回此参数，提示错误信息。
     * @example `InstanceNotExist`
     */
    Message: string;
    /**
     * 返回信息。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `6DC68EC9-0E76-5435-B8C0-FF9492B4****`
     */
    RequestId: string;
    /**
     * 执行成功的返回信息。
     * @example `true`
     */
    Success: boolean;
}

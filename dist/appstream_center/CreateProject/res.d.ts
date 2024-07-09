export interface CreateProjectResponse {
    /**
     * 请求ID。
     * @example `50158E8B-992E-1286-B174-XXXXXXXXXXXX`
     */
    RequestId: string;
    /**
     * 项目id。
     * @example `p-xxxxxxxxxxx`
     */
    Data: string;
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `There is a missing parameter.`
     */
    Message: string;
    /**
     * 页码（首页传1）。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页展示数据条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 是否调用成功。true：调用成功。false：调用失败。
     * @example `true`
     */
    Success: string;
}

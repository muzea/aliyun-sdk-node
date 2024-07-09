export interface AddDatabaseListResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果。
     * @example `SUCCESS`
     */
    Data: string;
    /**
     * 报错信息。
     * @example `ERROR`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `514F794F-7E30-5DAA-97C0-0B0D75DA0259`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}

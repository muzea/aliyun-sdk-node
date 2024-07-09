export interface QueryRobotv2AllListResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 机器人话术信息。JSON格式。
     * - **id**：机器人话术ID。
     * - **robotName**：机器人话术名称。
     * - **robotType**：机器人话术类型。
     * @example `{"id":100000007****,"robotName":"机器人","robotType":"CUSTOM"}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
}

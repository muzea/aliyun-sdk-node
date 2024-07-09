export interface CreateCapacityReservationRequest {
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    "ProjectId": string;
    /**
     * 应用ID。
     * @example `13027****`
     */
    "AppId": string;
    /**
     * 应用版本ID。
     * @example `35067****`
     */
    "AppVersion"?: string;
    /**
     * 区域ID。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    "DistrictId": string;
    /**
     * 预期资源开始服务时间。
     * 时间格式：`yyyy-mm-dd HH:MM:SS`。
     * 时区是北京时间（东八区）。
     * > 本参数仅适用于白名单用户。
     * @example `2022-02-02 22:22:22`
     */
    "ExpectResourceReadyTime"?: string;
    /**
     * 预期可支持的会话数量。
     * @example `100`
     */
    "ExpectSessionCapacity": number;
    /**
     * 自定义Token，保证请求幂等性。
     * > 支持ASCII字符，且不能超过64个字符。
     * @example `2YEF0****`
     */
    "ClientToken"?: string;
}

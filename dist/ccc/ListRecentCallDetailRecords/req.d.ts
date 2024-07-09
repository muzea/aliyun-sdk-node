export interface ListRecentCallDetailRecordsRequest {
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 开始时间戳，默认是当天开始时间，最早为当前时间往前180天。
     * @example `1604638129000`
     */
    "StartTime"?: number;
    /**
     * 截止时间戳，默认是当前时间。
     * @example `1604639129000`
     */
    "EndTime"?: number;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 模糊搜索条件，格式为JSON对象，对象包含三个属性，可以随机组合，三个属性分别为phoneNumber（按主叫或被叫号码模糊搜索）、callingNumber（按主叫号码模糊搜索）和calledNumber（按被叫号码模糊搜索）。
     * @example `{"phoneNumber":"1312121****","callingNumber":"1312121****","calledNumber":"1312121****"}`
     */
    "Criteria"?: string;
}

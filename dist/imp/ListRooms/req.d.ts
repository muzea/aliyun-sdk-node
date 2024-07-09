export interface ListRoomsRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 查询页码，从1开始，参数为空默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示个数，最大支持50，参数为空默认显示个数为10。
     * @example `10`
     */
    "PageSize"?: number;
}

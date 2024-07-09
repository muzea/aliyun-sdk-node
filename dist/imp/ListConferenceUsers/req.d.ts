export interface ListConferenceUsersRequest {
    /**
     * 连麦唯一标识。由字母、数字和短横线（-）组成，长度为36个字符。
     * @example `fb0f-****-4cb1`
     */
    "ConferenceId": string;
    /**
     * 查询页码，从第1页开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示个数，最大支持100。
     * @example `10`
     */
    "PageSize": number;
}

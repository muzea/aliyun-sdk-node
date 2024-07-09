export interface ListAiccsRobotResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 话术列表。
     */
    Data: {
        /**
         * 机器人类型。
         * @example `CUSTOM`
         */
        RobotType: string;
        /**
         * 所属业务。
         * @example `新房销售`
         */
        AtSence: string;
        /**
         * 所属行业。
         * @example `房地产`
         */
        AtProfession: string;
        /**
         * 机器人名称。
         * @example `机器人`
         */
        RobotName: string;
        /**
         * 机器人ID。
         * @example `12****`
         */
        Id: number;
    }[];
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}

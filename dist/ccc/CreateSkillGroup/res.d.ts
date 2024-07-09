export interface CreateSkillGroupResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 技能组的描述。
         * @example `云呼叫中心的测试技能组。`
         */
        Description: string;
        /**
         * 技能组名称。
         * @example `skillgroup`
         */
        Name: string;
        /**
         * 技能组ID，格式为：技能组名称@实例ID。
         * @example `skillgroup@ccc-test`
         */
        SkillGroupId: string;
        /**
         * 媒体类型，默认是语音(AUDIO), 其他可选参数包括CHAT和VIDEO。
         * @example `VIDEO`
         */
        MediaType: string;
    };
}

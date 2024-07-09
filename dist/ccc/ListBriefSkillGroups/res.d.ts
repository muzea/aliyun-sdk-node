export interface ListBriefSkillGroupsResponse {
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
     * @example `3969FC68-CEC2-4398-B76A-60D2F7EDEBAF`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 技能组概要信息列表。
         */
        List: {
            /**
             * 技能组展示名。
             * @example `测试技能组`
             */
            DisplayName: string;
            /**
             * 技能组的描述。
             * @example `云呼叫中心的测试技能组。`
             */
            Description: string;
            /**
             * 技能组关联的号码数量。
             * @example `1`
             */
            PhoneNumberCount: number;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupId: string;
            /**
             * 技能组名称。
             * @example `skillgroup`
             */
            SkillGroupName: string;
            /**
             * 技能组关联的坐席数量。
             * @example `10`
             */
            UserCount: number;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 媒体类型，默认是语音(AUDIO), 其他可选参数包括CHAT和VIDEO。
             * @example `VIDEO`
             */
            MediaType: string;
        }[];
    };
}

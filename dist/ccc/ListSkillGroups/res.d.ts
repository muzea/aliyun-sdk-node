export interface ListSkillGroupsResponse {
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
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
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
         * @example `1`
         */
        TotalCount: number;
        /**
         * 技能组列表。
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
             * @example `2`
             */
            UserCount: number;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 媒体类型，默认是语音(AUDIO), 其他可选参数包括CHAT和VIDEO。
             * @example `CHAT`
             */
            MediaType: string;
        }[];
    };
}

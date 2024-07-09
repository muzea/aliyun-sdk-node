export interface QuerySkillGroupsResponse {
    /**
     * 每页的数量。
     * @example `20`
     */
    OnePageSize: number;
    /**
     * 总页数。
     * @example `4`
     */
    TotalPage: number;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 当前页。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 总共记录数。
     * @example `76`
     */
    TotalResults: number;
    /**
     * 数据。
     */
    Data: {
        /**
         * 技能组对外显示名称。
         * @example `自动化技能组`
         */
        DisplayName: string;
        /**
         * 技能组描述。
         * @example `自动化技能组`
         */
        Description: string;
        /**
         * 技能组渠道类型。
         * @example `2`
         */
        ChannelType: number;
        /**
         * 技能组名称。
         * @example `自动化技能组`
         */
        SkillGroupName: string;
        /**
         * 技能组ID。
         * @example `123456`
         */
        SkillGroupId: number;
    }[];
}

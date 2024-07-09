export interface ListSkillLevelsOfUserResponse {
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
         * 技能组等级列表。
         */
        List: {
            /**
             * 技能等级，取值范围1-10，数值越小，业务能力越强，单位时间内能处理更多的通话。
             * @example `5`
             */
            SkillLevel: string;
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
            MediaType: string;
        }[];
    };
}

export interface GetDepGroupTreeDataResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 部门信息。
     */
    Data: {
        /**
         * 部门名称。
         * @example `部门A`
         */
        DepGroupName: string;
        /**
         * 部门ID。
         * @example `10****`
         */
        DepGroupId: string;
        /**
         * 技能组数据。
         */
        GroupDTOS: {
            /**
             * 技能组ID。
             * @example `55****`
             */
            SkillGroupId: number;
            /**
             * 技能组名称。
             * @example `自动化技能组`
             */
            Name: string;
        }[];
    }[];
}

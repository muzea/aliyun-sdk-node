export interface ListPhoneNumbersResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页序号，范围1-100
         * @example `20`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 号码列表。
         */
        List: {
            /**
             * 号码是否可用。
             * @example `true`
             */
            Active: boolean;
            /**
             * 号码创建时间，即关联到实例的时间，格式为Unix时间戳，单位毫秒。
             * @example `1617958538000`
             */
            CreateTime: string;
            /**
             * 坐席ID，如果此参数不为空，说明该号码是座席专属号码。
             * @example `agent@ccc-test`
             */
            UserId: string;
            /**
             * 号码业务标签，主要用于给号码打标，做一些扩展业务，普通客户无需关心。
             * @example `M1`
             */
            Tags: string;
            /**
             * 号码归属地市。
             * @example `乐山`
             */
            City: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 号码用途。
             * @example `Bidirection`
             */
            Usage: string;
            /**
             * 号码关联的IVR联系流名称。
             * @example `默认联系流`
             */
            ContactFlowName: string;
            /**
             * 号码供应商名称。
             * @example `alicom`
             */
            Provider: string;
            /**
             * 号码。
             * @example `08330011****`
             */
            Number: string;
            /**
             * 号码关联的IVR联系流ID。
             * @example `a3fb6c62-9b49-4942-ae5b-cf2abd4123ek`
             */
            ContactFlowId: string;
            /**
             * 号码归属地省。
             * @example `四川`
             */
            Province: string;
            /**
             * 号码关联的技能组列表。
             */
            SkillGroups: {
                /**
                 * 技能组展示名。
                 * @example `测试技能组`
                 */
                DisplayName: string;
                /**
                 * 实例ID。
                 * @example `ccc-test`
                 */
                InstanceId: string;
                /**
                 * 技能组名称。
                 * @example `skillgroup`
                 */
                Name: string;
                /**
                 * 技能组ID。
                 * @example `skillgroup@ccc-test`
                 */
                SkillGroupId: string;
            }[];
        }[];
    };
}

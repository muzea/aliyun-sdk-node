export interface GetInstanceResponse {
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
     * @example `2778FA12-EDD6-42AA-9B15-AF855072E5E5`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例状态。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 云呼叫中心实例的网址，用于访问云呼叫中心实例的主页面，由云呼叫中心的特定网址加上实例ID组成。
         * @example `https://ccc-v2.aliyun.com/#/workbench/ccc-test`
         */
        ConsoleUrl: string;
        /**
         * 实例的描述。
         * @example `云呼叫中心的测试实例。`
         */
        Description: string;
        /**
         * 实例所属的阿里云账户ID。
         * @example `157123456789****`
         */
        AliyunUid: string;
        /**
         * 实例名称。
         * @example `测试实例`
         */
        Name: string;
        /**
         * 实例的域名，全局唯一。
         * @example `ccc-test`
         */
        DomainName: string;
        /**
         * 实例ID。
         * @example `ccc-test
        `
         */
        Id: string;
        /**
         * 管理员列表。
         */
        AdminList: {
            /**
             * 管理员的名称。
             * @example `管理员`
             */
            DisplayName: string;
            /**
             * 坐席分机号。
             * @example `8032****`
             */
            Extension: string;
            /**
             * 坐席登录名。
             * @example `agent`
             */
            LoginName: string;
            /**
             * 邮箱。
             * @example `username@example.com`
             */
            Email: string;
            /**
             * 工作模式。
             * @example `ON_SITE`
             */
            WorkMode: string;
            /**
             * 坐席的个人电话号码。
             * @example `1382114****`
             */
            Mobile: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            UserId: string;
            /**
             * 角色名称。
             * @example `Admin`
             */
            RoleName: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 角色ID，格式为：角色@实例ID。
             * @example `Admin@ccc-test`
             */
            RoleId: string;
        }[];
        /**
         * 号码列表。
         */
        NumberList: {
            /**
             * 是否可用。
             * @example `true`
             */
            Active: boolean;
            /**
             * 坐席ID。如果此参数不为空，说明该号码是座席个人外呼号码。
             * @example `agent@ccc-test`
             */
            UserId: string;
            /**
             * 号码。
             * @example `0830011****`
             */
            Number: string;
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
             * 该电话号码所关联的联系流ID（IVR）。
             * @example `2ec7a58f-3243-4815-bb21-97b480b95f5e`
             */
            ContactFlowId: string;
            /**
             * 号码归属地省。
             * @example `四川`
             */
            Province: string;
            /**
             * 号码所关联的技能组列表。
             */
            SkillGroups: {
                /**
                 * 技能组展示名。
                 * @example `测试技能组`
                 */
                DisplayName: string;
                /**
                 * 技能组描述。
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
                 * 技能组关联的坐席数量。
                 * @example `3`
                 */
                UserCount: number;
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
            }[];
        }[];
    };
}

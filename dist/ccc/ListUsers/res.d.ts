export interface ListUsersResponse {
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
         * @example `1`
         */
        TotalCount: number;
        /**
         * 坐席列表。
         */
        List: {
            /**
             * 坐席展示名。
             * @example `坐席小王`
             */
            DisplayName: string;
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
             * 坐席的工号。
             * @example `1001`
             */
            DisplayId: string;
            /**
             * 角色名称。
             * @example `Admin`
             */
            RoleName: string;
            /**
             * 角色ID，格式为：角色@实例ID。
             * @example `Admin@ccc-test`
             */
            RoleId: string;
            /**
             * 坐席映射的RAM账户是否为RAM主账号。
             * @example `已弃用，请使用Primary代替此参数。`
             */
            PrimaryAccount: boolean;
            /**
             * 坐席个人外呼号码列表。
             */
            PersonalOutboundNumberList: {
                /**
                 * 号码。
                 * @example `0830011****`
                 */
                Number: string;
                /**
                 * 是否可用。
                 * @example `true`
                 */
                Active: boolean;
                /**
                 * 号码归属地市。
                 * @example `乐山`
                 */
                City: string;
                /**
                 * 号码用途。
                 * @example `Bidirection`
                 */
                Usage: string;
                /**
                 * 号码归属地省。
                 * @example `四川`
                 */
                Province: string;
            }[];
            /**
             * 坐席关联的技能组等级列表。
             */
            SkillLevelList: {
                /**
                 * 技能等级。
                 * @example `5`
                 */
                SkillLevel: number;
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
            }[];
            /**
             * 坐席关联的RAM账号的UID。
             * @example `21234502254620****`
             */
            RamId: number;
            /**
             * 座机分机号。
             * @example `8031****`
             */
            Extension: string;
            /**
             * 设备ID，浏览器WebRTC软电话或实体话机设备的标识ID，同一时间只允许一种设备注册。
             * @example `ACC-YUNBS-1.0.10-****`
             */
            DeviceId: string;
            /**
             * SIP话机分机号，如果座席注册了SIP话机，则此参数为SIP话机设备的分机号。
             * @example `8033****`
             */
            DeviceExt: string;
            /**
             * SIP话机设备的状态，如果未注册SIP话机，则状态为UNREGISTERED（未注册），如过SIP话机注册过但是不在线，则状态为OFFLINE（离线），如果SIP话机注册过并且在线则为ONLINE（在线）。
             * @example `OFFLINE`
             */
            DeviceState: string;
            /**
             * 坐席映射的RAM账户是否为RAM主账号。
             */
            Primary: boolean;
        }[];
    };
    /**
     * 响应参数。
     */
    Params: string[];
}

export interface ListInstancesResponse {
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
     * @example `26A34338-5CD9-4C95-A7A6-5BDCE76C6B94`
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
         * 列表。
         */
        List: {
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
             * 实例的创建时间。
             * @example `1624679747000`
             */
            CreateTime: number;
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
             * @example `ccc-test`
             */
            Id: string;
            /**
             * 管理员列表。
             */
            AdminList: {
                /**
                 * 管理员的姓名。
                 * @example `测试坐席`
                 */
                DisplayName: string;
                /**
                 * 坐席分机号。
                 * @example `8032****
                `
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
                 * 号码。
                 * @example `0830011****`
                 */
                Number: string;
            }[];
        }[];
    };
}

export interface GetUserResponse {
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
         * 坐席展示名。
         * @example `坐席小王`
         */
        DisplayName: string;
        /**
         * 坐席的工号。
         * @example `1001`
         */
        DisplayId: string;
        /**
         * 坐席分机号。
         * @example `8003****`
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
         * @example `1391234****`
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
         * SIP话机设备的状态，如果未注册SIP话机，则状态为UNREGISTERED（未注册），如果SIP话机注册过但是不在线，则状态为OFFLINE（离线），如果SIP话机注册过并且在线则为ONLINE（在线）。
         * @example `OFFLINE`
         */
        DeviceState: string;
        /**
         * 坐席昵称
         * @example `阿云`
         */
        Nickname: string;
        /**
         * 坐席头像地址。
         * @example `http://xxx.com/xxx.jpg`
         */
        AvatarUrl: string;
    };
    /**
     * 扩展参数
     */
    Params: string[];
}

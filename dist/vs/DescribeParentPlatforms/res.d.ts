export interface DescribeParentPlatformsResponse {
    /**
     * 第几个分页。
     * @example `1`
     */
    PageNum: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 上级平台总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页总数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 上级平台列表。
     */
    Platforms: {
        /**
         * 上级平台状态。取值：
         * - on（在线）
         * - off（离线）
         * - failed（失败）
         * @example `on`
         */
        Status: string;
        /**
         * 本地SIP服务端口。
         * @example `5160`
         */
        ClientPort: number;
        /**
         * 上级平台协议。取值：
         * - gb28181（国标）
         * @example `gb28181`
         */
        Protocol: string;
        /**
         * 本地国标ID。
         * @example `31010*****317542006`
         */
        ClientGbId: string;
        /**
         * 上级平台SIP服务IP。
         * @example `10.10.10.10`
         */
        Ip: string;
        /**
         * 上级平台SIP服务端口。
         * @example `5060`
         */
        Port: number;
        /**
         * 本地用户名。
         * @example `user01`
         */
        ClientUsername: string;
        /**
         * 本地密码。
         * @example `admin123`
         */
        ClientPassword: string;
        /**
         * 是否自动启用。取值：
         * - false（默认）
         * - true
         * @example `false`
         */
        AutoStart: boolean;
        /**
         * 本地是否开启鉴权。取值：
         * - true（默认）
         * - false
         * @example `true`
         */
        ClientAuth: boolean;
        /**
         * 上级平台国标ID。
         * @example `31000*****2170123451`
         */
        GbId: string;
        /**
         * 上级平台描述。
         * @example `国标级联平台描述`
         */
        Description: string;
        /**
         * 本地SIP服务IP。
         * @example `192.168.0.1`
         */
        ClientIp: string;
        /**
         * 上级平台名称。
         * @example `国标级联平台测试`
         */
        Name: string;
        /**
         * 上级平台创建时间。
         * @example `2018-12-10T21:00:00Z`
         */
        CreatedTime: string;
        /**
         * 上级平台ID。
         * @example `359*****374-cn-qingdao`
         */
        Id: string;
    }[];
}

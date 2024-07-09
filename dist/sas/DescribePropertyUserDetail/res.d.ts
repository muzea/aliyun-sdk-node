export interface DescribePropertyUserDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `33A71BE3-2CC2-14CB-B460-33A1DD82953A`
     */
    RequestId: string;
    /**
     * 查询结果页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的账户资产的指纹信息的数量。默认值为**10**，表示每页显示10条账户资产的指纹信息。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的账户资产的指纹信息的总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 当前页面显示的账户资产的指纹信息的数量。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 查询到的账户资产的指纹信息的详情列表。
     */
    Propertys: {
        /**
         * 此参数已废弃，无须关注。
         * @example `**`
         */
        Status: string;
        /**
         * 账户上次登录的来源IP。
         * @example `192.168.XX.XX`
         */
        LastLoginIp: string;
        /**
         * 服务器的公网IP地址。
         * @example `192.168.XX.XX`
         */
        InternetIp: string;
        /**
         * 账户上次登录的时间。
         * @example `2022-04-04 18:07:06`
         */
        LastLoginTime: string;
        /**
         * 账户是否拥有ROOT权限。取值包括：
         * - **0**：否
         * - **1**：是
         * @example `0`
         */
        IsRoot: string;
        /**
         * 服务器的IP列表。
         * @example `192.168.XX.XX`
         */
        Ip: string;
        /**
         * 账户的名称。
         * @example `bin`
         */
        User: string;
        /**
         * 服务器的实例ID。
         * @example `i-hp35tftuh52wbp1g****`
         */
        InstanceId: string;
        /**
         * 服务器的私网IP地址。
         * @example `100.104.XX.XX`
         */
        IntranetIp: string;
        /**
         * 账户密码的到期时间。
         * @example `never`
         */
        PasswordExpirationDate: string;
        /**
         * 服务器的UUID。
         * @example `162eb349-c2d9-4f8b-805c-75b43d4c****`
         */
        Uuid: string;
        /**
         * 账户上次登录的时间戳。单位为毫秒。
         * @example `1649066826000`
         */
        LastLoginTimestamp: number;
        /**
         * 服务器实例的名称。
         * @example `hc-host-****`
         */
        InstanceName: string;
        /**
         * 账号的到期时间。
         * @example `never`
         */
        AccountsExpirationDate: string;
        /**
         * 资产指纹的最新扫描的时间戳。单位为毫秒。
         * @example `1649149566000`
         */
        CreateTimestamp: number;
        /**
         * 查询到账户的用户组的详情信息。
         */
        GroupNames: string[];
        /**
         * 账户上次登录的时间戳。单位为毫秒。
         * @example `1649066826000`
         */
        LastLoginTimeDt: number;
        /**
         * 密码是否过期。取值：
         * - **0**：已过期
         * - **1**：未过期
         * @example `1`
         */
        IsPasswdExpired: number;
        /**
         * 密码是否锁定。取值：
         * - **0**：已锁定
         * - **1**：未锁定
         * @example `1`
         */
        IsPasswdLocked: number;
        /**
         * 用户是否过期。取值：
         * - **0**：已过期
         * - **1**：未过期
         * @example `1`
         */
        IsUserExpired: number;
        /**
         * 是否为交互登录账号。取值：
         * - **0**：否
         * - **1**：是
         * @example `0`
         */
        IsCouldLogin: number;
        /**
         * 是否为sudo账户。取值：
         * - **0**：否
         * - **1**：是
         * @example `0`
         */
        IsSudoer: number;
    }[];
}

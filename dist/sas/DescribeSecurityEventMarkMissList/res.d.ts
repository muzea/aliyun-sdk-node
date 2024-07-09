export interface DescribeSecurityEventMarkMissListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的白名单规则数量。默认值为**20**，表示每页显示20条白名单规则。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到加白规则总条数。
         * @example `200`
         */
        TotalCount: number;
        /**
         * 当前页加白规则条数。
         * @example `9`
         */
        Count: number;
    };
    /**
     * 加白规则列表。
     */
    List: {
        /**
         * 告警事件名称（子类型）。
         * @example `Login with unusual location`
         */
        EventName: string;
        /**
         * 服务器的公网IP。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 告警事件名称（父类型）。
         * @example `login_common_location`
         */
        EventNameOriginal: string;
        /**
         * 用户ID。
         * @example `176618589410****`
         */
        AliUid: number;
        /**
         * 加白值。
         * @example `root`
         */
        FieldValue: string;
        /**
         * 服务器实例ID。
         * @example `rm-bp1e8t4q15sr3****`
         */
        InstanceId: string;
        /**
         * 加白字段。
         * @example `type`
         */
        Field: string;
        /**
         * 服务器的私网IP。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 加白字段别名。
         * @example `Logon Time`
         */
        FiledAliasName: string;
        /**
         * 资产实例的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 操作符。取值：
         * - **contains**：包含
         * - **notContains**：不包含
         * - **strEqual**：等于
         * - **strNotEqual**：不等于
         * - **regex**：正则
         * @example `contains`
         */
        Operate: string;
        /**
         * 告警事件类型（父类型）。
         * @example `login_common_location`
         */
        EventTypeOriginal: string;
        /**
         * 告警事件类型（子类型）。
         * @example `Unusual Logon`
         */
        EventType: string;
        /**
         * 资产的实例名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 告警加白规则编号。
         * @example `104037`
         */
        Id: number;
    }[];
}

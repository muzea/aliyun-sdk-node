export interface DescribeControlPolicyRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略控制的流量方向。取值：
     * - **in**：外对内方向的流量访问控制。
     * - **out**：内对外方向的流量访问控制。
     * @example `in`
     */
    "Direction": string;
    /**
     * 分页查询时，显示的当前页的页码。
     * 默认值为1。
     * @example `1`
     */
    "CurrentPage": string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 访问控制策略中的访问源地址。支持使用模糊查询的方式进行查询。SourceType（源类型）不同，访问源地址的取值也不同。
     * - 当SourceType为`net`时，访问源为CIDR格式的IP地址段。例如：192.0.XX.XX/24。
     * - 当SourceType为`group`时，访问源为源地址簿名称。例如：db_group为空（表示查询所有访问控制源）。
     * - 当SourceType为`location`时，访问源为源区域。例如：北京或beijing（支持使用中文或英文进行查询）。
     * > 不设置该参数表示查询所有类型的访问源。
     * @example `192.0.XX.XX`
     */
    "Source"?: string;
    /**
     * 访问控制策略中的目的地址。支持模糊查询。DestinationType（目的类型）不同，目的地址的取值也不同。
     * - 当DestinationType为`net`时，目的地址为CIDR格式的IP地址段。例如：10.0.3.0/24。
     * - 当DestinationType为`domain`时，目的地址为域名。例如：aliyun。
     * - 当DestinationType为`group`时，目的地址为地址簿的名称。例如：db_group。
     * - 当DestinationType为`location`时，目的地址为区域名称（具体区域位置编码请参见AddControlPolicy。例如：["BJ11", "ZB"]。
     * > 不设置该参数表示查询所有类型的目的地址。
     * @example `192.0.XX.XX`
     */
    "Destination"?: string;
    /**
     * 访问控制策略的描述信息。支持模糊查询。
     * > 不设置该参数表示查询所有策略的描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 访问控制策略中访问流量的协议类型。取值：
     * - **TCP**
     * - **UDP**
     * - **ICMP**
     * - **ANY**（表示所有协议类型）
     * > 不设置该参数表示查询所有协议类型。
     * @example `TCP`
     */
    "Proto"?: string;
    /**
     * 访问控制策略中设置的流量通过云防火墙的方式（动作）。取值：
     * - **accept**：放行
     * - **drop**：拒绝
     * - **log**：观察
     * > 不设置该参数表示查询所有的动作类型。
     * @example `accept`
     */
    "AclAction"?: string;
    /**
     * 访问控制策略的启用状态。取值：
     * - **true**：启用访问控制策略
     * - **false**：不启用访问控制策略
     * @example `true`
     */
    "Release"?: string;
    /**
     * 访问控制策略的唯一标识ID。
     * @example `00281255-d220-4db1-8f4f-c4df221a****`
     */
    "AclUuid"?: string;
    /**
     * 支持的IP地址版本。取值：
     * - **4**（默认）：代表IPv4地址
     * - **6**：代表IPv6地址
     * @example `6`
     */
    "IpVersion"?: string;
    /**
     * 访问控制策略的策略有效期的重复类型。取值：
     * - **Permanent**（默认）：总是
     * - **None**：指定单次时间
     * - **Daily**：每天
     * - **Weekly**：每周
     * - **Monthly**：每月
     * @example `Permanent`
     */
    "RepeatType"?: string;
}

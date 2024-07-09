export interface GetSubnetResponse {
    /**
     * 业务码。
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 创建时间。
         * @example `1648085472000`
         */
        CreateTime: string;
        /**
         * 修改时间。
         * @example `1678273219000`
         */
        GmtModified: string;
        /**
         * 租户 ID。
         * @example `1655449505171`
         */
        TenantId: string;
        /**
         * 地域ID。
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 可用区ID。
         * @example `cn-wulanchabu-b`
         */
        ZoneId: string;
        /**
         * 灵骏子网实例ID。
         * @example `subnet-aj93mko8`
         */
        SubnetId: string;
        /**
         * 灵骏子网实例名称。
         * @example `subnet-1`
         */
        SubnetName: string;
        /**
         * Subnet的网段。
         * - 子网的网段必须是其所属灵骏网段的真子集且掩码需在16位到29位之间，可提供 8 ~ 65536 个地址。 例如，灵骏网段的网段为192.168.0.0/16，该灵骏网段下的子网的网段为 192.168.0.0/17 ~ 192.168.0.0/29。
         * - 每个子网网段的第一个和最后三个IP地址为系统保留地址。 例如，子网的网段为192.168.1.0/24，192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这四个IP地址为系统保留地址。
         * @example `10.10.10.0/24`
         */
        Cidr: string;
        /**
         * 所属灵骏网段实例ID。
         * @example `vpd-ze3na0wf`
         */
        VpdId: string;
        /**
         * 灵骏子网使用类型；非必选；可选值：
         * - **通用类型返回空**
         * - **OOB**：OOB类型
         * - **LB**： LB类型
         * @example `OOB`
         */
        Type: string;
        /**
         * 实例状态。
         * @example `Available`
         */
        Status: string;
        /**
         * 错误信息。（当实例状态为异常时，提示异常原因）
         * @example `成功`
         */
        Message: string;
        /**
         * NC数量。
         * @example `16`
         */
        NcCount: number;
        /**
         * 灵骏网卡数量
         * @example `4`
         */
        NetworkInterfaceCount: number;
        /**
         * 负载均衡数量。
         * @example `0`
         */
        LbCount: number;
        /**
         * 所属灵骏网段信息。
         */
        VpdBaseInfo: {
            /**
             * 灵骏网段实例ID。
             * @example `vpd-iv2zm1qf`
             */
            VpdId: string;
            /**
             * 灵骏网段实例名称。
             * @example `vpd-1`
             */
            VpdName: string;
            /**
             * VPD的网段。
             * - 建议您使用RFC私网地址作为灵骏网段的网段如10.0.0.0/8，172.16.0.0/12，192.168.0.0/16，多灵骏网段互通场景或灵骏网段和VPC互通场景需确保地址规划不能冲突。
             * - 您也可以使用除 100.64.0.0/10、224.0.0.0/4、127.0.0.0/8 或 169.254.0.0/16 及其子网外的自定义地址段作为VPD的主IPv4网段。
             * @example `10.0.0.0/8`
             */
            Cidr: string;
            /**
             * 创建时间。
             * @example `1678273219000`
             */
            CreateTime: string;
        };
        /**
         * 资源组ID。
         * @example `rg-aek2l4sq6l7unhi`
         */
        ResourceGroupId: string;
        /**
         * 标签信息。
         * 一次最多支持输入20个标签信息。
         */
        Tags: {
            /**
             * 资源的标签键。
             * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
             * 一次最多支持输入20个标签的标签键。
             * @example `tag-subnet`
             */
            TagKey: string;
            /**
             * 资源的标签值。
             * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
             * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
             * @example `subnet-group-1`
             */
            TagValue: string;
        }[];
        /**
         * 辅助私网IP总数。
         * @example `20`
         */
        PrivateIpCount: number;
        /**
         * 可用IP地址数。
         * @example `1024`
         */
        AvailableIps: number;
    };
}

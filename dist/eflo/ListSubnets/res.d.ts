export interface ListSubnetsResponse {
    /**
     * 响应码
     * @example `0`
     */
    Code: number;
    /**
     * 响应信息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `7F9082CC-3D94-560F-A575-8E8EF6CE2CB8`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总条数
         * @example `10`
         */
        Total: number;
        /**
         * 灵骏子网信息列表
         */
        Data: {
            /**
             * 创建时间
             * @example `1678273219000`
             */
            CreateTime: string;
            /**
             * 修改时间
             * @example `1678273219000`
             */
            GmtModified: string;
            /**
             * 租户ID
             * @example `1655449505171`
             */
            TenantId: string;
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 可用区ID
             * @example `cn-wulanchabu-b`
             */
            ZoneId: string;
            /**
             * 灵骏子网使用类型；非必选；可选值：
             * - **通用类型不填**
             * - **OOB**：OOB类型
             * - **LB**： LB类型
             * @example `OOB`
             */
            Type: string;
            /**
             * 灵骏子网实例ID
             * @example `subnet-c6wci55i`
             */
            SubnetId: string;
            /**
             * 灵骏子网实例名称
             * @example `yzp-rg-test3`
             */
            SubnetName: string;
            /**
             * Subnet的网段。
             * - 子网的网段必须是其所属灵骏网段的真子集且掩码需在16位到29位之间，可提供 8 ~ 65536 个地址。 例如，灵骏网段的网段为192.168.0.0/16，该灵骏网段下的子网的网段为 192.168.0.0/17 ~ 192.168.0.0/29。
             * - 每个子网网段的第一个和最后三个IP地址为系统保留地址。 例如，子网的网段为192.168.1.0/24，192.168.1.0、192.168.1.253、192.168.1.254和192.168.1.255这四个IP地址为系统保留地址。
             * @example `172.18.0.0/24`
             */
            Cidr: string;
            /**
             * 所属灵骏网段实例ID
             * @example `vpd-ze3na0wf`
             */
            VpdId: string;
            /**
             * 实例状态。可能值：
             * - **Available**：正常
             * - **Not Available**：不可用
             * - **Executing**：执行中
             * - **Deleting**：删除中
             * @example `Available`
             */
            Status: string;
            /**
             * 错误信息。（当实例状态为异常时，提示异常原因）
             * @example `成功`
             */
            Message: string;
            /**
             * vpd基本信息
             */
            VpdBaseInfo: {
                /**
                 * 灵骏网段实例ID
                 * @example `vpd-d3isyds4`
                 */
                VpdId: string;
                /**
                 * 灵骏网段实例名称
                 * @example `yzp-rg-test3`
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
                 * 创建时间
                 * @example `1678273219000`
                 */
                CreateTime: string;
            };
            /**
             * NC数量
             * @example `16`
             */
            NcCount: number;
            /**
             * 灵骏网卡数量
             */
            NetworkInterfaceCount: number;
            /**
             * 资源组ID。
             * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
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
        }[];
    };
}

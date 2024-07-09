export interface DescribeNetworkInterfacesResponse {
    NetworkInterfaceSets: {
        /**
         * 弹性网卡信息组成的集合。
         */
        NetworkInterfaceSet: {
            /**
             * 创建时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddThh:mmZ。
             * @example `2022-02-22T03:53:25Z`
             */
            CreationTime: string;
            /**
             * ENS的节点ID。
             * @example `id-jakarta-1`
             */
            EnsRegionId: string;
            /**
             * 弹性网卡绑定的实例ID。
             * @example `i-5siavnr3`
             */
            InstanceId: string;
            /**
             * 弹性网卡的MAC地址。
             * @example `00:16:XXX:XXX:60:0a`
             */
            MacAddress: string;
            /**
             * 弹性网卡ID。
             * @example `eni-uf686a5`
             */
            NetworkInterfaceId: string;
            /**
             * 主私网IP。
             * @example `10.XXX.XXX.25`
             */
            PrimaryIp: string;
            /**
             * 主IP地址类型。取值：
             * - **Public**：公网地址
             * - **Private**：私网地址
             * @example `Private`
             */
            PrimaryIpType: string;
            /**
             * 网卡的状态，取值：
             * - Available：可用。
             * - Attaching：附加中。
             * - InUse：已附加。
             * - Detaching：分离中。
             * - Deleting：删除中。
             * @example `InUse`
             */
            Status: string;
            /**
             * 网络ID。
             * @example `n-5w0qd03adw****`
             */
            NetworkId: string;
            /**
             * 交换机ID。
             * @example `vsw-5rqswx1trlsj9`
             */
            VSwitchId: string;
            PrivateIpSets: {
                /**
                 * PrivateIpSet组成的集合。
                 */
                PrivateIpSet: {
                    /**
                     * 私网IP。
                     * @example `192.XXX.XXX.130`
                     */
                    PrivateIpAddress: string;
                    /**
                     * 是否是主私网IP地址。可能值：
                     * - true：主私网IP。
                     * - false：辅助私网IP。
                     * @example `true`
                     */
                    Primary: boolean;
                }[];
            };
            /**
             * 弹性网卡的名称。
             * @example `primaryTest`
             */
            NetworkInterfaceName: string;
            /**
             * 弹性网卡的描述。
             * @example `test-description`
             */
            Description: string;
            SecurityGroupIds: {
                /**
                 * 安全组ID。
                 */
                SecurityGroup: string[];
            };
            /**
             * 弹性网卡类型。取值范围：
             * - Primary：主网卡。
             * - Secondary：辅助网卡。
             * @example `Primary`
             */
            Type: string;
        }[];
    };
    /**
     * 实例状态列表的页码，起始值为：**1**，默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `50`
     */
    PageSize: number;
    /**
     * 列表数据总数。
     * @example `49`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `708AF9CE-FF92-5DF9-93F8-B7754AB1061A`
     */
    RequestId: string;
}

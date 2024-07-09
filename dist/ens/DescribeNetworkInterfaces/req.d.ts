export interface DescribeNetworkInterfacesRequest {
    /**
     * 弹性网卡ID。
     * @example `eni-58z57orgmt6d1****`
     */
    "NetworkInterfaceId"?: string;
    /**
     * 实例ID。
     * @example `i-5t7z99n32gplriv`
     */
    "InstanceId"?: string;
    /**
     * 网络ID。
     * @example `n-2zeuphj08tt7q3brd****`
     */
    "NetworkId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-12345`
     */
    "VSwitchId"?: string;
    /**
     * 实例所属地域ID。
     * @example `cn-tianjin-cmcc`
     */
    "EnsRegionId"?: string;
    /**
     * 辅助网卡对应的安全组ID。 如果您需要通过安全组ID查询辅助网卡的信息，请指定该参数。
     * @example `sg-5p1fg655nh68xyz9i***`
     */
    "SecurityGroupId"?: string;
    /**
     * 弹性网卡主IP地址。
     * @example `10.XXX.XXX.5`
     */
    "PrimaryIpAddress"?: string;
    /**
     * 弹性网卡类型。取值范围：
     * - Primary：主网卡。
     * - Secondary：辅助网卡。
     * 默认值：空，表示查询所有类型。
     * @example `Secondary`
     */
    "Type"?: string;
    /**
     * 弹性网卡的名称。
     * @example `test-01`
     */
    "NetworkInterfaceName"?: string;
    /**
     * 弹性网卡的状态。取值范围：
     * - Available：可用。
     * - Attaching：附加中。
     * - InUse：已附加。
     * - Detaching：分离中。
     * - Deleting：删除中。
     * 默认值：空，表示查询所有状态。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 实例状态列表的页码，起始值为1。                              默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时每页的行数，最大值为100，默认值为50。
     * @example `50`
     */
    "PageSize"?: string;
}

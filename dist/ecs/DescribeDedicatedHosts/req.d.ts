export interface DescribeDedicatedHostsRequest {
    /**
     * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。您可以调用[DescribeZones](~~25610~~)查看最新的阿里云可用区列表。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 专有宿主机ID列表。单次最多支持100个ID ，ID之间用半角逗号（,）隔开。
     * @example `["dh-bp165p6xk2tlw61e****", "dh-bp1f9vxmno7emy96****"]`
     */
    "DedicatedHostIds"?: string;
    /**
     * 专有宿主机的名称。
     * @example `MyDDHTestName`
     */
    "DedicatedHostName"?: string;
    /**
     * 专有宿主机的使用状态。取值范围：
     * - Available：运行中。专有宿主机的正常运行状态。
     * - UnderAssessment：物理机风险，即故障潜伏期，其物理机处于可用状态，但可能导致专有宿主机中的ECS实例出现问题。
     * - PermanentFailure：永久性故障，专有宿主机不可用。
     * - TempUnavailable：宿主机临时不可用。
     * - Redeploying：宿主机恢复中。
     * 默认值：Available。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](~~134240~~)接口获得最新的专有宿主机规格表。
     * @example `ddh.g5`
     */
    "DedicatedHostType"?: string;
    /**
     * 专有宿主机被锁定的原因。取值范围：
     * - financial：因欠费被锁定。
     * - security：因安全原因被锁定。
     * @example `financial`
     */
    "LockReason"?: string;
    /**
     * 响应信息的页码数。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 响应信息的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 专有宿主机所在资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-aek3b6jzp66****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 专有宿主机的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 专有宿主机的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 专有宿主机集群ID。
     * @example `dc-bp12wlf6am0vz9v2****`
     */
    "DedicatedHostClusterId"?: string;
    /**
     * 是否展示Socket维度容量信息。取值范围：
     * - true：展示。
     * - false：不展示。
     * @example `true`
     */
    "SocketDetails"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的 NextToken 参数值，初次调用接口时无需设置该参数。
     * @example `e71d8a535bd9cc11`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的最大条目数。一旦设置该参数，即表示使用MaxResults与NextToken组合参数的查询方式。
     * 最大值为 100。
     * 默认值为 10。
     * @example `10`
     */
    "MaxResults"?: number;
}

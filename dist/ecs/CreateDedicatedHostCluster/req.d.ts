export interface CreateDedicatedHostClusterRequest {
    /**
     * 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 专有宿主机集群的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 专有宿主机集群的标签值。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 专有宿主机集群要加入的资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 专有宿主机集群所在的可用区ID。您可以调用[DescribeZones](~~25610~~)查看阿里云地域下的可用区。
     * @example `cn-hangzhou-f`
     */
    "ZoneId": string;
    /**
     * 专有宿主机集群的名称。长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。不能包含`http://`或`https://`。
     * 默认值：空。
     * @example `myDDHCluster`
     */
    "DedicatedHostClusterName"?: string;
    /**
     * 专有宿主机集群的描述。长度为2~256个字符。不能以`http://`或`https://`开头。
     * 默认值：空。
     * @example `This-is-my-DDHCluster`
     */
    "Description"?: string;
}

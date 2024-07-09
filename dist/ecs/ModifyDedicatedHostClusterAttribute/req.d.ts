export interface ModifyDedicatedHostClusterAttributeRequest {
    /**
     * 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有宿主机集群ID。
     * @example `dc-bp12wlf6am0vz9v2****`
     */
    "DedicatedHostClusterId": string;
    /**
     * 专有宿主机集群的名称。长度为2~128个英文或中文字符，必须以大小写字母或中文开头，可包含数字、英文句号（.）、下划线（_）或连字符（-）。不能包含`http://`和`https://`。
     * @example `newClusterName`
     */
    "DedicatedHostClusterName"?: string;
    /**
     * 专有宿主机集群的描述。长度为2~256个字符。不能以`http://`和`https://`开头。
     * @example `newClusterDescription`
     */
    "Description"?: string;
}

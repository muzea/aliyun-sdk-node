export interface ListHostShareKeysRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * >Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 设置分页查询时，每页显示的主机共享密钥的数量。默认值为**20**，表示每页显示20条主机共享密钥。
     * @example `20`
     */
    "PageSize"?: string;
}

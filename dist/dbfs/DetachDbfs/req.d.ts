export interface DetachDbfsRequest {
    /**
     * 数据库文件系统ID。
     * @example `d-bp131n0q38u3a4zi*****`
     */
    "FsId": string;
    /**
     * 待卸载的ECS实例ID。
     * @example `i-bp67acfmxazb4ph***`
     */
    "ECSInstanceId": string;
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}

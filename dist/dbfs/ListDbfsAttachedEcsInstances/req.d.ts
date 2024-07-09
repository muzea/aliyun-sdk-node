export interface ListDbfsAttachedEcsInstancesRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-nUy1tb********BQ4X8Gpw`
     */
    "FsId": string;
}

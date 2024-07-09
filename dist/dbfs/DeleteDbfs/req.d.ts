export interface DeleteDbfsRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-9aqh1sqfqhc0w5********`
     */
    "FsId": string;
    /**
     * 是否强制删除数据库文件系统。
     * 默认值：false。
     * @example `false`
     */
    "Force"?: boolean;
}

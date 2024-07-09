export interface ResizeDbfsRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-GOrr********Yd0VLOyBpg`
     */
    "FsId": string;
    /**
     * 扩容后的数据库文件系统容量，必须大于扩容前的数据库文件系统容量。单位GiB。
     * @example `40`
     */
    "NewSizeG": number;
}

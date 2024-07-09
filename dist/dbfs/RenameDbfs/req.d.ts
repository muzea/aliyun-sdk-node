export interface RenameDbfsRequest {
    /**
     * 重命名后的数据库文件系统名称。
     * 取值范围：长度为2~128个字符，以英文大小写字母或中文开头，可包含数字、下划线和连字符（-）。
     * @example `NewDbfsName`
     */
    "FsName": string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-GOrr********Yd0VLOyBpg`
     */
    "FsId": string;
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-zhangjiakou`
     */
    "RegionId": string;
}

export interface CopyCdsFileRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-352282****`
     */
    "CdsId": string;
    /**
     * 文件的ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。
     * @example `640985a0ca2f71f489d2497682ca0bf468de****`
     */
    "FileId": string;
    /**
     * 登录网盘的用户ID。
     * @example `user01`
     */
    "EndUserId"?: string;
    /**
     * 复制目的地位置的父文件夹ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。当复制进根目录时，填`root`。
     * @example `root`
     */
    "ParentFolderId": string;
    /**
     * 当目标文件夹下存在同名文件时，是否自动重命名。
     * @example `true`
     */
    "AutoRename"?: boolean;
    /**
     * 复制目的地所在的个人盘ID（可以通过[DescribeCloudDriveUsers](~~2357237~~)接口的返回参数`UserId`获取）或者团队空间ID（可以通过[DescribeCloudDriveGroups](~~609896~~)接口的返回参数`GroupId`获取）。
     * > `FileReceiverId`和`FileReceiverType`都为空时，默认复制到文件当前所在的个人盘。
     * @example `user02`
     */
    "FileReceiverId"?: string;
    /**
     * 文件所属的空间类型。
     * @example `user`
     */
    "FileReceiverType"?: string;
    /**
     * 团队空间ID。
     * @example `cg-hs3i1w39o68ma****`
     */
    "GroupId"?: string;
}

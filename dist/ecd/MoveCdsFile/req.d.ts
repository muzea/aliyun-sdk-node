export interface MoveCdsFileRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-346063****`
     */
    "CdsId"?: string;
    /**
     * 文件的ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。
     * @example `63f3257b68b018170b194d87b875512d108f****`
     */
    "FileId"?: string;
    /**
     * 使用网盘的用户ID。
     * @example `user01`
     */
    "EndUserId"?: string;
    /**
     * 复制目的地位置的父文件夹ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。当移动至根目录时，填`root`。
     * @example `6409848a6da91d6240604e7ba7337d85ba8a1****`
     */
    "ParentFolderId"?: string;
    /**
     * 同名文件处理模式。
     * @example `ignore`
     */
    "ConflictPolicy"?: string;
    /**
     * 团队空间ID。
     * @example `cg-hvyou5jbob3b0****`
     */
    "GroupId"?: string;
}

export interface DeleteCdsFileRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 使用网盘的用户ID。
     * @example `user01`
     */
    "EndUserId"?: string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-066224****`
     */
    "CdsId": string;
    /**
     * 文件的ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。
     * @example `6333e553a133ce21e6f747cf948bb9ef95d7****`
     */
    "FileId": string;
    /**
     * 团队空间ID。
     * @example `cg-i1ruuudp92qpj****`
     */
    "GroupId"?: string;
}

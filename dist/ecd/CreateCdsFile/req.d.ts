export interface CreateCdsFileRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用户ID。
     * @example `test1`
     */
    "EndUserId"?: string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-82414*****`
     */
    "CdsId": string;
    /**
     * 文件名称。
     * @example `testFile.txt`
     */
    "FileName": string;
    /**
     * 文件类型。
     * @example `file`
     */
    "FileType": string;
    /**
     * 父文件ID。可通过[ListCdsFiles](~~2247622~~)接口的返回参数`FileId`获取。
     * @example `637c9163b453b1a384874264ba79f3f9eab9****`
     */
    "ParentFileId": string;
    /**
     * 文件大小。单位：Byte（字节）。
     * @example `1048576`
     */
    "FileLength": number;
    /**
     * 基于SHA-1算法的文件哈希值。
     * @example `7C4A8D09CA3762AF61E59520943DC26494F8****`
     */
    "FileHash"?: string;
    /**
     * 出现同名文件时的处理策略。
     * @example `ignore`
     */
    "ConflictPolicy"?: string;
    /**
     * 团队空间ID。
     * @example `cg-i1ruuudp92qpj****`
     */
    "GroupId"?: string;
}

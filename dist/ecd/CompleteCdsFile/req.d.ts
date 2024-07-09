export interface CompleteCdsFileRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用户名。`EndUserId`和`GroupId`必须至少传入一个。
     * @example `test0`
     */
    "EndUserId"?: string;
    /**
     * 企业网盘ID。
     * @example `cn-shanghai+cds-465878****`
     */
    "CdsId": string;
    /**
     * 文件上传任务的ID。可调用接口[CreateCdsFile](~~2247619~~)获取。
     * @example `6C48B55A1FAC4E1A9E0579059514****`
     */
    "UploadId": string;
    /**
     * 文件ID。
     * @example `635a316c94f40f35f5354da29b2aee88c9d1****`
     */
    "FileId": string;
    /**
     * 团队空间ID。`EndUserId`和`GroupId`必须至少传入一个。
     * @example `cg-i1ruuudp92qpj****`
     */
    "GroupId"?: string;
}

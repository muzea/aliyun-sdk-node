export interface ListCdsFilesRequest {
    /**
     * 分配了网盘的用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 团队空间ID。
     * @example `cg-i1ruuudp92qpj****`
     */
    "GroupId"?: string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-320357****`
     */
    "CdsId": string;
    /**
     * 父文件ID。可通过本接口的返回参数`FileId`获取。
     * @example `63636837e47e5a24a8a940218bef395c210e****`
     */
    "ParentFileId"?: string;
    /**
     * 需要查询的文件ID列表。
     */
    "FileIds"?: string[];
    /**
     * 文件列表排序方式。
     * @example `CreateTimeDesc`
     */
    "OrderType"?: string;
    /**
     * 文件状态。
     * @example `available`
     */
    "Status"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时，每页最大行数。默认值：100。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 登录的地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}

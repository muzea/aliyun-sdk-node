export interface DescribeVendorListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `340D7FC4-D575-1661-8ACD-CFA7BE57B795`
     */
    RequestId: string;
    /**
     * 服务商列表。
     */
    VendorNameList: string[];
}

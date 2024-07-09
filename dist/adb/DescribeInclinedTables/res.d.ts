export interface DescribeInclinedTablesResponse {
    /**
     * 总记录数。
     * @example `15`
     */
    TotalCount: string;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 表列表。
     */
    Items: {
        Table: {
            Type: string;
            Schema: string;
            Size: string;
            Name: string;
            IsIncline: string;
            TotalSize: number;
            SpaceRatio: number;
            RowCount: number;
        }[];
    };
    DetectionItems: {
        Name: string;
        Message: string;
        Status: string;
    }[];
}

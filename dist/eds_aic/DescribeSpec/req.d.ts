export interface DescribeSpecRequest {
    /**
     * 规格ID列表。
     */
    "SpecIds"?: string[];
    /**
     * 规格类型。
     * @example `ARM`
     */
    "SpecType"?: string;
    /**
     * 规格状态。
     * @example `Available`
     */
    "SpecStatus"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****`
     */
    "NextToken"?: string;
}

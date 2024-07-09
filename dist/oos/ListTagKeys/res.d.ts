export interface ListTagKeysResponse {
    /**
     * 翻到下一页的口令
     * @example `87y29h80h20h3f2`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `36210B73-8262-4D08-9D3A-7F96789733C8`
     */
    RequestId: string;
    /**
     * 单页返回最大数
     * @example `50`
     */
    MaxResults: number;
    /**
     * 标签键列表。
     */
    Keys: string[];
}

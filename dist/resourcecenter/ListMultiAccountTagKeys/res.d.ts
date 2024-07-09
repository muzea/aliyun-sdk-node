export interface ListMultiAccountTagKeysResponse {
    /**
     * 下一个查询开始的Token。
     * @example `AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****`
     */
    NextToken: string;
    /**
     * 标签列表。
     */
    TagKeys: string[];
    /**
     * 请求ID
     * @example `FA6086F9-6363-51A5-A507-88E3201EBCCB`
     */
    RequestId: string;
}

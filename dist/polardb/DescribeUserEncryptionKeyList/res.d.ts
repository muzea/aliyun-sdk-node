export interface DescribeUserEncryptionKeyListResponse {
    /**
     * 请求ID。
     * @example `A7E6A8FD-C50B-46B2-BA85-D8B8D3******`
     */
    RequestId: string;
    /**
     * 集群密钥列表。
     */
    KeyList: string[];
    /**
     * 集群ID。
     * @example `pc-************`
     */
    DBClusterId: string;
}

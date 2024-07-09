export interface CreateSnapshotRequest {
    /**
     * 指定磁盘对应的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定的磁盘ID。
     * @example `d-bp18kjxg9ebrhsgi****`
     */
    "DiskId": string;
    /**
     * 快照名称。长度为2~50个字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者短划线（-）。
     * @example `test-SnapshotName`
     */
    "SnapshotName": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 为快照指定的标签键。N 的取值范围：1~20。
         * 一旦传入该值，则不允许为空字符串。最多支持 64 个字符，不能以 aliyun 和 acs:开头，不能包含 http://或者 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为快照指定的标签值。N 的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持 64 个字符，不能包含 http://或者 https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 指定的资源组ID。
     * @example `rg-aek2bti7cf7****`
     */
    "ResourceGroupId"?: string;
}

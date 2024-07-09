export interface DescribeAppInstanceListRequest {
    /**
     * 应用ID，可通过调用ListApplication接口获取。更多信息，请参见[ListApplication](~~149390~~)。
     * @example `93fdd228-*****-ed2ae98de18d`
     */
    "AppId": string;
    /**
     * 是否返回Pod所在的节点信息。
     * - `true`：是
     * - `false`：否
     * @example `true`
     */
    "WithNodeInfo"?: boolean;
}

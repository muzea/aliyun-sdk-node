export interface DescribeGroupRequest {
    /**
     * 所属所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务群组名称。如何获取群组名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "GroupName": string;
}

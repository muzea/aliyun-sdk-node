export interface DescribeVbrHaResponse {
    /**
     * VBR的创建时间。
     * @example `2021-06-08T12:20:55`
     */
    CreationTime: string;
    /**
     * VBR倒换组的状态。
     * - **Creating**：创建中。
     * - **Active**：正常。
     * @example `Active`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * VBR倒换组的描述信息。
     * 长度为 2～256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
     * @example `desc`
     */
    Description: string;
    /**
     * VBR倒换组实例ID。
     * @example `vbrha-sa1sxheuxtd98****`
     */
    VbrHaId: string;
    /**
     * VBR倒换组中另一个VBR的实例ID。
     * @example `vbr-bp12mw1f8k3jgygk9****`
     */
    PeerVbrId: string;
    /**
     * VBR倒换组名称。
     * @example `VBRHa`
     */
    Name: string;
    /**
     * VBR实例ID。
     * @example `vbr-bp1jcg5cmxjbl9xgc****`
     */
    VbrId: string;
    /**
     * VBR所属的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}

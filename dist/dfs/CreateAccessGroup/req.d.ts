export interface CreateAccessGroupRequest {
    /**
     * 权限组名称。命名规则如下：
     * - 长度为6~64个字符。
     * - 全局唯一且不能为空串。
     * - 支持英文字母，可包含数字、下划线（_）和短划线（-）。
     * @example `my-online-cluster-policy`
     */
    "AccessGroupName": string;
    /**
     * 权限组类型。
     * 仅支持VPC（专有网络）。
     * @example `VPC`
     */
    "NetworkType": string;
    /**
     * 权限组描述。
     * 长度不超过32个字符。
     * @example `线上集群网段专用策略`
     */
    "Description"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
}

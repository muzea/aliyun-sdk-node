export interface ModifyAccessGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 权限组名称。命名规则如下：
     * - 长度为6~64个字符。
     * - 全局唯一且不能为空串。
     * - 支持英文字母，可包含数字、下划线（_）和短划线（-）。
     * @example `my-online-cluster-policy`
     */
    "AccessGroupName"?: string;
    /**
     * 权限组描述。
     * @example `线上集群网段专用策略`
     */
    "Description"?: string;
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId": string;
}

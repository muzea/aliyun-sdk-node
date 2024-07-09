export interface ChangeResourceGroupRequest {
    /**
     * 用户客户端IP
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**zh**。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 域名资源ID。
     * @example `S20227H17A561968`
     */
    "ResourceId": string;
    /**
     * 要移动到的资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups)查看资源组ID。
     * @example `rg-aek2tcx7os7bkmq`
     */
    "NewResourceGroupId": string;
    /**
     * 域名资源类型，固定为“Domain”，不需要填写
     * @example `Domain`
     */
    "ResourceType"?: string;
}

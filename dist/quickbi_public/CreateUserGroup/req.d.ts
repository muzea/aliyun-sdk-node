export interface CreateUserGroupRequest {
    /**
     * 用户组唯一ID。
     * - 无需传入，系统会自动生成；当用户主动传入UserGroupId时，以用户传入的ID作为用户组ID，用户需要自行保证该ID在组织内唯一。
     * - 格式校验：最大长度64，不能为-1，
     * @example `pop0001`
     */
    "UserGroupId"?: string;
    /**
     * 用户组名称。
     * - 格式校验：最大长度255
     * - 特殊格式校验：中英文数字 _ \ / | () ] \[
     * @example `杭州财报`
     */
    "UserGroupName": string;
    /**
     * 用户组描述。
     * - 格式校验：最大长度255
     * - 特殊格式校验：中英文数字 _ \ / | () ] \[
     * @example `用户分组描述`
     */
    "UserGroupDescription"?: string;
    /**
     * 父用户组ID。可以将新建的用户组添加到该分组下：
     * - 当输入父用户组ID时，新建的用户组会添加到该ID的用户组下。
     * - 当输入-1时，新建的用户组会添加到根目录下。
     * @example `3d2c23d4-2b41-4af8-a1f5-f6390f32****`
     */
    "ParentUserGroupId": string;
}

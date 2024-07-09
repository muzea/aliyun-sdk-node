export interface CreateGroupRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 用户组的名称。
     * 格式：允许英文字母、数字和特殊字符`_-.` 。
     * 长度：最大128个字符。
     * @example `TestGroup`
     */
    "GroupName": string;
    /**
     * 用户组的描述。
     * 长度：最大1024个字符。
     * @example `This is a group.`
     */
    "Description"?: string;
}

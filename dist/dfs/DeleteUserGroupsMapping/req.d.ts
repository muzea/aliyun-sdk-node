export interface DeleteUserGroupsMappingRequest {
    /**
     * 文件系统所在的Region。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 文件存储 HDFS 版的文件系统实例ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    "FileSystemId": string;
    /**
     * 用户名。
     * 限制：
     * - 必须以字母或者下划线（_）开头。
     * - 长度为1~32个字符串，不能是空字符串。
     * - 支持小写英文字母、数字和下划线（_）。
     * >  每个用户最多属于10个组。
     * @example `user1`
     */
    "UserName": string;
    /**
     * 用户名所属的组名。
     * 限制：
     * - 必须以字母或者下划线（_）开头。
     * - 长度为1~32个字符串，不能是空字符串。
     * - 支持小写英文字母、数字和下划线（_）。
     * @example `["group1","group2"]`
     */
    "GroupNames": string[];
}

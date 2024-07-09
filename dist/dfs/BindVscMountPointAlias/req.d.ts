export interface BindVscMountPointAliasRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 挂载点ID。
     * @example `f-037cb49e1d-c****.dfs.aliyuncs.com`
     */
    "MountPointId": string;
    /**
     * 挂载点别名。
     * @example `sdfe`
     */
    "AliasPrefix": string;
    /**
     * 文件系统ID。
     * @example `e389e5c7-bcb4-4558-846a-e5afc444****`
     */
    "FileSystemId": string;
}

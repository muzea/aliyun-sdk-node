export interface RemoveFilePermissionRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 文件的ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。
     * @example `6333e553a133ce21e6f747cf948bb9ef95d7****`
     */
    "FileId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-066224****`
     */
    "CdsId": string;
    /**
     * 授权用户列表。
     */
    "MemberList": {
        /**
         * 目前支持两种方式设置权限，一种是通过指定角色设置权限，另一种是自定义设置操作权限，该字段用于指定角色设置权限，与`ActionList`互斥，当两个字段同时设置时，以该字段为准。
         * @example `SystemFileUploaderAndDownloader`
         */
        RoleId: string;
        /**
         * 权限信息。
         */
        CdsIdentity: {
            /**
             * 用户ID或者群组ID。
             * @example `249dsfseee643h33g3dv****`
             */
            Id: string;
            /**
             * 对象类型。
             * @example `IT_User`
             */
            Type: string;
        };
    }[];
    /**
     * 团队空间ID。
     * @example `cg-1fbmvrc7ug5m7****`
     */
    "GroupId"?: string;
}

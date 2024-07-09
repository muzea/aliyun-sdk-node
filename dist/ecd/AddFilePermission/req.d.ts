export interface AddFilePermissionRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 使用网盘的用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-352282****`
     */
    "CdsId": string;
    /**
     * 文件的ID。您可以调用[ListCdsFiles](~~2247622~~)接口查询对应文件的ID。
     * @example `6333e553a133ce21e6f747cf948bb9ef95d7****`
     */
    "FileId": string;
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
         * 授权过期的时间。 从1970年1月1日0点到目标时间，单位：毫秒。 永久有效可以设置为系统预定义的一个值。例如：4775500800000。
         * @example `4775500800000`
         */
        ExpireTime: number;
        /**
         * 子用户组是否继承。
         * @example `false`
         */
        DisinheritSubGroup: boolean;
        /**
         * 用户对象。
         */
        CdsIdentity: {
            /**
             * 用户ID。
             * @example `alice`
             */
            Id: string;
            /**
             * 用户类型。
             * @example `IT_User`
             */
            Type: string;
        };
    }[];
    /**
     * 团队空间ID。
     * @example `cg-i1ruuudp92qpj****`
     */
    "GroupId"?: string;
}

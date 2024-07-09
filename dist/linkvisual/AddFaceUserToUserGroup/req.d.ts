export interface AddFaceUserToUserGroupRequest {
    /**
     * 业务隔离ID，用于同一个阿里云账号下不同业务应用之间的数据隔离。
     * ><notice>
     * 用户和用户组，必须在同一个隔离ID下。请与调用[AddFaceUser](~~288338~~)接口添加用户，和调用[AddFaceUserGroup](~~288341~~)接口创建用户组时设置的**IsolationId**保持一致。
     * ></notice>
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 用户ID。请传入在调用[AddFaceUser](~~288338~~)接口添加用户后，获取并保存到本地的用户ID。
     * @example `3mtjaqebeq4d****`
     */
    "UserId": string;
    /**
     * 用户组ID。请传入在调用[AddFaceUserGroup](~~288341~~)接口创建用户组后，获取并保存到本地的用户组ID。
     * @example `kvjy****`
     */
    "UserGroupId": string;
}

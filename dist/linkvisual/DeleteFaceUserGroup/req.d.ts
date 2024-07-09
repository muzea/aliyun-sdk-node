export interface DeleteFaceUserGroupRequest {
    /**
     * 业务隔离ID，用于隔离同一个阿里云账号下不同业务应用之间的数据。请与调用[AddFaceUserGroup](~~288341~~)接口添加用户时设置的**IsolationId**保持一致。
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 用户组ID。请传入在调用[AddFaceUserGroup](~~288341~~)接口添加用户组后，获取并保存到本地的用户组ID。
     * @example `kvjy****`
     */
    "UserGroupId": string;
}
